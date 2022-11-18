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

export default function AddProperty5() {
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
      <View style={stylesheet.style_AddProperty5}>
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
        </View>
        <View
          style={[
            stylesheet.style_5_6,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style_5_6,
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
            5/6
          </Text>
        </View>
        <View style={stylesheet.style_Group_468}>
          <View style={stylesheet.style_Rectangle_74}></View>
          <View
            style={[
              stylesheet.style_______________________,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_______________________,
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
              الإنهاء و توثيق العقار
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Group_506}>
          <View style={stylesheet.style_Rectangle_74_2}></View>
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
              السابق
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Rectangle_82}></View>
        <View style={stylesheet.style_Rectangle_83}></View>
        <View style={stylesheet.style_Rectangle_84}></View>
        <View style={stylesheet.style_Rectangle_85}></View>
        <View style={stylesheet.style_Rectangle_86}></View>
        <View style={stylesheet.style_Rectangle_87}></View>
        <View style={stylesheet.style_Rectangle_88}></View>
        <View style={stylesheet.style_Back2_1}>
          <View style={stylesheet.style_Group}>
            <View style={stylesheet.style_Group_2}>
              <View style={stylesheet.style_Group_3}>
                <View style={stylesheet.style_Group_4}>
                  <Svg
                    style={stylesheet.style_Vector}
                    fill={'rgba(41, 32, 113, 1)'}
                  >
                    <Path
                      fillRule={'nonzero'}
                      d={
                        'M 12 0 C 5.372578382492065 0 0 5.372578382492065 0 12 C 0 18.627421617507935 5.372578382492065 24 12 24 C 18.627421617507935 24 24 18.627421617507935 24 12 C 24 5.372578382492065 18.627421617507935 0 12 0 Z M 12 22.5 C 6.201000094413757 22.5 1.5 17.798999905586243 1.5 12 C 1.5 6.201000094413757 6.201000094413757 1.5 12 1.5 C 17.798999905586243 1.5 22.5 6.201000094413757 22.5 12 C 22.5 17.798999905586243 17.798999905586243 22.5 12 22.5 Z'
                      }
                      strokeLinejoin={'miter'}
                    />
                  </Svg>
                  <Svg
                    style={stylesheet.style_Vector_2}
                    fill={'rgba(41, 32, 113, 1)'}
                  >
                    <Path
                      fillRule={'nonzero'}
                      d={
                        'M 6.218110084533691 0 L 0.2181093692779541 6 C -0.07270313054323196 6.292546883225441 -0.07270313054323196 6.764952287077904 0.2181093692779541 7.057499170303345 L 6.218110084533691 13.057499885559082 L 7.275609970092773 11.99250054359436 L 1.8081092834472656 6.5249998569488525 L 7.275609970092773 1.057499885559082 L 6.218110084533691 0 Z'
                      }
                      strokeLinejoin={'miter'}
                    />
                  </Svg>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            stylesheet.style____________________,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style____________________,
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
            تحديد مميزات العقار
          </Text>
        </View>
        <View
          style={[
            stylesheet.style__________________________,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style__________________________,
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
            يمكنك اختيار أكثر من ميزة
          </Text>
        </View>
        <View style={stylesheet.style_Frame_460}>
          <View
            style={[
              stylesheet.style__________,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style__________,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_463}>
          <View
            style={[
              stylesheet.style___________2,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________2,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_466}>
          <View
            style={[
              stylesheet.style___________3,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________3,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_469}>
          <View
            style={[
              stylesheet.style___________4,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________4,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_472}>
          <View
            style={[
              stylesheet.style___________5,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________5,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_475}>
          <View
            style={[
              stylesheet.style___________6,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________6,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_461}>
          <View
            style={[
              stylesheet.style___________7,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________7,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_464}>
          <View
            style={[
              stylesheet.style___________8,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________8,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_467}>
          <View
            style={[
              stylesheet.style___________9,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________9,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_470}>
          <View
            style={[
              stylesheet.style___________10,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________10,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_473}>
          <View
            style={[
              stylesheet.style___________11,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________11,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_476}>
          <View
            style={[
              stylesheet.style___________12,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________12,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_462}>
          <View
            style={[
              stylesheet.style___________13,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________13,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_465}>
          <View
            style={[
              stylesheet.style___________14,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________14,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_468}>
          <View
            style={[
              stylesheet.style___________15,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________15,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_471}>
          <View
            style={[
              stylesheet.style___________16,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________16,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_474}>
          <View
            style={[
              stylesheet.style___________17,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________17,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_477}>
          <View
            style={[
              stylesheet.style___________18,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________18,
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
              غرف ملابس
            </Text>
          </View>
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
  style_AddProperty5: {
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
    // width: "auto",
    // height: "auto",
    left: 126,
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
  style_5_6: {
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
  style_______________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 46,
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
    transform: [{ translateX: 257 }, { translateY: 716 }, { rotate: '0deg' }],
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
  style_______: {
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
    opacity: 0.15000000596046448,
    left: 0,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(200, 200, 200, 0.15000000596046448)'
  },
  style_Rectangle_83: {
    position: 'absolute',
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(207, 87, 187, 1)'
  },
  style_Rectangle_84: {
    position: 'absolute',
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    left: 63,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(207, 87, 187, 1)'
  },
  style_Rectangle_85: {
    position: 'absolute',
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    left: 126,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(207, 87, 187, 1)'
  },
  style_Rectangle_86: {
    position: 'absolute',
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    left: 190,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(207, 87, 187, 1)'
  },
  style_Rectangle_87: {
    position: 'absolute',
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    left: 253,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(207, 87, 187, 1)'
  },
  style_Rectangle_88: {
    position: 'absolute',
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 0.20000000298023224,
    left: 316,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(207, 87, 187, 1)'
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
  style____________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 249,
    // right: "auto",
    top: 123,
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
  style__________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 243,
    // right: "auto",
    top: 147,
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
  style_Frame_460: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 266,
    // right: "auto",
    top: 180,
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
  style__________: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_463: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 266,
    // right: "auto",
    top: 233,
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
  style___________2: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_466: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 266,
    // right: "auto",
    top: 286,
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
  style___________3: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_469: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 266,
    // right: "auto",
    top: 339,
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
  style___________4: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_472: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 266,
    // right: "auto",
    top: 392,
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
  style___________5: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_475: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 266,
    // right: "auto",
    top: 445,
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
  style___________6: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_461: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 151,
    // right: "auto",
    top: 180,
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
  style___________7: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_464: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 151,
    // right: "auto",
    top: 233,
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
  style___________8: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_467: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 151,
    // right: "auto",
    top: 286,
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
  style___________9: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_470: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 151,
    // right: "auto",
    top: 339,
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
  style___________10: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_473: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 151,
    // right: "auto",
    top: 392,
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
  style___________11: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_476: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 151,
    // right: "auto",
    top: 445,
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
  style___________12: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_462: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 36,
    // right: "auto",
    top: 180,
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
  style___________13: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_465: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 36,
    // right: "auto",
    top: 233,
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
  style___________14: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_468: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 36,
    // right: "auto",
    top: 286,
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
  style___________15: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_471: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 36,
    // right: "auto",
    top: 339,
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
  style___________16: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_474: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 36,
    // right: "auto",
    top: 392,
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
  style___________17: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_477: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 36,
    // right: "auto",
    top: 445,
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
  style___________18: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
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
