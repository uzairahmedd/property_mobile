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

export default function OTPScreen() {
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{ height: Dimensions.get('window').height }}
    >
      <View style={stylesheet.style_OTPScreen}>
        <View
          style={[
            stylesheet.style_title,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style_title,
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
            تفعيل الحساب
          </Text>
        </View>
        <View
          style={[
            stylesheet.style__,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
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
            -
          </Text>
        </View>
        <View
          style={[
            stylesheet.style___2,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style___2,
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
            -
          </Text>
        </View>
        <View
          style={[
            stylesheet.style___3,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style___3,
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
            -
          </Text>
        </View>
        <View
          style={[
            stylesheet.style___4,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style___4,
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
            -
          </Text>
        </View>
        <View
          style={[
            stylesheet.style______________________________________,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style______________________________________,
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
            لقد تم ارسال كود التفعيل للرقم المدخل
          </Text>
        </View>
        <View
          style={[
            stylesheet.style___________________________________,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style___________________________________,
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
            لم يصلك كود التفعيل؟ أرسل مرة أخرى
          </Text>
        </View>
        <View
          style={[
            stylesheet.style_______________________________________,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style_______________________________________,
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
            أوافق عند التقديم على الشروط و الأحكام
          </Text>
        </View>
        <View style={stylesheet.style_Group_468}>
          <View style={stylesheet.style_Rectangle_74}></View>
          <View
            style={[
              stylesheet.style______,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style______,
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
              تفعيل
            </Text>
          </View>
        </View>

        <View style={stylesheet.style_Group_501}>
          <View
            style={[
              stylesheet.style__996_5412136161,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style__996_5412136161,
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
              +996 5412136161
            </Text>
          </View>
          <View style={stylesheet.style_carbon_edit}>
            <Svg style={stylesheet.style_Vector} fill={'rgba(41, 32, 113, 1)'}>
              <Path
                fillRule={'nonzero'}
                d={
                  'M 0 13.5 L 15.75 13.5 L 15.75 14.625 L 0 14.625 L 0 13.5 Z M 13.162499785423279 3.9375 C 13.612499792128801 3.4874999932944775 13.612499792128801 2.812499899417162 13.162499785423279 2.3624998927116394 L 11.137499570846558 0.3375000134110451 C 10.687499564141035 -0.11249999329447746 10.012500006705523 -0.11249999329447746 9.5625 0.3375000134110451 L 1.125 8.775000214576721 L 1.125 12.375 L 4.724999785423279 12.375 L 13.162499785423279 3.9375 Z M 10.349999785423279 1.125 L 12.375 3.1499999463558197 L 10.6875 4.837500214576721 L 8.662499785423279 2.8125 L 10.349999785423279 1.125 Z M 2.25 11.25 L 2.25 9.224999785423279 L 7.875 3.599999785423279 L 9.900000214576721 5.625 L 4.275000214576721 11.25 L 2.25 11.25 Z'
                }
                strokeLinejoin={'miter'}
              />
            </Svg>
          </View>
        </View>
        <View style={stylesheet.style_Line_12}></View>
        <View style={stylesheet.style_Line_13}></View>
        <View style={stylesheet.style_Line_14}></View>
        <View style={stylesheet.style_Line_15}></View>
        <View style={stylesheet.style_Back2_1}>
          <View style={stylesheet.style_Group}>
            <View style={stylesheet.style_Group_2}>
              <View style={stylesheet.style_Group_3}>
                <View style={stylesheet.style_Group_4}>
                  <Svg
                    style={stylesheet.style_Vector_2}
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
                    style={stylesheet.style_Vector_3}
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
  style_OTPScreen: {
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
  style_title: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 131,
    // right: "auto",
    top: 98,
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
  style__: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 67,
    // right: "auto",
    top: 261,
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
  style___2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 145,
    // right: "auto",
    top: 261,
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
  style___3: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 223,
    // right: "auto",
    top: 261,
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
  style___4: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 301,
    // right: "auto",
    top: 261,
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
  style______________________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 81,
    // right: "auto",
    top: 144,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style___________________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 82,
    // right: "auto",
    top: 395,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'undefined',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgb(1,1,1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_______________________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 138,
    // right: "auto",
    top: 550,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    fontSize: 14,
    color: 'rgb(1,1,1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Group_468: {
    position: 'absolute',
    width: 343,
    height: 48,
    transform: [{ translateX: 16 }, { translateY: 482 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74: {
    position: 'absolute',
    width: 343,
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
  style______: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 150,
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
  style_Group_501: {
    position: 'absolute',
    width: 115,
    height: 18,
    transform: [{ translateX: 141 }, { translateY: 173 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style__996_5412136161: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 1,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_carbon_edit: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 0,
    overflow: 'hidden',
    left: 97,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Vector: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 14.625,
    borderRadius: 0,
    left: 1.125,
    right: 1.125,
    transform: [{ translateX: 0 }, { translateY: 1.125 }, { rotate: '0deg' }]
  },
  style_Line_12: {
    position: 'absolute',
    width: 62,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 39,
    // right: "auto",
    top: 298,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Line_13: {
    position: 'absolute',
    width: 62,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 117,
    // right: "auto",
    top: 298,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Line_14: {
    position: 'absolute',
    width: 62,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 195,
    // right: "auto",
    top: 298,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Line_15: {
    position: 'absolute',
    width: 62,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 273,
    // right: "auto",
    top: 298,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Back2_1: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 0,
    overflow: 'hidden',
    left: 359,
    // right: "auto",
    top: 91,
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
  style_Vector_2: {
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
  style_Vector_3: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 13.057499885559082,
    borderRadius: 0,
    left: -7.49951171875,
    right: 24.223901748657227,
    transform: [
      { translateX: 0 },
      { translateY: -5.47509765625 },
      { rotate: '-7.0167096047110005e-15deg' }
    ]
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
