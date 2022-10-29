import React, { useState } from 'react'
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { View } from '../../components/Themed'
import Badge from '../../components/badge'

const _renderItem = ({ item, index }: any) => {
  return (
    <ImageBackground style={styles.imageContainer} source={item.image}>
      <Badge
        text={'للبيع'}
        style={{ backgroundColor: '#2894CF', marginTop: 70 }}
      />
      <Badge
        text={'متاح'}
        style={{ backgroundColor: '#292071', marginTop: 0 }}
      />
    </ImageBackground>
  )
}

interface Props {
  items: any[]
  width?: number
}

const ImageCarousel = ({ items, width }: Props) => {
  const [index, setIndex] = useState(0)
  const defaultWidth = Dimensions.get('window').width

  return (
    <View style={styles.container}>
      <Carousel
        vertical={false}
        data={items}
        renderItem={_renderItem}
        sliderWidth={width ?? defaultWidth}
        itemWidth={width ?? defaultWidth}
        onSnapToItem={setIndex}
        style={{ backgroundColor: 'red' }}
      />

      <Pagination
        dotsLength={items.length}
        activeDotIndex={index}
        containerStyle={{ position: 'absolute', bottom: 0 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 1,
          backgroundColor: '#292071'
        }}
        inactiveDotStyle={{
          backgroundColor: '#ffffff'
          // Define styles for inactive dots here
        }}
        inactiveDotScale={1}
      />
    </View>
  )
}

export default ImageCarousel

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  imageContainer: {
    alignSelf: 'center',
    alignItems: 'flex-end',

    width: Dimensions.get('window').width,
    height: 260
    // borderRadius: 10,
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
