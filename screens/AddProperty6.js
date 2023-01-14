import React, { useState } from "react";
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
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';
import { Svg, Path } from "react-native-svg";
import Selector from "../components/generic/selector";

import { useFonts } from "@expo-google-fonts/dev";
import { AntDesign } from "@expo/vector-icons";

export default function AddProperty4({ navigation, route }) {
  let params = route.params // params (form data) from previous screen

  const [youtubeLink, setYoutubeLink] = useState('')
  const [images, setImages] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

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
      console.log(form)
    }

    params = {...params, ...{ youtubeLink, processedImages }}
    console.log(params)
    navigation.navigate('AddProperty5', params)
  }

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
        <Text>اضافة إعلان عقار</Text>
        <Text> 6/6 </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 }}>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
        <View style={[stylesheet.style_Rectangle_, { backgroundColor: '#1DA1F2' }]}></View>
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
            borderColor: 'red',
            borderRadius: 10,
          }}
          theme={{
            roundness: 10,
            borderRadius: 10,
          }}
        > التالي </Button>
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
})