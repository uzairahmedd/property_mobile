import {
  ImageBackground,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Badge from '../badge'
import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Text } from '../Themed'

interface Props {
  style?: {}
}

const ListItem = ({ style }: Props) => {
  const navigation = useNavigation()
  return (
    <>
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => navigation.navigate('PropertyDetail')}
      >
        <ImageBackground
          style={[styles.imageContainer, style]}
          imageStyle={{ borderRadius: 10 }}
          source={require('../../assets/images/sample-property-2.png')}
        >
          <Badge text={'للبيع'} style={{ backgroundColor: '#2894CF' }} />
          <Badge
            text={'متاح'}
            style={{ backgroundColor: '#292071', marginTop: 0 }}
          />

          <View style={styles.priceView}>
            <Text style={[styles.badgeText, { fontWeight: 'bold' }]}>
              4.5 مليون ر.س
            </Text>
          </View>
        </ImageBackground>
        <View style={{ padding: 5 }}>
          <Text style={{ fontSize: 18 }}>
            فيلا إطلالة مميزة في حي سكني هادئ
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="map-pin" />
            <Text style={{ fontSize: 14, marginLeft: 10 }}>
              {'فيلا إطلالة مميزة في حي سكني هادئ'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default ListItem
//
const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'flex-end',
    backgroundColor: 'green',
    width: 300,
    height: 170,
    borderRadius: 10
  },
  badge: {
    width: 50,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    margin: 10
  },
  badgeText: {
    textAlign: 'center',
    color: 'white'
  },
  priceView: {
    width: '50%',
    height: 40,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#C9009D',
    bottom: 0,
    position: 'absolute'
  }
})
