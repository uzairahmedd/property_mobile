import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { Text } from 'react-native-paper'
import Badge from '../components/badge'
import CityList from '../components/cityList'
import CityListItem from '../components/cityListItem'
import EditScreenInfo from '../components/EditScreenInfo'
import PropertyList from '../components/propertyList'

import { View } from '../components/Themed'
import { RootTabScreenProps } from '../types'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <CityList />
      {/* <CityListItem city='الرياض' count={250}/> */}
      <PropertyList title={'أضيفت مؤخرا'} label={'للبيع'} />
      <PropertyList title={'أضيفت مؤخرا'} label={'للايجار'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
