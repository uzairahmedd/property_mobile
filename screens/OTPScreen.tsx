import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import useAxios from 'axios-hooks'
import { AntDesign } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import { AuthContext } from "../providers/authProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as yup from "yup";
import { Formik } from "formik";
import { Modal, Portal, Button, Provider, TextInput } from 'react-native-paper';

export default function OTPScreen({ navigation, route }: RootStackScreenProps<"SignUpScreen">) {
  const { data } = route.params
  const [code, setCode] = useState('')
  const [otpError, setOptError] = useState('')
  const { signIn } = useContext(AuthContext)

  const [{ data: responseData, loading, error }, verifyOtpRequest] = useAxios(
    {
      url: 'https://mychoice.sa/api/verify_otp',
      method: 'POST'
    },
    { manual: true }
  )
  
  useEffect(() => {
    if(!loading && responseData){
      if(responseData.status == "error" && responseData.data?.otp){
        setOptError(responseData.data?.otp ?? 'لم يكن OTP صحيحًا')
      } else if(responseData.status == "success") {
        const { user, token } = responseData.data
        AsyncStorage.multiSet([['auth-token', token], ['user', JSON.stringify(user)]], () => {
          console.log(token)
          signIn(token)
        })
        navigation.goBack()
      }
      // console.log('--navigation--', navigation.ge)
    }
  }, [responseData])

  const handleSubmit = () => {
    verifyOtpRequest({
      data: { otp: code, phone: data.phone }
    })
  }

  if (loading) return <ActivityIndicator size='small' />

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 60,
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
        <Text style={styles.title}></Text>
      </View>
      
      <Text style={{textAlign: 'left', marginVertical: 10}}>أدخل تم إرسال رمز التفعيل إلى الرقم الذي تم إدخاله</Text>
      <TextInput
        theme={{
          roundness: 10,
          colors: {
            primary: "#1DA1F2",
          }
        }}
        placeholder="أدخل رمز التفعيل"
        mode="outlined"
        keyboardType="number-pad"
        value={code}
        onChangeText={setCode}
      />
      { otpError ? <Text style={{textAlign: 'left', color: 'red', marginVertical: 10}}> {otpError} </Text> : null}
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
      > تفعيل </Button>
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