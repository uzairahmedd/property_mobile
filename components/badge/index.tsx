import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../Themed'

interface Props {
  text: string | null
  style?: {}
  textStyle?: {}
}

const Badge = ({ text, style, textStyle }: Props) => {
  return (
    <View style={[styles.badge, style]}>
      <Text style={[styles.badgeText, textStyle]}>{text}</Text>
    </View>
  )
}

export default Badge

const styles = StyleSheet.create({
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
  }
})
