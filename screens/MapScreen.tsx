import React from 'react'
import {
  View, Image, Text
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
          <Image
            source={require('../assets/images/placeholder.png')}
            style={{
              width: 35,
              height: 35
            }}/>
        </MapboxGL.MarkerView>
      )
    })
  }

  return (
    <View
      style={{flex:1, paddingTop: 30 /* height: Dimensions.get('window').height */ }}
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