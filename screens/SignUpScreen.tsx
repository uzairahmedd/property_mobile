import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import useAxios from 'axios-hooks'
import { AntDesign } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import * as yup from "yup";
import { Formik } from "formik";
import { Modal, Portal, Button, Provider, TextInput } from 'react-native-paper';

export default function SignUpScreen({ navigation, route }: RootStackScreenProps<"SignUpScreen">) {
  const { data } = route.params
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(data.phone ?? '')
  const [password, setPassword] = useState('')

  const [{ data: registerData, loading: registerLoading, error: registerError }, registerRequest] = useAxios(
    {
      url: 'https://mychoice.sa/api/user_register',
      method: 'POST'
    },
    { manual: true }
  )

  const [{ data: otpData, loading: otpLoading, error: otpError }, otpRequest] = useAxios(
    {
      url: 'https://mychoice.sa/api/send_otp',
      method: 'POST'
    },
    { manual: true }
  )

  const schema = yup.object().shape({
    name: yup.string().required("مطلوب اسم"),
    email: yup.string().required("البريد الالكتروني مطلوب"),
    password: yup.string().required("كلمة المرور مطلوبة"),
    phone: yup.string().required("رقم الهاتف مطلوب"),
  });

  const handleSubmit = ({email, name, phone, password}: any) => {
    setName(name)
    setEmail(email)
    setPhone(phone)

    registerRequest({
      data: {
        name, email, phone, password, password_confirmation: password, term_condition: true,
      }
    })
    otpRequest({
      data: {
        phone
      }
    })
  }

  useEffect(() => {
    if(!registerLoading){
      if(registerData?.status == "error"){

      }
      // if(otpData.message == "User doesn't exist"){
      //   setPhoneError("")
      //   //@ts-ignore
      //   navigation.navigate('SignUpScreen', { data: { phone: phone } })
      // }
    }
    if(!otpLoading && otpData){
      navigation.navigate('OTPScreen', { data: { phone: phone } })
    }
  }, [registerData, otpData])

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 40,
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
        <Text style={styles.title}>تفعيل الحساب</Text>
        <Text></Text>
      </View>
      
      <Formik
        initialValues={{ name, email, phone, password}}
        onSubmit={handleSubmit}
        validationSchema={schema}
        // validateOnChange={false}
      >
        {({
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          values,
          errors,
        }) => {
          const { name, email, phone, password } = values;
          console.log('--', errors)
          return (

            <View style={{marginTop: 20}}>

              <Text style={{textAlign: 'left', marginVertical: 10}}>الإسم كامل</Text>
              <TextInput
                theme={{
                  roundness: 10,
                  colors: {
                    primary: "#1DA1F2",
                  }
                }}
                placeholder="الإسم كامل"
                mode="outlined"
                value={name}
                onChangeText={handleChange('name')}
              />
              { errors.name ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.name} </Text> : null}

              <Text style={{textAlign: 'left', marginVertical: 10}}>البريد الإلكتروني</Text>
              <TextInput
                theme={{
                  roundness: 10,
                  colors: {
                    primary: "#1DA1F2",
                  }
                }}
                placeholder="البريد الإلكتروني"
                mode="outlined"
                keyboardType="email-address"
                value={email}
                onChangeText={handleChange('email')}
              />
              { errors.email ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.email} </Text> : null}

              <Text style={{textAlign: 'left', marginVertical: 10}}>كلمه السر</Text>
              <TextInput
                theme={{
                  roundness: 10,
                  colors: {
                    primary: "#1DA1F2",
                  }
                }}
                secureTextEntry={true}
                placeholder="كلمه السر"
                mode="outlined"
                value={password}
                onChangeText={handleChange('password')}
              />
              { errors.password ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.password} </Text> : null}

              <Text style={{textAlign: 'left', marginVertical: 10}}>ادخل رقم الجوال للتسجيل</Text>
              <TextInput
                theme={{
                  roundness: 10,
                  colors: {
                    primary: "#1DA1F2",
                  }
                }}
                placeholder="رقم الجوال"
                mode="outlined"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={handleChange('phone')}
              />
              { errors.phone ? <Text style={{textAlign: 'left', color: 'red'}}> {errors.phone} </Text> : null}
              <Button 
                style={{ width: '100%', backgroundColor: '#1DA1F2', marginTop: 20}}
                mode="contained"
                onPress={handleSubmit}
                contentStyle={{
                  borderColor: 'red',
                  borderRadius: 10,
                  height: 50
                }}
                theme={{
                  roundness: 10,
                }}
              > تقديم 
              </Button>
            </View>
          )}}
      </Formik>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  modal: {
    position: "absolute",
    bottom: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: "100%",
    backgroundColor: 'white',
    padding: 20,
    height: '50%',
    top: Dimensions.get('screen').height / 2
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});