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
    data: any,
    style?: {}
  }
  
  const VerticalListItem = ({ data, style }: Props) => {
    const {
      description,
      media,
      title,
      price
    } = data
    // console.log(data)
    const navigation = useNavigation()
    return (
      <>
        <TouchableOpacity
          style={{ marginHorizontal: 5, marginVertical: 3, flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 3 }}
          onPress={() => navigation.navigate('PropertyDetail', { data })}
        >
          <ImageBackground
            style={[styles.imageContainer, style]}
            imageStyle={{ borderRadius: 3 }}
            source={{uri: "http:" + media.url}}
          >
            {/* <Badge text={'للبيع'} style={{ backgroundColor: '#2894CF' }} /> */}
            {/* <Badge
              text={'متاح'}
              style={{ backgroundColor: '#292071', marginTop: 0 }}
            />
  
            <View style={styles.priceView}>
              <Text style={[styles.badgeText, { fontWeight: 'bold' }]}>
                {price?.price} ر.س
              </Text>
            </View> */}
          </ImageBackground>
          <View style={{ paddingHorizontal: 8, paddingTop: 15, paddingBottom: 5, flexDirection: 'column', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: '100', textAlign: 'left' }}>
                {/* {price?.price} ر.س / سنوي */}
                {45000} ر.س / سنوي
                {"\n"} <Text style={{ fontSize: 10, color: '#aaa', fontWeight: '400', textAlign: 'left' }}>
                    ارض تجارية
                </Text>
            </Text>

            {/* <Text style={{ fontSize: 12, fontWeight: '400', textAlign: 'left' }}>
                شارع التخصصي ، المعذر الشمالي ، الرياض
            </Text> */}
            
            <View>
                <Text style={{ fontSize: 12, fontWeight: '900', textAlign: 'left' }}>
                   1500 {'متر مربع'}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="map-pin" />
                    <Text numberOfLines={2} style={{ width: 190, fontSize: 10, color: '#aaa', bottom: 0, textAlign: 'left', marginVertical: 5, marginLeft: 2}}>
                        {'شارع التخصصي ، المعذر الشمالي ، الرياض'}
                    </Text>
                </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  
  export default VerticalListItem
  //
  const styles = StyleSheet.create({
    imageContainer: {
      alignItems: 'flex-end',
      width: 150,
      height: 120,
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
  