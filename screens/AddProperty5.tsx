import React, { useRef, useState } from 'react'
import {
  View, Image
} from 'react-native'
import {
  Button,
  Text
} from 'react-native-paper';

import MapboxGL from '@rnmapbox/maps';
MapboxGL.setAccessToken('pk.eyJ1IjoicmFrYW5vbmxpbmUiLCJhIjoiY2xjeGpsMmdxMG05ajN2cXJocm5mazV3diJ9.puFe2Kj4KfE5v9Ky20ohYg');


export default function AddProperty5({navigation, route}) {
  const {setFieldValue} = route.params
  console.log( setFieldValue , '----')
  const RIYADH = [46.738586, 24.774265]
  const pointAnnotation = useRef<{ refresh: () => void }>(null);
  const [coordinates, setCoordinates] = useState(RIYADH);
  return (
    <View
      style={{flex:1}}
    >
      <MapboxGL.MapView 
        style={{flex: 1}}
        zoomEnabled={true}
        compassEnabled={true}
      >
        <MapboxGL.Camera
          zoomLevel={9}
          centerCoordinate={RIYADH}
        />
        {/* <MapboxGL.MarkerView
          
          coordinate={RIYADH}
          >
          <Image
            source={require('../assets/images/placeholder.png')}
            style={{
              width: 35,
              height: 35
            }}
          />
        </MapboxGL.MarkerView> */}
        <MapboxGL.PointAnnotation
          id={'pointAnnotation'}
          coordinate={RIYADH}
          draggable={true}
          ref={pointAnnotation}
          onDragEnd={({geometry}) => setCoordinates(geometry?.coordinates ?? [])}
        >
          <Image
            source={require('../assets/images/placeholder.png')}
            style={{
              width: 35,
              height: 35
            }}
            onLoad={() => pointAnnotation.current?.refresh()}
          />
        </MapboxGL.PointAnnotation>
        {
          coordinates && <MapboxGL.Callout title={coordinates[0] +' - '+ coordinates[1]} />
        }
      </MapboxGL.MapView>
      <View
        style={{
          paddingVertical: 30,
          width: "80%",
          alignSelf: "center",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, marginBottom: 20, textAlign: 'center' }}>اسحب المؤشر لتحديد الموقع ثم قم بالتأكيد</Text>
        <Button
          style={{ width: "100%", backgroundColor: "#1DA1F2" }}
          mode="contained"
          onPress={() => {
            setFieldValue('loc', coordinates)
            navigation.goBack()
          }}
          contentStyle={{
            borderRadius: 10,
            height: 50
          }}
          theme={{
            roundness: 10,
          }}
        >
          
          التالي
        </Button>
      </View>
    </View>
  )
}