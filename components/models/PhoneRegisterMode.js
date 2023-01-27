import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native'
import { Svg, Path } from 'react-native-svg'

import { useFonts } from '@expo-google-fonts/dev'

export default function PhoneRegisterModel() {
  let [fontsLoaded] = useFonts({})

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{ height: Dimensions.get('window').height }}
    >
      <View style={stylesheet.style_PhoneRegisterModel}>
        <View style={stylesheet.style_Container}>
          <View style={stylesheet.style_ContainerRadious}></View>
          <View style={stylesheet.style_Button}>
            <View style={stylesheet.style_Rectangle_74}></View>
            <View
              style={[
                stylesheet.style_Submit,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style_Submit,
                  {
                    position: 'relative',
                    // flexGrow: 1,
                    left: 0,
                    top: 0,
                    // height: "auto",
                    transform: [{ translateX: 0 }, { translateY: 0 }]
                  }
                ]}
              >
                تقديم
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Group_467}>
            <View style={stylesheet.style_Group_464}>
              <View style={stylesheet.style_Rectangle_74_2}></View>
              <View
                style={[
                  stylesheet.style_PhoneNumber,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_PhoneNumber,
                    {
                      position: 'relative',
                      // flexGrow: 1,
                      left: 0,
                      top: 0,
                      // height: "auto",
                      transform: [{ translateX: 0 }, { translateY: 0 }]
                    }
                  ]}
                >
                  رقم الجوال
                </Text>
              </View>
              <View
                style={[
                  stylesheet.style_CountryCode,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_CountryCode,
                    {
                      position: 'relative',
                      // flexGrow: 1,
                      left: 0,
                      top: 0,
                      // height: "auto",
                      transform: [{ translateX: 0 }, { translateY: 0 }]
                    }
                  ]}
                >
                  +966
                </Text>
              </View>
              <View
                style={[
                  stylesheet.style__,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style__,
                    {
                      position: 'relative',
                      // flexGrow: 1,
                      left: 0,
                      top: 0,
                      // height: "auto",
                      transform: [{ translateX: 0 }, { translateY: 0 }]
                    }
                  ]}
                >
                  |
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              stylesheet.style_Title,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_Title,
                {
                  position: 'relative',
                  // flexGrow: 1,
                  left: 0,
                  top: 0,
                  // height: "auto",
                  transform: [{ translateX: 0 }, { translateY: 0 }]
                }
              ]}
            >
              ادخل رقم الجوال للتسجيل
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Rectangle_79}></View>
      </View>
    </ScrollView>
  )
}

const stylesheet = StyleSheet.create({
  style_PhoneRegisterModel: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: 203,
    borderRadius: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(0,0,0,0)',
    left: 0,
    top: 0
  },
  style_Container: {
    position: 'absolute',
    width: '100%',
    height: 203,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_ContainerRadious: {
    position: 'absolute',
    width: '100%',
    height: 203,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    shadowColor: 'rgb(41, 32, 113)',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.15000000596046448,
    shadowRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_Button: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 48,
    transform: [{ translateX: 16 }, { translateY: 115 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 48,
    borderRadius: 8,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.10000000149011612,
    shadowRadius: 18,
    backgroundColor: 'rgba(29, 161, 242, 1)'
  },
  style_Submit: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 153,
    // right: "auto",
    top: 14,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Group_467: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 48,
    transform: [{ translateX: 16 }, { translateY: 55 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_464: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 48,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74_2: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 48,
    borderRadius: 8,
    opacity: 1,
    borderWidth: 1,
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_PhoneNumber: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 267,
    // right: "auto",
    top: 16,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(131, 131, 131, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_CountryCode: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 16,
    // right: "auto",
    top: 16,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style__: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 56,
    // right: "auto",
    top: 16,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(131, 131, 131, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Title: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 189,
    // right: "auto",
    top: 24,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 16,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Rectangle_79: {
    position: 'absolute',
    width: 64,
    height: 6,
    borderRadius: 8,
    opacity: 0.5,
    left: 155,
    // right: "auto",
    top: 7,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(200, 200, 200, 0.5)'
  }
})
