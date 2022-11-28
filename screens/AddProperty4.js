import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { Svg, Path } from 'react-native-svg'

import { useFonts } from '@expo-google-fonts/dev'
import { AntDesign } from '@expo/vector-icons'

export default function AddProperty4({navigation}) {
  let [fontsLoaded] = useFonts({
    'SF Pro Text':
      'https://fontsfree.net//wp-content/fonts/basic/sans-serif/FontsFree-Net-SFProText-Regular.ttf'
  })

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{ height: Dimensions.get('window').height }}
    >
      <View style={stylesheet.style_AddProperty4}>
        <View
          style={[
            stylesheet.style_________________,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style_________________,
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
            اضافة إعلان عقار
          </Text>
          <TouchableOpacity onPress={() => {
        navigation.goBack()
        }}>
        <AntDesign
            style={{
              position: 'absolute',
              right: 20,
              top:-12
            }}
            name="rightcircleo"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        </View>
        <View
          style={[
            stylesheet.style_4_6,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style_4_6,
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
            4/6
          </Text>
        </View>
        <View style={stylesheet.style_Group_468}>
          <TouchableOpacity
          onPress={() => {
          navigation.navigate("AddProperty5")
          }}
          style={stylesheet.style_Rectangle_74}>
          <View
            style={[
              stylesheet.style_______,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_______,
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
              التالي
            </Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={stylesheet.style_Group_506}>
          <TouchableOpacity
          onPress={() => {
          navigation.goBack()
          }}
          style={stylesheet.style_Rectangle_74_2}>
          <View
            style={[
              stylesheet.style________2,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style________2,
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
              السابق
            </Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={stylesheet.style_Rectangle_82}>
        <View style={stylesheet.style_Rectangle_83}></View>
        <View style={stylesheet.style_Rectangle_84}></View>
        <View style={stylesheet.style_Rectangle_85}></View>
        <View style={stylesheet.style_Rectangle_86}></View>
        <View style={stylesheet.style_Rectangle_87}></View>
        <View style={stylesheet.style_Rectangle_88}></View>
        </View>

        <View style={stylesheet.style_Group_510}>
          <View
            style={[
              stylesheet.style___________________________,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________________________,
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
              يجب التقاط الصور بشكل أفقي
            </Text>
          </View>
          <View
            style={[
              stylesheet.style______________________________20________,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style______________________________20________,
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
              حجم الصورة الواحدة لا يتجاوز 20 ميجا بت
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_____________________5____,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_____________________5____,
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
              عدد الصور لا يتجاوز 5 صور
            </Text>
          </View>
        </View>
        <TouchableOpacity style={stylesheet.style_Rectangle_89}>
        <View style={stylesheet.style_Group_521}>
          <View
            style={[
              stylesheet.style_________,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_________,
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
              اضف صورة
            </Text>
          </View>
          <View style={stylesheet.style_bx_image_alt}>
            <Svg
              style={stylesheet.style_Vector_3}
              fill={'rgba(200, 200, 200, 1)'}
            >
              <Path
                fillRule={'nonzero'}
                d={
                  'M 21.333333333333332 0 L 2.6666666666666665 0 C 1.1959999402364094 0 0 1.1959999402364094 0 2.6666666666666665 L 0 21.333333333333332 C 0 22.804000059763588 1.1959999402364094 24 2.6666666666666665 24 L 21.333333333333332 24 C 22.804000059763588 24 24 22.804000059763588 24 21.333333333333332 L 24 2.6666666666666665 C 24 1.1959999402364094 22.804000059763588 0 21.333333333333332 0 Z M 2.6666666666666665 21.333333333333332 L 2.6666666666666665 2.6666666666666665 L 21.333333333333332 2.6666666666666665 L 21.336001078287758 21.333333333333332 L 2.6666666666666665 21.333333333333332 Z'
                }
                strokeLinejoin={'miter'}
              />
            </Svg>
            <Svg
              style={stylesheet.style_Vector_4}
              fill={'rgba(200, 200, 200, 1)'}
            >
              <Path
                fillRule={'nonzero'}
                d={
                  'M 5.333333333333333 5.3333331516810825 L 4 3.999999863760812 L 0 9.333333015441895 L 16 9.333333015441895 L 9.333333333333332 0 L 5.333333333333333 5.3333331516810825 Z'
                }
                strokeLinejoin={'miter'}
              />
            </Svg>
          </View>
        </View>
        </TouchableOpacity>

        <View style={stylesheet.style_Group_511}>
          <View
            style={[
              stylesheet.style_________________________,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_________________________,
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
              رابط الفيديو ( اختياري )
            </Text>
          </View>
          <View style={stylesheet.style_Frame_459}>
            <View
              style={[
                stylesheet.style_______http___youtube_be_dkdsds,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <TextInput
              placeholder='مثال: http://youtube.be/dkdsds'
                style={[
                  stylesheet.style_______http___youtube_be_dkdsds,
                  {
                    position: 'relative',
                    // flexGrow: 1,
                    left: 0,
                    top: 0,
                    // height: "auto",
                    transform: [{ translateX: 0 }, { translateY: 0 }]
                  }
                ]}
              />
            </View>
          </View>
        </View>
        <View
          style={[
            stylesheet.style_0_5,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style_0_5,
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
            0/5
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
const Component_style_system___light___status_bar___default = ({
  variant1_left,
  variant1_right,
  variant1_top,
  variant1_bottom,
  variant1_transform,
  variant1_text1
}) => {
  return (
    <View
      style={[
        component_style_system___light___status_bar___default_stylesheet.style_system___light___status_bar___default,
        {
          left: variant1_left,
          // right: variant1_right,
          top: variant1_top,
          // bottom: variant1_bottom,
          transform: variant1_transform
        }
      ]}
    >
      <View
        style={[
          component_style_system___light___status_bar___default_stylesheet.style_Time,
          { display: 'flex', flexDirection: 'row', alignItems: 'center' }
        ]}
      >
        <Text
          style={[
            component_style_system___light___status_bar___default_stylesheet.style_Time,
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
          {variant1_text1}
        </Text>
      </View>
      <View
        style={
          component_style_system___light___status_bar___default_stylesheet.style_Battery
        }
      >
        <View
          style={
            component_style_system___light___status_bar___default_stylesheet.style_Border
          }
        ></View>
        <Svg
          style={
            component_style_system___light___status_bar___default_stylesheet.style_Cap
          }
          fill={'rgba(0, 0, 0, 1)'}
        >
          <Path
            fillRule={'nonzero'}
            d={
              'M 0 0 L 0 4 C 0.8047311305999756 3.6612234711647034 1.328037977218628 2.8731333017349243 1.328037977218628 2 C 1.328037977218628 1.1268666982650757 0.8047311305999756 0.33877652883529663 0 0 Z'
            }
            strokeLinejoin={'miter'}
          />
        </Svg>
        <View
          style={
            component_style_system___light___status_bar___default_stylesheet.style_Capacity
          }
        ></View>
      </View>
      <View
        style={
          component_style_system___light___status_bar___default_stylesheet.style_Wifi
        }
      ></View>
      <View
        style={
          component_style_system___light___status_bar___default_stylesheet.style_Cellular_Connection
        }
      ></View>
    </View>
  )
}

const stylesheet = StyleSheet.create({
  style_AddProperty4: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: 812,
    borderRadius: 0,
    overflow: 'hidden',
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    left: 0,
    top: 0
  },
  style_________________: {
    position: 'absolute',
    width: "100%",
    // height: "auto",
    // left: 126,
    // right: "auto",
    top: 56,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 18,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_4_6: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 16,
    // right: "auto",
    top: 58,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 16,
    color: 'rgb(1,1,1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Group_468: {
    position: 'absolute',
    width: 228.6666717529297,
    height: 48,
    transform: [{ translateX: 16 }, { translateY: 716 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74: {
    position: 'absolute',
    width: 228.6666717529297,
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
  style_______: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 97,
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
  style_Group_506: {
    position: 'absolute',
    width: 102.33000183105469,
    height: 48,
    top:716,
    right:20,
    // transform: [{ translateX: 257 }, { translateY: 716 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74_2: {
    position: 'absolute',
    width: 102.33000183105469,
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
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style________2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 28,
    // right: "auto",
    top: 14,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 16,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Rectangle_82: {
    position: 'absolute',
    width: '100%',
    height: 9,
    borderRadius: 0,
    // opacity: 0.15000000596046448,
    // left: 0,
    // right: "auto",
    top: 90,
    flexDirection:"row",
    justifyContent:"space-around",
    // bottom: "auto",
    // transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(200, 200, 200, 0.15000000596046448)'
  },
  style_Rectangle_83: {
    // position: 'absolute',
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    left: 0,
    // right: "auto",
    // top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(29, 161, 242, 1)'
  },
  style_Rectangle_84: {
    // position: 'absolute',
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    // left: 63,
    // right: "auto",
    // top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(29, 161, 242, 1)'
  },
  style_Rectangle_85: {
    // position: 'absolute',
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    // left: 126,
    // right: "auto",
    // top: 90,
    // bottom: "auto",
    // transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(29, 161, 242, 1)'
  },
  style_Rectangle_86: {
    // position: 'absolute',
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    // left: 190,
    // right: "auto",
    // top: 90,
    // bottom: "auto",
    // transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(29, 161, 242, 1)'
  },
  style_Rectangle_87: {
    // position: 'absolute',
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 0.20000000298023224,
    // left: 253,
    // right: "auto",
    // top: 90,
    // bottom: "auto",
    // transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(29, 161, 242, 1)'
  },
  style_Rectangle_88: {
    // position: 'absolute',
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 0.20000000298023224,
    // left: 316,
    // right: "auto",
    // top: 90,
    // bottom: "auto",
    // transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(29, 161, 242, 1)'
  },
  style_Back2_1: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 0,
    overflow: 'hidden',
    left: 359,
    // right: "auto",
    top: 79,
    // bottom: "auto",
    transform: [
      { translateX: -24 },
      { translateY: -1.4695762231022014e-15 },
      { rotate: '-7.0167096047110005e-15deg' }
    ],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group: {
    position: 'absolute',
    width: 24,
    height: 24,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '7.0167096047110005e-15deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_2: {
    position: 'absolute',
    width: 24,
    height: 24,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '7.0167096047110005e-15deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_3: {
    position: 'absolute',
    width: 24,
    height: 24,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '7.0167096047110005e-15deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_4: {
    position: 'absolute',
    width: 24,
    height: 24,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '7.0167096047110005e-15deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 24,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '-7.0167096047110005e-15deg' }
    ]
  },
  style_Vector_2: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 13.057499885559082,
    borderRadius: 0,
    left: -7.49951171875,
    right: 24.223901748657227,
    transform: [
      { translateX: 0 },
      { translateY: -5.4749755859375 },
      { rotate: '-7.0167096047110005e-15deg' }
    ]
  },
  style_Group_510: {
    position: 'absolute',
    width: 239,
    height: 75,
    top:123,
    right:10,
    // transform: [{ translateX: 120 }, { translateY: 123 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style___________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    right: 12,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style______________________________20________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 29,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_____________________5____: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 79,
    // right: "auto",
    top: 58,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Rectangle_89: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 108.66666412353516,
    borderRadius: 8,
    opacity: 1,
    borderWidth: 1,
    borderColor: 'rgba(29, 161, 242, 1)',
    left: 10,
    // right: 0,
    // right: "auto",
    top: 222,
    alignItems:"center",
    justifyContent:"center",
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_Group_521: {
    // position: 'absolute',
    width: 65,
    height: 54,
    // transform: [{ translateX: 160 }, { translateY: 249 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 40,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(29, 161, 242, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_bx_image_alt: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 0,
    overflow: 'hidden',
    left: 11,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Vector_3: {
    position: 'absolute',
    color: 'rgba(200, 200, 200, 1)',
    // width: "auto",
    height: 24,
    borderRadius: 0,
    left: 4,
    right: 4,
    transform: [{ translateX: 0 }, { translateY: 4 }, { rotate: '0deg' }]
  },
  style_Vector_4: {
    position: 'absolute',
    color: 'rgba(200, 200, 200, 1)',
    // width: "auto",
    height: 9.333333015441895,
    borderRadius: 0,
    left: 8,
    right: 8,
    transform: [
      { translateX: 0 },
      { translateY: 13.3333740234375 },
      { rotate: '0deg' }
    ]
  },
  style_Group_511: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 65,
    transform: [{ translateX: 16 }, { translateY: 375 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    right: 10,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Frame_459: {
    position: 'absolute',
    width: Dimensions.get("window").width - 30,
    height: 38,
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    // left: 0,
    right: 10,
    top: 27,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_______http___youtube_be_dkdsds: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    right: 10,
    // right: "auto",
    top: 12,
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
  style_0_5: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 16,
    // right: "auto",
    top: 337,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgb(1,1,1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  }
})
const component_style_system___light___status_bar___default_stylesheet =
  StyleSheet.create({
    style_system___light___status_bar___default: {
      position: 'absolute',
      width: '100%',
      height: 44,
      borderRadius: 0,
      backgroundColor: 'rgba(0,0,0,0)'
    },
    style_Time: {
      position: 'absolute',
      width: 54,
      // height: "auto",
      left: 21,
      // right: "auto",
      top: '50%',
      transform: [{ translateX: 0 }, { translateY: -8 }, { rotate: '0deg' }],
      fontFamily: 'SF Pro Text',
      // fontWeight: 600,
      textDecorationLine: 'none',
      fontSize: 15,
      color: 'rgba(0, 0, 0, 1)',
      textAlign: 'center',
      textAlignVertical: 'top',
      letterSpacing: -0.30000001192092896
    },
    style_Battery: {
      position: 'absolute',
      width: 24.32803726196289,
      height: 11.333333015441895,
      transform: [
        { translateX: 336.33331298828125 },
        { translateY: 17.333343505859375 },
        { rotate: '0deg' }
      ],
      overflow: 'hidden',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    style_Border: {
      position: 'absolute',
      width: 22,
      height: 11.333333015441895,
      borderRadius: 2.6666667461395264,
      opacity: 0.3499999940395355,
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 1)',
      left: 'auto',
      right: 2.3280372619628906,
      top: '50%',
      transform: [
        { translateX: 0 },
        { translateY: -5.666666507720947 },
        { rotate: '0deg' }
      ],
      backgroundColor: 'rgba(0,0,0,0)'
    },
    style_Cap: {
      position: 'absolute',
      color: 'rgba(0, 0, 0, 1)',
      width: 1.328037977218628,
      height: 4,
      borderRadius: 0,
      left: 'auto',
      right: -7.152557373046875e-7,
      top: '50%',
      transform: [
        { translateX: 0 },
        { translateY: -2.000000476837158 },
        { rotate: '0deg' }
      ]
    },
    style_Capacity: {
      position: 'absolute',
      width: 18,
      height: 7.333333492279053,
      borderRadius: 1.3333333730697632,
      opacity: 1,
      left: 'auto',
      right: 4.328037261962891,
      top: '50%',
      transform: [
        { translateX: 0 },
        { translateY: -3.6666665077209473 },
        { rotate: '0deg' }
      ],
      backgroundColor: 'rgba(0, 0, 0, 1)'
    },
    style_Wifi: {
      position: 'absolute',
      width: 15.33329963684082,
      height: 11,
      borderRadius: 0,
      transform: [
        { translateX: 316 },
        { translateY: 17.3306884765625 },
        { rotate: '0deg' }
      ]
    },
    style_Cellular_Connection: {
      position: 'absolute',
      width: 17,
      height: 10.666666984558105,
      borderRadius: 0,
      transform: [
        { translateX: 294 },
        { translateY: 17.666656494140625 },
        { rotate: '0deg' }
      ]
    }
  })
