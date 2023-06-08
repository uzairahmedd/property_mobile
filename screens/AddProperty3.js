import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import {
  TextInput,
  Text,
  Button
} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import { Svg, Path } from "react-native-svg";
import Selector from "../components/generic/selector";
import * as yup from "yup";
import { Formik } from "formik";
import useAxios from 'axios-hooks'

import { useFonts } from "@expo-google-fonts/dev";
import { AntDesign } from "@expo/vector-icons";

export default function AddProperty3({ navigation, route }) {
  let params = route.params // params (form data) from previous screen
  const [features, setFeatures] = useState([])
  const [{ data, loading, error }, fetchCategories] = useAxios(
    'https://mychoice.sa/api/categories'
  )

  useEffect(() => {
    if(!data && !loading){
      fetchCategories()
    } else {
      setFeatures(data?.feature ?? [])
    }
  }, [data])

  const schema = yup.object().shape({
    bedrooms: yup.string().required("Number of bedrooms required."),
    bathrooms: yup.string().required("Number of bathrooms required"),
    lounges: yup.string().required("Number of lounges required"),
    drawingRooms: yup.string().required("Number of drawing rooms required"),
    numberOfPositions: yup.string().required("Field is required"),
    furnishStatus: yup.string().required("Furnish Status is required"),
    selectedFeatures: yup.array().required("Feature selection is required"),
  });

  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [bedrooms, setBedrooms] = useState()
  const [bathrooms, setBathrooms] = useState()
  const [lounges, setLounges] = useState()
  const [drawingRooms, setDrawingRooms] = useState();
  const [numberOfPositions, setNumberOfPositions] = useState();
  const [furnishStatus, setFurnishStatus] = useState();

  const handleSubmit = ({ bedrooms, bathrooms, lounges, drawingRooms, numberOfPositions, furnishStatus, selectedFeatures }) => {
    setBedrooms(bedrooms)
    setBathrooms(bathrooms)
    setLounges(lounges)
    setDrawingRooms(drawingRooms)
    setNumberOfPositions(numberOfPositions)
    setFurnishStatus(furnishStatus)
    setSelectedFeatures(selectedFeatures)
    
    params = {...params, ...{ bedrooms, bathrooms, lounges, drawingRooms, numberOfPositions, furnishStatus, selectedFeatures }}
    navigation.navigate('AddProperty4', params)
  };

  const renderNumberOptionSelect = (fieldName, setFieldValue, state, limit, first = '') => {
    let array = [];
    let iter = first ? -1 : 0;
    for (let index = iter; index < limit; index++) {
      array.push(
        <TouchableOpacity
          onPress={() => setFieldValue(fieldName, index + 1)}
          style={[
            {
              borderRadius: 8,
              borderWidth: 0.5,
              paddingHorizontal: 10,
              paddingVertical: 7,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 5
            },
            state == (index + 1) ? { backgroundColor: '#1DA1F2', color: 'white', borderColor: 'white' } : { backgroundColor: 'white' }
          ]}
        >
          <Text style={[
            state == (index + 1) ? { color: 'white' } : { color: 'black' }
          ]}>{first && index == -1 ? first : index + 1}</Text>
        </TouchableOpacity>
      );
      
    }
    return array
  }

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 40,
      }}
    >
      <View
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign
            name="rightcircleo"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Text style={stylesheet.title}>اضافة إعلان عقار</Text>
        <Text style={stylesheet.title}> 3/4 </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 }}>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={stylesheet.style_Rectangle_}></View>
        {/* <View style={stylesheet.style_Rectangle_}></View>
        <View style={stylesheet.style_Rectangle_}></View> */}
      </View>
      
      <Formik
        initialValues={{ bedrooms, bathrooms, lounges, drawingRooms, numberOfPositions, furnishStatus, selectedFeatures }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnChange={false}
      >
        {({
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          values,
          errors,
        }) => {
          const { bedrooms, bathrooms, lounges, drawingRooms, numberOfPositions, furnishStatus, selectedFeatures } = values;
          console.log('--', errors)
          return (
            <>
              <View>
                <View><Text>غرف النوم </Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 20 }}>
                  {
                    renderNumberOptionSelect('bedrooms', setFieldValue, bedrooms, 6, 'استوديو')
                  }
                </View>
              </View>
              { errors.bedrooms ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.bedrooms} </Text> : null}

              <View>
                <View><Text>دورات المياه</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 20 }}>
                  {
                    renderNumberOptionSelect('bathrooms', setFieldValue, bathrooms, 6)
                  }
                </View>
              </View>
              { errors.bathrooms ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.bathrooms} </Text> : null}

              <View>
                <View><Text>صالات</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 20 }}>
                  {
                    renderNumberOptionSelect('lounges', setFieldValue, lounges, 6, 'غير متوفر')
                  }
                </View>
              </View>
              { errors.lounges ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.lounges} </Text> : null}

              <View>
                <View><Text>مجالس</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 20 }}>
                  {
                    renderNumberOptionSelect('drawingRooms', setFieldValue, drawingRooms, 6, 'غير متوفر')
                  }
                </View>
              </View>
              { errors.drawingRooms ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.drawingRooms} </Text> : null}

              <View>
                <View><Text>عدد المواقف</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 20 }}>
                  {
                    renderNumberOptionSelect('numberOfPositions', setFieldValue, numberOfPositions, 6)
                  }
                </View>
              </View>
              { errors.numberOfPositions ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.numberOfPositions} </Text> : null}

              <View>
                <Selector
                  value={furnishStatus}
                  setValue={(val) => setFieldValue('furnishStatus', val)}
                  items={[{label: 'غير مفروشة', value: 0}, {label: 'مفروشة', value: 1}, {label: 'نص مفروشة', value: 2}]}
                  label={'التأثيث'}
                />
              </View>
              { errors.furnishStatus ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.furnishStatus} </Text> : null}
              
              <View style={{ marginVertical: 10 }}>
                <View><Text>تحديد مميزات العقار</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap', marginTop: 20 }}>
                {
                  features.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        if(selectedFeatures.includes(item.id)){
                          arr = selectedFeatures.filter(val => val != item.id);
                          setFieldValue('selectedFeatures', arr);
                        } else {
                          setFieldValue('selectedFeatures', [...selectedFeatures, item.id]);
                        }
                      }}
                      style={[
                        {
                          borderRadius: 8,
                          borderWidth: 0.5,
                          paddingHorizontal: 10,
                          paddingVertical: 7,
                          textAlign: 'center',
                          backgroundColor: 'white',
                          margin: 5
                          
                        },
                        selectedFeatures.includes(item.id) ? { backgroundColor: '#1DA1F2', color: 'white', borderColor: 'white' } : { backgroundColor: 'white' }
                      ]}
                    >
                      <Text style={[
                        selectedFeatures.includes(item.id) ? { color: 'white' } : { color: 'black' }
                      ]} >{item.ar_name}</Text>
                    </TouchableOpacity>
                  ))
                }
                </View>
              </View>
              { errors.selectedFeatures ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.selectedFeatures} </Text> : null}
              <View
                style={{
                  marginVertical: 10,
                  width: "100%",
                  alignSelf: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{ width: "100%", backgroundColor: "#1DA1F2" }}
                  mode="contained"
                  onPress={handleSubmit}
                  contentStyle={{
                    borderRadius: 10,
                    height: 50
                  }}
                  theme={{
                    roundness: 10,
                  }}
                >
                  التالي
                </Button>
              </View>
            </>
          )}}
        </Formik>
    </ScrollView>
  );
}
const stylesheet = StyleSheet.create({
  style_Rectangle_: {
    width: "12%",
    marginHorizontal: 5,
    height: 9,
    borderRadius: 0,
    backgroundColor: "#ddd",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
})