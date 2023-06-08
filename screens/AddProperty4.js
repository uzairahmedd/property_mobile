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
  Button
} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddProperty4({ navigation, route }) {
  let params = route.params // params (form data) from previous screen

  const [youtubeLink, setYoutubeLink] = useState('')
  const [images, setImages] = useState(null);
  const [token, setAuthToken] = useState(null);
  
  const [{ data, loading, error }, publishListing] = useAxios(
    {
      url: 'https://mychoice.sa/api/list',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    },
    { manual: true }
  )

  useEffect(() => {
    AsyncStorage.getItem('auth-token').then(token => {
      if(token){
        setAuthToken(token)
      }
    })
    if(!loading){
      if(error && error.response.status == 401){
        
      } else if (error){
        navigation.navigate('status', { status: 'error', error: error.response.data })
      }
      else if(data){
        // console.log('----here---', data)
        navigation.navigate('status', { status: 'success' })
      }
    }
  }, [data,  error])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages(result.selected);
    }
  };

  const handleSubmit = () => {
    let processedImages = []
    if(images){
      const form = new FormData();
      processedImages = images.map(image => {
        return form.append("images[]", {
          name: image.assetId, // or whatever that URI's file name is
          uri: image.uri,
          type: image.type, // whatever the file extension is there for that particular file URI
        });
      }) || []
      // console.log(form)

    }
    
    params = {...params, ...{ youtubeLink, processedImages }}
    // console.log(params)
    publishListing({
      data: {
        ...params,
        max_price: params.price,
        min_price: params.price,
      }
    })
    // navigation.navigate('AddProperty5', params)
  }
  
  if (loading) return <ActivityIndicator size='small' />

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
        <Text style={stylesheet.title}> 4/4 </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 }}>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        {/* <View style={stylesheet.style_Rectangle_}></View>
        <View style={stylesheet.style_Rectangle_}></View> */}
      </View>
      
      <View>
        <TouchableOpacity
          onPress={async() => await pickImage()}
          style={{
            padding: 40,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#1DA1F2',
            borderStyle: 'dotted'
          }}
        >
          <Text style={{textAlign: 'center', color: '#1DA1F2'}}>اضف صورة</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
        {images && images.map(image => <Image key={image.assetId} source={{ uri: image?.uri }} style={{ width: 80, height: 80, borderRadius: 5, margin: 5 }} />)}
      </View>
  
      <View style={{marginVertical: 10}}>
        <Text>رابط الفيديو ( اختياري )</Text>
        <TextInput
          theme={{
            roundness: 10,
            colors: {
              primary: "#1DA1F2",
            }
          }}
          placeholder="مثال: http://youtube.be/dkdsds"
          mode="outlined"
          value={youtubeLink}
          onChangeText={setYoutubeLink}
        />    
      </View>

      <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 40}}>
        <Button 
          style={{ width: '100%', backgroundColor: '#1DA1F2'}}
          mode="contained"
          onPress={handleSubmit}
          contentStyle={{
            borderRadius: 10,
            height: 50
          }}
          theme={{
            roundness: 10,
          }}
        > توثيق العقار </Button>
      </View>
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