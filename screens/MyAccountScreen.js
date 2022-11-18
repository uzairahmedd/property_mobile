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

export default function MyAccountScreen() {
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
      <View style={stylesheet.style_MyAccountScreen}>
        <View
          style={[
            stylesheet.style______________,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style______________,
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
            إعدادت الحساب
          </Text>
        </View>
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
            الرجوع
          </Text>
        </View>
        <View
          style={[
            stylesheet.style____,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style____,
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
            حفظ
          </Text>
        </View>
        <View style={stylesheet.style_Group_465}>
          <View
            style={[
              stylesheet.style___________,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style___________,
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
              الإسم كامل
            </Text>
          </View>
          <View style={stylesheet.style_Group_464}>
            <View style={stylesheet.style_Rectangle_74}></View>
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
                خالد بن عبدالله بن عبدالعزيز ال عثمان
              </Text>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_466}>
          <View
            style={[
              stylesheet.style____________________________,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style____________________________,
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
              البريد الإلكتروني (اختياري)
            </Text>
          </View>
          <View style={stylesheet.style_Group_464_2}>
            <View style={stylesheet.style_Rectangle_74_2}></View>
            <View
              style={[
                stylesheet.style__________________,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style__________________,
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
                البريد الإلكتروني
              </Text>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_467}>
          <View
            style={[
              stylesheet.style____________2,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style____________2,
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
          <View style={stylesheet.style_Group_464_3}>
            <View style={stylesheet.style_Rectangle_74_3}></View>
            <View
              style={[
                stylesheet.style__966_5664616316,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style__966_5664616316,
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
                +966 5664616316
              </Text>
            </View>
            <View style={stylesheet.style_Frame_467}>
              <View
                style={[
                  stylesheet.style_____,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_____,
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
                  موثق
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_512}>
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
              العنوان ( اختياري )
            </Text>
          </View>
          <View style={stylesheet.style_Frame_459}>
            <View style={stylesheet.style_Location_1}>
              <View style={stylesheet.style_Group}>
                <View style={stylesheet.style_Group_2}>
                  <View style={stylesheet.style_Group_3}>
                    <View style={stylesheet.style_Group_4}>
                      <Svg
                        style={stylesheet.style_Vector}
                        fill={'rgba(29, 161, 242, 1)'}
                      >
                        <Path
                          fillRule={'nonzero'}
                          d={
                            'M 6.649283409118652 0 C 2.982790468625246 0 0 3.148500787516971 0 7.018687457346803 C 0 8.292785648664728 0.5413298627013134 9.663081204147167 0.5640156525031778 9.720882159924344 C 0.738852691518882 10.158930825725285 1.0838330433098136 10.839330325995387 1.332594460908641 11.23815692762528 L 5.89165612736906 18.529747965556982 C 6.078227196396536 18.828661468996636 6.354368130037706 19 6.649283409118652 19 C 6.944198688199599 19 7.220339621840768 18.828661247519143 7.406910690868244 18.53016060273211 L 11.966363276790348 11.23815692762528 C 12.215515846985083 10.839330325995387 12.560104486657977 10.158930825725285 12.734941525673682 9.720882159924344 C 12.757627315475546 9.663494068951938 13.298566818237305 8.293198482708737 13.298566818237305 7.018687457346803 C 13.298566818237301 3.148500787516971 10.315776349612058 0 6.649283409118652 0 Z M 12.013689896657525 9.400499317507396 C 11.857627307991997 9.793132940913557 11.53650587740274 10.426053573089375 11.3131681895533 10.7835937680679 L 6.753716349660702 18.075596655699204 C 6.6637554548465685 18.21968618341345 6.635202282852421 18.21968618341345 6.545241388038288 18.075596655699204 L 1.9857888021161831 10.7835937680679 C 1.762451114266743 10.426053573089375 1.4413296836774854 9.79272030373843 1.2852670950119585 9.400086680332269 C 1.2786178112414817 9.383159257173457 0.7822686363669002 8.12185995170537 0.7822686363669002 7.018687457346803 C 0.7822686363669002 3.6038896151623687 3.414211499232753 0.8257279361584474 6.649283409118652 0.8257279361584474 C 9.884355319004552 0.8257279361584474 12.516297435840897 3.6038896151623687 12.516297435840897 7.018687457346803 C 12.516297435840897 8.123511484750289 12.01877464289882 9.388113398741867 12.013689896657525 9.400499317507396 Z'
                          }
                          strokeLinejoin={'miter'}
                        />
                      </Svg>
                      <Svg
                        style={stylesheet.style_Vector_2}
                        fill={'rgba(29, 161, 242, 1)'}
                      >
                        <Path
                          fillRule={'nonzero'}
                          d={
                            'M 3.520208731779388 0 C 1.579009253481592 0 0 1.6671443604247997 0 3.715775334487944 C 0 5.764406308551088 1.579009253481592 7.431551456451416 3.520208731779388 7.431551456451416 C 5.461408210077184 7.431551456451416 7.040416717529297 5.764406308551088 7.040416717529297 3.715775334487944 C 7.040416717529294 1.6671443604247997 5.461408210077184 0 3.520208731779388 0 Z M 3.520208731779388 6.605823123107939 C 2.0108214671355937 6.605823123107939 0.7822686070620862 5.309430214615816 0.7822686070620862 3.715775334487944 C 0.7822686070620862 2.122120454360072 2.0108214671355937 0.8257279396057129 3.520208731779388 0.8257279396057129 C 5.029595996423183 0.8257279396057129 6.25814885649669 2.122120454360072 6.25814885649669 3.715775334487944 C 6.25814885649669 5.309430214615816 5.029595996423183 6.605823123107939 3.520208731779388 6.605823123107939 Z'
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
                stylesheet.style___________________________________________1051_________5__,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style___________________________________________1051_________5__,
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
                مثال: ( الرياض, شارع الملك فهد, بناية رقم 1051, الطابق 5 )
              </Text>
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
  style_MyAccountScreen: {
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
  style______________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 129,
    // right: "auto",
    top: 57,
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
  style_______: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 323,
    // right: "auto",
    top: 59,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style____: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 16,
    // right: "auto",
    top: 59,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(29, 161, 242, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Group_465: {
    position: 'absolute',
    width: 343,
    height: 73,
    transform: [{ translateX: 16 }, { translateY: 115 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style___________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 278,
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
  style_Group_464: {
    position: 'absolute',
    width: 343,
    height: 48,
    transform: [{ translateX: 0 }, { translateY: 25 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74: {
    position: 'absolute',
    width: 343,
    height: 48,
    borderRadius: 8,
    opacity: 1,
    borderWidth: 1,
    borderColor: 'rgba(200, 200, 200, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style______________________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 112,
    // right: "auto",
    top: 16,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: 0
  },
  style_Group_466: {
    position: 'absolute',
    width: 343,
    height: 73,
    transform: [{ translateX: 16 }, { translateY: 212 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style____________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 209,
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
  style_Group_464_2: {
    position: 'absolute',
    width: 343,
    height: 48,
    transform: [{ translateX: 0 }, { translateY: 25 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74_2: {
    position: 'absolute',
    width: 343,
    height: 48,
    borderRadius: 8,
    opacity: 1,
    borderWidth: 1,
    borderColor: 'rgba(200, 200, 200, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style__________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 241,
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
  style_Group_467: {
    position: 'absolute',
    width: 343,
    height: 73,
    transform: [{ translateX: 16 }, { translateY: 309 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style____________2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 284,
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
  style_Group_464_3: {
    position: 'absolute',
    width: 343,
    height: 48,
    transform: [{ translateX: 0 }, { translateY: 25 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74_3: {
    position: 'absolute',
    width: 343,
    height: 48,
    borderRadius: 8,
    opacity: 1,
    borderWidth: 1,
    borderColor: 'rgba(200, 200, 200, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style__966_5664616316: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 227,
    // right: "auto",
    top: 16,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: 0
  },
  style_Frame_467: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 16,
    // right: "auto",
    top: 9,
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
  style_____: {
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
  style_Group_512: {
    position: 'absolute',
    width: 343,
    height: 65,
    transform: [{ translateX: 16 }, { translateY: 406 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style____________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 245,
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
    width: 343,
    height: 38,
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 0,
    // right: "auto",
    top: 27,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_Location_1: {
    position: 'absolute',
    width: 18,
    height: 19,
    borderRadius: 0,
    overflow: 'hidden',
    left: 10,
    // right: "auto",
    top: 9,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group: {
    position: 'absolute',
    width: 13.298566818237305,
    height: 19,
    transform: [
      { translateX: 2.350830078125 },
      { translateY: 0 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_2: {
    position: 'absolute',
    width: 13.298566818237305,
    height: 19,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_3: {
    position: 'absolute',
    width: 13.298566818237305,
    height: 19,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_4: {
    position: 'absolute',
    width: 13.298566818237305,
    height: 19,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector: {
    position: 'absolute',
    color: 'rgba(29, 161, 242, 1)',
    // width: "auto",
    height: 19,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Vector_2: {
    position: 'absolute',
    color: 'rgba(29, 161, 242, 1)',
    // width: "auto",
    height: 7.431551456451416,
    borderRadius: 0,
    left: 3.129150390625,
    right: 3.128999710083008,
    transform: [
      { translateX: 0 },
      { translateY: 3.30322265625 },
      { rotate: '0deg' }
    ]
  },
  style___________________________________________1051_________5__: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 61,
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
