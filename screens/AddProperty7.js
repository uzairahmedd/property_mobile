import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { Svg, Path } from 'react-native-svg'

import { useFonts } from '@expo-google-fonts/dev'

export default function AddProperty7({navigation}) {
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      // style={{ height: Dimensions.get('window').height }}
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
        <Text>انتهت العملية</Text>
        <Text> 6/6 </Text>
      </View>
    </ScrollView>
  )
}

const stylesheet = StyleSheet.create({
  
  })
