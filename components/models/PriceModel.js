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

export default function PriceModel() {
  let [fontsLoaded] = useFonts({})

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{ height: Dimensions.get('window').height }}
    >
      <View style={stylesheet.style_PriceModel}>
        <View style={stylesheet.style_Group_458}>
          <View style={stylesheet.style_Rectangle_68}></View>
          <View style={stylesheet.style_Frame_468}>
            <View
              style={[
                stylesheet.style_Clear,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style_Clear,
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
                مسح
              </Text>
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
              الميزانية ( ريال سعودي )
            </Text>
          </View>
          <View style={stylesheet.style_Frame_467}>
            <View
              style={[
                stylesheet.style_Result,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style_Result,
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
                اظهار النتائج
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Polygon_1}></View>
        </View>
        <View style={stylesheet.style_Frame_469}>
          <View
            style={[
              stylesheet.style_minPriceValue,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_minPriceValue,
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
              0 ر.س
            </Text>
          </View>
          <View style={stylesheet.style_ep_arrow_down}>
            <Svg style={stylesheet.style_Vector} fill={'rgba(0, 0, 0, 1)'}>
              <Path
                fillRule={'nonzero'}
                d={
                  'M 9.450495950053865 0.11992139025090541 L 5.077245771879663 4.382921305789234 L 0.703995593705461 0.11992139025090541 C 0.6258600232083652 0.0436018030765494 0.5209693327232958 0.0008749366099080165 0.41174549347693207 0.0008749366099072394 C 0.30252165423056826 0.0008749366099080165 0.19763117236175815 0.0436018030765494 0.11949560186466227 0.11992139025090541 C 0.08166252498448506 0.15699008166344602 0.051606323244472715 0.20123496719021738 0.031087577707909448 0.2500653946550475 C 0.010568832171346177 0.29889582211987764 -3.885780631801391e-16 0.35132992603920277 0 0.40429623286459965 C -3.885780631801391e-16 0.45726253968999653 0.010568832171346177 0.5096962263767942 0.031087577707909448 0.5585266538416244 C 0.051606323244472715 0.6073570813064545 0.08166252498448506 0.6516023840657532 0.11949560186466227 0.6886710754782939 L 4.771870788322171 5.224671240468995 C 4.8535727515585245 5.304308373853681 4.963152457546729 5.348878860473633 5.077245771879663 5.348878860473633 C 5.191339086212596 5.348878860473633 5.300918792200801 5.304308373853681 5.382620755437155 5.224671240468995 L 10.034996150510922 0.6895464293207285 C 10.073096670175717 0.6524498680792108 10.10337945036077 0.608095993593179 10.124056934942596 0.5591036864269853 C 10.144734419524422 0.5101113792607915 10.155386924743652 0.4574733366455659 10.155386924743652 0.40429623286459965 C 10.155386924743652 0.3511191290836334 10.144734419524422 0.29848066923588035 10.124056934942596 0.24948836206968664 C 10.10337945036077 0.2004960549034929 10.073096670175717 0.15614259764998847 10.034996150510922 0.11904603640847079 C 9.956860580013826 0.04272644923411478 9.851969472296238 0 9.742745633049875 0 C 9.633521793803512 -7.771561432180723e-16 9.528631520550961 0.04272644923411478 9.450495950053865 0.11904603640847079 L 9.450495950053865 0.11992139025090541 Z'
                }
                strokeLinejoin={'miter'}
              />
            </Svg>
          </View>
        </View>
        <View style={stylesheet.style_Frame_470}>
          <View
            style={[
              stylesheet.style_maxPriceValue,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_maxPriceValue,
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
              10,000.0000+ ر.س
            </Text>
          </View>
          <View style={stylesheet.style_ep_arrow_down_2}>
            <Svg style={stylesheet.style_Vector_2} fill={'rgba(0, 0, 0, 1)'}>
              <Path
                fillRule={'nonzero'}
                d={
                  'M 9.450495950053865 0.11992139025090541 L 5.077245771879663 4.382921305789234 L 0.703995593705461 0.11992139025090541 C 0.6258600232083652 0.0436018030765494 0.5209693327232958 0.0008749366099080165 0.41174549347693207 0.0008749366099072394 C 0.30252165423056826 0.0008749366099080165 0.19763117236175815 0.0436018030765494 0.11949560186466227 0.11992139025090541 C 0.08166252498448506 0.15699008166344602 0.051606323244472715 0.20123496719021738 0.031087577707909448 0.2500653946550475 C 0.010568832171346177 0.29889582211987764 -3.885780631801391e-16 0.35132992603920277 0 0.40429623286459965 C -3.885780631801391e-16 0.45726253968999653 0.010568832171346177 0.5096962263767942 0.031087577707909448 0.5585266538416244 C 0.051606323244472715 0.6073570813064545 0.08166252498448506 0.6516023840657532 0.11949560186466227 0.6886710754782939 L 4.771870788322171 5.224671240468995 C 4.8535727515585245 5.304308373853681 4.963152457546729 5.348878860473633 5.077245771879663 5.348878860473633 C 5.191339086212596 5.348878860473633 5.300918792200801 5.304308373853681 5.382620755437155 5.224671240468995 L 10.034996150510922 0.6895464293207285 C 10.073096670175717 0.6524498680792108 10.10337945036077 0.608095993593179 10.124056934942596 0.5591036864269853 C 10.144734419524422 0.5101113792607915 10.155386924743652 0.4574733366455659 10.155386924743652 0.40429623286459965 C 10.155386924743652 0.3511191290836334 10.144734419524422 0.29848066923588035 10.124056934942596 0.24948836206968664 C 10.10337945036077 0.2004960549034929 10.073096670175717 0.15614259764998847 10.034996150510922 0.11904603640847079 C 9.956860580013826 0.04272644923411478 9.851969472296238 0 9.742745633049875 0 C 9.633521793803512 -7.771561432180723e-16 9.528631520550961 0.04272644923411478 9.450495950053865 0.11904603640847079 L 9.450495950053865 0.11992139025090541 Z'
                }
                strokeLinejoin={'miter'}
              />
            </Svg>
          </View>
        </View>
        <View style={stylesheet.style_Group_459}>
          <View style={stylesheet.style_Rectangle_69}></View>
          <View
            style={[
              stylesheet.style_minPrice,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_minPrice,
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
              أقل سعر
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Group_460}>
          <View style={stylesheet.style_Rectangle_70}></View>
          <View
            style={[
              stylesheet.style_maxPrice,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_maxPrice,
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
              أعلى سعر
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Rectangle_71}></View>
        <View style={stylesheet.style_Group_479}>
          <View style={stylesheet.style_Group_461}>
            <View style={stylesheet.style_Rectangle_72}></View>
          </View>
          <View style={stylesheet.style_Group_477}>
            <View style={stylesheet.style_Line_1}></View>
            <View style={stylesheet.style_Line_3}></View>
            <View style={stylesheet.style_Line_2}></View>
          </View>
        </View>
        <View style={stylesheet.style_Group_478}>
          <View style={stylesheet.style_Group_461_2}>
            <View style={stylesheet.style_Rectangle_72_2}></View>
          </View>
          <View style={stylesheet.style_Group_477_2}>
            <View style={stylesheet.style_Line_1_2}></View>
            <View style={stylesheet.style_Line_3_2}></View>
            <View style={stylesheet.style_Line_2_2}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const stylesheet = StyleSheet.create({
  style_PriceModel: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: 217,
    borderRadius: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(0,0,0,0)',
    left: 0,
    top: 0
  },
  style_Group_458: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 217,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_68: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 203,
    borderRadius: 8,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 14,
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
  style_Frame_468: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(14, 14, 14, 1)',
    left: 276,
    // right: "auto",
    top: 175,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row'
  },
  style_Clear: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Title: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 170,
    // right: "auto",
    top: 30,
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
  style_Frame_467: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 17,
    // right: "auto",
    top: 176,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(41, 32, 113, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row'
  },
  style_Result: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Polygon_1: {
    position: 'absolute',
    width: 29,
    height: 29,
    borderRadius: 2,
    left: 91,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Frame_469: {
    position: 'absolute',
    width: 152,
    height: 41,
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(14, 14, 14, 1)',
    left: 175,
    // right: "auto",
    top: 68,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_minPriceValue: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 106,
    // right: "auto",
    top: 13,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgb(1,1,1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_ep_arrow_down: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 0,
    overflow: 'hidden',
    left: 14,
    // right: "auto",
    top: 13,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Vector: {
    position: 'absolute',
    color: 'rgba(0, 0, 0, 1)',
    // width: "auto",
    height: 5.348878860473633,
    borderRadius: 0,
    left: 1.9228515625,
    right: 1.9217615127563477,
    transform: [
      { translateX: 0 },
      { translateY: 4.54052734375 },
      { rotate: '0deg' }
    ]
  },
  style_Frame_470: {
    position: 'absolute',
    width: 152,
    height: 41,
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(14, 14, 14, 1)',
    left: 16,
    // right: "auto",
    top: 68,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_maxPriceValue: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 45,
    // right: "auto",
    top: 13,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgb(1,1,1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_ep_arrow_down_2: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 0,
    overflow: 'hidden',
    left: 14,
    // right: "auto",
    top: 13,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Vector_2: {
    position: 'absolute',
    color: 'rgba(0, 0, 0, 1)',
    // width: "auto",
    height: 5.348878860473633,
    borderRadius: 0,
    left: 1.9228515625,
    right: 1.9217615127563477,
    transform: [
      { translateX: 0 },
      { translateY: 4.54052734375 },
      { rotate: '0deg' }
    ]
  },
  style_Group_459: {
    position: 'absolute',
    width: 65,
    height: 22,
    transform: [{ translateX: 248 }, { translateY: 57 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_69: {
    position: 'absolute',
    width: 65,
    height: 22,
    borderRadius: 0,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_minPrice: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 10,
    // right: "auto",
    top: 4,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(131, 131, 131, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Group_460: {
    position: 'absolute',
    width: 65,
    height: 22,
    transform: [{ translateX: 89 }, { translateY: 57 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_70: {
    position: 'absolute',
    width: 65,
    height: 22,
    borderRadius: 0,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_maxPrice: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 9,
    // right: "auto",
    top: 4,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(131, 131, 131, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Rectangle_71: {
    position: 'absolute',
    width: 311,
    height: 4,
    borderRadius: 0,
    opacity: 1,
    left: 16,
    // right: "auto",
    top: 145,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(41, 32, 113, 1)'
  },
  style_Group_479: {
    position: 'absolute',
    width: 22,
    height: 16,
    transform: [{ translateX: 305 }, { translateY: 139 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_461: {
    position: 'absolute',
    width: 22,
    height: 16,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_72: {
    position: 'absolute',
    width: 22,
    height: 16,
    borderRadius: 4,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    shadowColor: 'rgb(41, 32, 113)',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.20000000298023224,
    shadowRadius: 8,
    backgroundColor: 'rgba(41, 32, 113, 1)'
  },
  style_Group_477: {
    position: 'absolute',
    width: 8,
    height: 10,
    transform: [{ translateX: 7 }, { translateY: 3 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Line_1: {
    position: 'absolute',
    width: 10,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '90deg' }]
  },
  style_Line_3: {
    position: 'absolute',
    width: 10,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    left: 4,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '90deg' }]
  },
  style_Line_2: {
    position: 'absolute',
    width: 10,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    left: 8,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '90deg' }]
  },
  style_Group_478: {
    position: 'absolute',
    width: 22,
    height: 16,
    transform: [{ translateX: 17 }, { translateY: 139 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_461_2: {
    position: 'absolute',
    width: 22,
    height: 16,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_72_2: {
    position: 'absolute',
    width: 22,
    height: 16,
    borderRadius: 4,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    shadowColor: 'rgb(41, 32, 113)',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.20000000298023224,
    shadowRadius: 8,
    backgroundColor: 'rgba(41, 32, 113, 1)'
  },
  style_Group_477_2: {
    position: 'absolute',
    width: 8,
    height: 10,
    transform: [{ translateX: 7 }, { translateY: 3 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Line_1_2: {
    position: 'absolute',
    width: 10,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '90deg' }]
  },
  style_Line_3_2: {
    position: 'absolute',
    width: 10,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    left: 4,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '90deg' }]
  },
  style_Line_2_2: {
    position: 'absolute',
    width: 10,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    left: 8,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '90deg' }]
  }
})
