import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Image, ScrollView, ActivityIndicator, Text, Dimensions, Pressable, Keyboard } from "react-native";
import Badge from "../components/badge";
import CityList from "../components/cityList";
import CityListItem from "../components/cityListItem";
import EditScreenInfo from "../components/EditScreenInfo";
import PropertyList from "../components/propertyList/VerticalList";
import useAxios from 'axios-hooks'

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import NavBar from "../components/models/NavBar";
import useAppReducer from '../hooks/useAuthReducer';
import AuthProvider from '../providers/authProvider';
import { Modal, Portal, Button, Provider, TextInput, FAB } from 'react-native-paper';

export default function HomeScreen({ navigation, isLoggedIn }: RootTabScreenProps<"Home">) {
  const [listings, setListings] = useState()
  const [phone, setPhone] = useState('+966')
  const [phoneError, setPhoneError] = useState("")
  const [showRegistrationError, setShowRegistrationError] = useState(false)
  const [visible, setVisible] = useState(false);
  const [state, dispatch] = useAppReducer()
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  console.log('---is logged in---', isLoggedIn)

  const [{ data, loading, error }, fetchListings] = useAxios(
    'https://mychoice.sa/api/listings'
  )

  const [{ data: otpData, loading: otpReqLoading, error: otpReqError }, getOtp] = useAxios(
    {
      url: 'https://mychoice.sa/api/send_otp',
      method: 'POST'
    },
    { manual: true }
  )

  const handleSubmit = () => {
    setShowRegistrationError(false)
    setPhoneError("")
    
    if(phone.length != 13){
      setPhoneError('يجب أن يتكون تنسيق الهاتف من 13 رقمًا (9665xxxxxxxx+)')
    } else if (phone[4] != "5") {
      setPhoneError('يجب أن يبدأ الهاتف بالرقم 5 (9665xxxxxxxx+)')
    } else {
      setPhoneError("")
      getOtp({
        data: {
          phone
        }
      })
    }
  }

  const toEnDigit=(s: string)=>s.replace(/[٠-٩۰-۹]/g, a => a.charCodeAt(0)&15);

  const transformPhoneNumber = (phone: string) => {
    let updatedPhone = toEnDigit(phone)
    setPhone(updatedPhone)
  }
  
  useEffect(() => {
    if(listings == undefined){
      fetchListings()
    }
    if(!loading && data){
      setListings(data)
    }

    if(!otpReqLoading && otpData && otpData.status == "error"){
      console.log('---hala---', otpData)
      if(otpData.message == "User doesn't exist"){
        setPhoneError("")
        setShowRegistrationError(true)
        //@ts-ignore
        // navigation.navigate('SignUpScreen', { data: { phone: phone } })
      }
    } else if(!otpReqLoading && otpData && (otpData.status == "success" || otpData.otp)){
      //@ts-ignore
      navigation.navigate('OTPScreen', { data: { phone: phone } })
    }
  }, [otpData, data])

  if (loading) return <ActivityIndicator size='small' />
  if (error) return <Text>Error! {JSON.stringify(error)}</Text>

  return (
    <View style={styles.container}>
      <ScrollView
        style={{padding:0}}
      >
        <CityList />
        {/* <CityListItem city='الرياض' count={250}/> */}
        <PropertyList data={listings?.data} title={"أضيفت مؤخرا"} label={"للبيع"} />
        {/* <PropertyList data={listings?.data} title={"أضيفت مؤخرا"} label={"للايجار"} /> */}
      </ScrollView>

      {/* <Portal> */}
      {
        // !state.userToken && (
          <Modal 
            visible={visible}
            contentContainerStyle={styles.modal}
            dismissable={false}
          >
            <Pressable onPress={() => {}}>
              <View style={{ height: '100%' }}>
                <Pressable onPress={hideModal}>
                  <Image
                    style={[{ width: 25, height: 25, tintColor: 'black', marginBottom: 10 }]}
                    resizeMode="contain"
                    source={require("../assets/images/icon-back.png")}
                  />
                </Pressable>
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
                  textContentType="telephoneNumber"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={transformPhoneNumber}
                />
                { phoneError ? <Text style={{textAlign: 'left', color: 'red', marginVertical: 10}}> {phoneError} </Text> : null}
                <Button 
                  style={{ width: '100%', backgroundColor: '#1DA1F2', marginTop: 20}}
                  mode="contained"
                  onPress={handleSubmit}
                  contentStyle={{
                    borderRadius: 10,
                    height: 50
                  }}
                  theme={{
                    roundness: 10,
                  }}
                > تقديم </Button>
              </View>
            </Pressable>
          </Modal>
        // )
      }
      {/* </Portal> */}

      <FAB
        icon="map"
        // label="عرض الخريطة"
        color="#1DA1F2"
        style={styles.fab}
        onPress={() => navigation.navigate('MapScreen', { data: listings?.data ?? [] })}
      />

      <View style={{ position: "absolute", bottom: 20, width:"100%" }}>
        <NavBar navigation={navigation} isLoggedIn={isLoggedIn} unauthAction={setVisible} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor: '',
    // padding: 20,
  },
  modal: {
    position: "absolute",
    bottom: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width:"100%",
    backgroundColor: 'white',
    padding: 20,
    height: '90%',
    zIndex: 1000,
    top: 100
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
  fab: {
    position: 'absolute',
    bottom: 120,
    backgroundColor: 'white',
    left: 15
  }
});
