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
import MapboxGL from '@rnmapbox/maps';
MapboxGL.setAccessToken('pk.eyJ1IjoicmFrYW5vbmxpbmUiLCJhIjoiY2xjeGpsMmdxMG05ajN2cXJocm5mazV3diJ9.puFe2Kj4KfE5v9Ky20ohYg');

export default function MapScreen({navigation}) {
  return (
    <View
      bounces={false}
      showsVerticalScrollIndicator={false}
      // style={{flex:1, /* height: Dimensions.get('window').height */ }}
    >
      <MapboxGL.MapView style={styles.map} />
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})