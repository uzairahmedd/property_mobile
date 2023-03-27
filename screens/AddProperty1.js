import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as yup from "yup";
import { TextInput, Text, Button } from "react-native-paper";
import { Formik } from "formik";
import Selector from "../components/generic/selector";
import { AntDesign } from "@expo/vector-icons";

export default function AddProperty1({ navigation }) {
  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    purpose: yup.string().required("Property purpose is required"),
    description: yup.string().required("Description is required"),
    // region: yup.string().required("Region is required"),
    area: yup.string().required("Area is required"),
    address: yup.string().required("Address is required"),
  });

  const [purpose, setPropertyType] = useState("sale");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [region, setRegion] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();

  const handleSubmit = ({ purpose, title, description, address, area, region }) => {
    setPropertyType(purpose)
    setDescription(description)
    setRegion(region)
    setArea(area)
    setAddress(address)
    setTitle(title)
    
    const params = { purpose, title, description, address, area, region }
    navigation.navigate('AddProperty2', params)
  };

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
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="rightcircleo" size={24} color="black" />
        </TouchableOpacity>
        <Text style={stylesheet.title}>اضافة إعلان عقار</Text>
        <Text style={stylesheet.title}> 1/4 </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 20,
        }}
      >
        <View
          style={[
            stylesheet.style_Rectangle_,
            { backgroundColor: "#1DA1F2" },
          ]}
        ></View>
        <View style={stylesheet.style_Rectangle_}></View>
        <View style={stylesheet.style_Rectangle_}></View>
        <View style={stylesheet.style_Rectangle_}></View>
        {/* <View style={stylesheet.style_Rectangle_}></View>
        <View style={stylesheet.style_Rectangle_}></View> */}
      </View>
      <Formik
        initialValues={{ title, purpose, description, address, area, region }}
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
          const { purpose, title, description, address, area, region } = values;
          console.log(errors)
          return (
            <>

              <View>
                <Text>وصف العقار</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginVertical: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => setFieldValue('purpose', 'rent')}
                  style={[
                    {
                      borderRadius: 8,
                      borderWidth: 0.5,
                      paddingHorizontal: 10,
                      paddingVertical: 7,
                      textAlign: "center",
                      backgroundColor: "white",
                      margin: 5,
                    },
                    purpose == "rent"
                      ? {
                          backgroundColor: "#1DA1F2",
                          color: "white",
                          borderColor: "white",
                        }
                      : { backgroundColor: "white" },
                  ]}
                >
                  <Text
                    style={[
                      purpose == "rent"
                        ? { color: "white" }
                        : { color: "black" },
                    ]}
                  >
                    ايجار{" "}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFieldValue('purpose', 'sale')}
                  style={[
                    {
                      borderRadius: 8,
                      borderWidth: 0.5,
                      paddingHorizontal: 10,
                      paddingVertical: 7,
                      textAlign: "center",
                      backgroundColor: "white",
                      margin: 5,
                    },
                    purpose == "sale"
                      ? {
                          backgroundColor: "#1DA1F2",
                          color: "white",
                          borderColor: "white",
                        }
                      : { backgroundColor: "white" },
                  ]}
                >
                  <Text
                    style={[
                      purpose == "sale"
                        ? { color: "white" }
                        : { color: "black" },
                    ]}
                  >
                    بيع{" "}
                  </Text>
                </TouchableOpacity>
              </View>
              { errors.purpose ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.purpose} </Text> : null}

              <View style={{ marginVertical: 10 }}>
                <Text>اسم العقار</Text>
                <TextInput
                  theme={{
                    roundness: 10,
                    colors: {
                      primary: "#1DA1F2",
                    }
                  }}
                  multiline={true}
                  placeholder="اسم العقار"

                  numberOfLines={6}
                  mode="outlined"
                  value={title}
                  onChangeText={handleChange('title')}
                />
              </View>
              { errors.title ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.title} </Text> : null}

              <View style={{ marginVertical: 10 }}>
                <Text>وصف العقار ( مثال: شقة سكنية هادئة في مكان مميز )</Text>
                <TextInput
                  theme={{
                    roundness: 10,
                    colors: {
                      primary: "#1DA1F2",
                    }
                  }}
                  multiline={true}
                  placeholder="ادخل هنا.."

                  numberOfLines={6}
                  mode="outlined"
                  value={description}
                  onChangeText={handleChange('description')}
                />
              </View>
              { errors.description ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.description} </Text> : null}

              <View style={{ marginVertical: 10 }}>
                <Text>مساحة العقار</Text>
                <TextInput
                  theme={{
                    roundness: 10,
                    colors: {
                      primary: "#1DA1F2",
                    }
                  }}
                  keyboardType="numeric"
                  placeholder="المساحة بالمتر المربع"
                  mode="outlined"
                  value={area}
                  onChangeText={handleChange('area')}
                />
              </View>
              { errors.area ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.area} </Text> : null}

              <View style={{ marginVertical: 10 }}>
                <Text>عنوان العقار</Text>
                <TextInput
                  theme={{
                    roundness: 10,
                    colors: {
                      primary: "#1DA1F2",
                    }
                  }}
                  placeholder="المدينة"
                  mode="outlined"
                  value={address}
                  onChangeText={handleChange('address')}
                />
              </View>
              { errors.address ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.address} </Text> : null}

              <View style={{ marginVertical: 10 }}>
                <Selector
                  value={region}
                  setValue={(value) => setFieldValue('region', value)}
                  items={[
                    { label: "شمال", value: 1 },
                    { label: "جنوب", value: 2 },
                    { label: "شرق", value: 3 },
                    { label: "الغرب", value: 4 },
                  ]}
                  label={"المنطقة ( اختياري )"}
                />
              </View>

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
                  contentStyle={{
                    borderRadius: 10,
                    height: 50
                  }}
                  theme={{
                    roundness: 10,
                  }}
                  mode="contained"
                  onPress={handleSubmit}
                >
                  {" "}
                  التالي{" "}
                </Button>
              </View>
            </>
          );
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
});
