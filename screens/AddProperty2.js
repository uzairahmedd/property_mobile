import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import useAxios from 'axios-hooks'

import {
  TextInput,
  Text,
  Button,
  Modal
} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import { Svg, Path } from "react-native-svg";
import Selector from "../components/generic/selector";
import * as yup from "yup";
import { Formik } from "formik";
import { useFonts } from "@expo-google-fonts/dev";
import { AntDesign } from "@expo/vector-icons";

export default function AddProperty2({ navigation, route }) {
  let params = route.params // params (form data) from previous screen
  const [categories, setCategories] = useState([])
  const schema = yup.object().shape({
    category: yup.string().required("Category is required"),
    loc: yup.array().required("Property location is required"),
    price: yup.string().required("Price is required"),
    hasElectricity: yup.string().required("Field is required"),
    hasWaterMeter: yup.string().required("Field is required"),
    numberOfStreets: yup.string().required("Number of streets required"),
  });

  const [{ data, loading, error }, fetchCategories] = useAxios(
    'https://mychoice.sa/api/categories'
  )

  useEffect(() => {
    if(!data && !loading){
      fetchCategories()
    } else {
      setCategories(data?.category ?? [])
    }
  }, [data])

  const [category, setCategory] = useState('')
  const [loc, setLoc] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [hasElectricity, setHasElectricity] = useState(false);
  const [hasWaterMeter, setHasWaterMeter] = useState(false);
  const [numberOfStreets, setNumberOfStreets] = useState();
  const [streetInfo, setStreetInfo] = useState();

  const renderCategory = ({value, setFieldValue}) => {
    return categories.map(item => (
      <TouchableOpacity
        onPress={() => setFieldValue('category', item.id)}
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
          value == item.id ? { backgroundColor: '#1DA1F2', color: 'white', borderColor: 'white' } : { backgroundColor: 'white' }
        ]}
      >
        <Text style={[
          value == item.id ? { color: 'white' } : { color: 'black' }
        ]} >{item.ar_name}</Text>
      </TouchableOpacity>
    ))
  }

  const handleSubmit = ({ category, type, price, hasElectricity, hasWaterMeter, numberOfStreets, streetInfo }) => {    
    setCategory(category)
    setType(type)
    setPrice(price)
    setHasElectricity(hasElectricity)
    setHasWaterMeter(hasWaterMeter)
    setNumberOfStreets(numberOfStreets)
    setStreetInfo(streetInfo)
    
    params = {...params, ...{ category, type, price, hasElectricity, hasWaterMeter, numberOfStreets, streetInfo }}
    navigation.navigate('AddProperty3', params)
  };

  const renderNumberOptionSelect = (fieldName, setFieldValue, state, limit) => {
    let array = [];
    for (let index = 0; index < limit; index++) {
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
          ]}>{index + 1}</Text>
        </TouchableOpacity>
      );
      
    }
    return array
  }

  if (loading) return <ActivityIndicator size='small' />
  if (error) return <Text>Error!</Text>

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
        <Text style={stylesheet.title}> 2/4 </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 }}>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={stylesheet.style_Rectangle_}></View>
        <View style={stylesheet.style_Rectangle_}></View>
        {/* <View style={stylesheet.style_Rectangle_}></View>
        <View style={stylesheet.style_Rectangle_}></View> */}
      </View>

      <Formik
        initialValues={{ category, type, price, hasElectricity, hasWaterMeter, numberOfStreets, streetInfo }}
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
          const { category, type, price, hasElectricity, hasWaterMeter, numberOfStreets, streetInfo, loc } = values;
          return (
            <>
              <View style={{ marginVertical: 10 }}>
                <View><Text>نوع العقار</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                  {
                    renderCategory({value: category, setFieldValue: setFieldValue})
                  }
                </View>
              </View>
              { errors.category ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.category} </Text> : null}

              <View style={{ marginVertical: 10 }}>
                <Text>قيمة العقار</Text>
                <TextInput
                  keyboardType="numeric"
                  theme={{
                    roundness: 10,
                    colors: {
                      primary: "#1DA1F2",
                    }
                  }}
                  placeholder="قيمة الإيجار ( السنة )"
                  mode="outlined"
                  value={price}
                  onChangeText={handleChange('price')}
                />    
              </View>
              { errors.price ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.price} </Text> : null}

              <View style={{ marginVertical: 10 }}>
                <View><Text>حدد إحداثيات الموقع</Text></View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddProperty5', { setFieldValue })}
                    style={[
                      {
                        flexDirection: 'column',
                        justifyContent: 'center',
                        borderRadius: 8,
                        borderWidth: 0.5,
                        paddingHorizontal: 10,
                        paddingVertical: 7,
                        backgroundColor: 'white',
                        marginVertical: 5,
                        height: 55
                      },
                    ]}
                  >
                    <Text style={{ fontSize: 16 }}>{loc ? loc[0]+ " - " +loc[1] : "اختر موقعا"}</Text>
                  </TouchableOpacity>
              </View>
              { errors.loc ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.loc} </Text> : null}

              <View style={{ marginVertical: 10 }}>
                <View><Text>هل يوجد عداد كهرباء</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                  <TouchableOpacity
                    onPress={() => setFieldValue('hasElectricity', true)}
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
                      hasElectricity == true ? { backgroundColor: '#1DA1F2', color: 'white', borderColor: 'white' } : { backgroundColor: 'white' }
                    ]}
                  >
                    <Text style={[
                      hasElectricity == true ? { color: 'white' } : { color: 'black' }
                    ]} >نعم </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setFieldValue('hasElectricity', false)}
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
                      hasElectricity == false ? { backgroundColor: '#1DA1F2', color: 'white', borderColor: 'white' } : { backgroundColor: 'white' }
                    ]}
                  >
                    <Text style={[
                      hasElectricity == false ? { color: 'white' } : { color: 'black' }
                    ]}>لا </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginVertical: 10 }}>
                <View><Text>هل يوجد عداد ماء</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <TouchableOpacity
                    onPress={() => setFieldValue('hasWaterMeter', true)}
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
                      hasWaterMeter == true ? { backgroundColor: '#1DA1F2', color: 'white', borderColor: 'white' } : { backgroundColor: 'white' }
                    ]}
                  >
                    <Text style={[
                      hasWaterMeter == true ? { color: 'white' } : { color: 'black' }
                    ]} >نعم </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setFieldValue('hasWaterMeter', false)}
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
                      hasWaterMeter == false ? { backgroundColor: '#1DA1F2', color: 'white', borderColor: 'white' } : { backgroundColor: 'white' }
                    ]}
                  >
                    <Text style={[
                      hasWaterMeter == false ? { color: 'white' } : { color: 'black' }
                    ]}>لا </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginVertical: 10 }}>
                <View><Text>عدد الشوارع</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                  {
                    renderNumberOptionSelect('numberOfStreets', setFieldValue, numberOfStreets, 4)
                  }
                </View>
              </View>
              { errors.numberOfStreets ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.numberOfStreets} </Text> : null}

              {/* <View style={{ marginVertical: 10 }}>
                <Selector
                  value={region}
                  setValue={setRegion}
                  items={[{label: 'North', value: 1}, {label: 'South', value: 1}]}
                  label={ 'معلومات الشارع ' }
                />
              </View> */}

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
          )
        }}
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