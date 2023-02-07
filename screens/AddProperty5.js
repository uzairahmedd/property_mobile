import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { Svg, Path } from 'react-native-svg'
import useAxios from 'axios-hooks'

import { useFonts } from '@expo-google-fonts/dev'
import { AntDesign } from '@expo/vector-icons'

export default function AddProperty5({navigation, route}) {

  const [features, setFeatures] = useState([])
  const [feature, setFeature] = useState([])
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
  console.log('----', features)
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 40,
      }}
    >
      <View style={{ marginVertical: 10 }}>
        <View><Text>نوع العقار</Text></View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
        {
          features.map(item => (
            <TouchableOpacity
              onPress={() => setFeature(item.id)}
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
                feature == item.id ? { backgroundColor: '#1DA1F2', color: 'white', borderColor: 'white' } : { backgroundColor: 'white' }
              ]}
            >
              <Text style={[
                feature == item.id ? { color: 'white' } : { color: 'black' }
              ]} >{item.ar_name}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  </ScrollView>
  )
}