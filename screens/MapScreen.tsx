import React from 'react'
import {
  View, Image, Text, TouchableOpacity
} from 'react-native'
import { RootStackScreenProps } from "../types";

import MapboxGL from '@rnmapbox/maps';
MapboxGL.setAccessToken('pk.eyJ1IjoicmFrYW5vbmxpbmUiLCJhIjoiY2xjeGpsMmdxMG05ajN2cXJocm5mazV3diJ9.puFe2Kj4KfE5v9Ky20ohYg');

export default function MapScreen({navigation, route}:RootStackScreenProps<"MapScreen">) {
  const { data } = route.params

  const RenderAnnotations = ({data = []}): any => {
    return data.map((item: any, index: number) => {
      const coordinates = item.coordinates.split(',').map(Number)
      return (
        <MapboxGL.MarkerView
          coordinate={coordinates}>
            <TouchableOpacity style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} onPress={() => {
                navigation.navigate('PropertyDetail', { data: item })
              }}>
              <Text style={{padding: 3, margin: 2, borderRadius: 3, borderWidth: 1, borderColor: "#aaa", backgroundColor: 'white', textAlign: 'center'}}>{item.title}</Text>
              <Image
                source={require('../assets/images/placeholder.png')}
                style={{
                  width: 35,
                  height: 35
                }}/>
            </TouchableOpacity>
        </MapboxGL.MarkerView>
      )
    })
  }

  return (
    <View
      style={{flex:1 /* height: Dimensions.get('window').height */ }}
    >
      
      <MapboxGL.MapView 
        style={{flex: 1}}
        zoomEnabled={true}
        compassEnabled={true}
      >
        <MapboxGL.Camera
          zoomLevel={9}
          centerCoordinate={[46.738586, 24.774265]}
        />
        <RenderAnnotations data={data} />
      </MapboxGL.MapView>
    </View>
  )
}