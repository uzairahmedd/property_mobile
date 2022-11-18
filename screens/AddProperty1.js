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

export default function AddProperty1() {
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
      <View style={stylesheet.style_AddProperty1}>
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
            stylesheet.style_1_6,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style_1_6,
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
            1/6
          </Text>
        </View>
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
            وصف العقار
          </Text>
        </View>
        <View
          style={[
            stylesheet.style__________________________________________________,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style__________________________________________________,
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
            وصف العقار ( مثال: شقة سكنية هادئة في مكان مميز )
          </Text>
        </View>
        <View style={stylesheet.style_Group_468}>
          <View style={stylesheet.style_Rectangle_74}></View>
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
        </View>
        <View style={stylesheet.style_Group_503}>
          <View style={stylesheet.style_Frame_459}>
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
                ايجار
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_460}>
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
                بيع
              </Text>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Frame_459_2}>
          <View
            style={[
              stylesheet.style_0_80,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_0_80,
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
              0/80
            </Text>
          </View>
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
              ادخل هنا..
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
        <View style={stylesheet.style_Group_511}>
          <View
            style={[
              stylesheet.style_____________,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_____________,
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
              مساحة العقار
            </Text>
          </View>
          <View style={stylesheet.style_Frame_459_3}>
            <View
              style={[
                stylesheet.style__2,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style__2,
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
                م2
              </Text>
            </View>
            <View
              style={[
                stylesheet.style______________________,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style______________________,
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
                المساحة بالمتر المربع
              </Text>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_512}>
          <View
            style={[
              stylesheet.style______________2,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style______________2,
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
              عنوان العقار
            </Text>
          </View>
          <View style={stylesheet.style_Frame_459_4}>
            <View style={stylesheet.style_Location_1}>
              <View style={stylesheet.style_Group_5}>
                <View style={stylesheet.style_Group_6}>
                  <View style={stylesheet.style_Group_7}>
                    <View style={stylesheet.style_Group_8}>
                      <Svg
                        style={stylesheet.style_Vector_3}
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
                        style={stylesheet.style_Vector_4}
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
                stylesheet.style________,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style________,
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
                المدينة
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_460_2}>
            <View style={stylesheet.style_dashicons_arrow_down_alt2}>
              <Svg
                style={stylesheet.style_Vector_5}
                fill={'rgba(41, 32, 113, 1)'}
              >
                <Path
                  fillRule={'nonzero'}
                  d={'M 2 0 L 7 5 L 12 0 L 14 1 L 7 8 L 0 1 L 2 0 Z'}
                  strokeLinejoin={'miter'}
                />
              </Svg>
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
                المنطقة ( اختياري )
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
  style_AddProperty1: {
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
  style_1_6: {
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
  style___________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 291,
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
  style__________________________________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 98,
    // right: "auto",
    top: 207,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    color: 'rgb(1,1,1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Group_468: {
    position: 'absolute',
    width: 343,
    height: 48,
    transform: [{ translateX: 16 }, { translateY: 716 }, { rotate: '0deg' }],
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
  style_______: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 154,
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
  style_Group_503: {
    position: 'absolute',
    width: 102,
    height: 33,
    transform: [{ translateX: 257 }, { translateY: 150 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Frame_459: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    left: 53,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(29, 161, 242, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row'
  },
  style______: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Frame_460: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 0,
    // right: "auto",
    top: 0,
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
  style____: {
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
  style_Frame_459_2: {
    position: 'absolute',
    width: 343,
    height: 101,
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 16,
    // right: "auto",
    top: 234,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_0_80: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 8,
    // right: "auto",
    top: 79,
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
  },
  style____________2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 285,
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
    opacity: 0.20000000298023224,
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
    opacity: 0.20000000298023224,
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
    opacity: 0.20000000298023224,
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
    opacity: 0.20000000298023224,
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
  style_Group_511: {
    position: 'absolute',
    width: 343,
    height: 65,
    transform: [{ translateX: 16 }, { translateY: 359 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_____________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 267,
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
  style_Frame_459_3: {
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
  style__2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 12,
    // right: "auto",
    top: 12,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style______________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 227,
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
  style_Group_512: {
    position: 'absolute',
    width: 343,
    height: 115,
    transform: [{ translateX: 16 }, { translateY: 448 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style______________2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 276,
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
  style_Frame_459_4: {
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
  style_Group_5: {
    position: 'absolute',
    width: 13.298566818237305,
    height: 19,
    transform: [
      { translateX: 2.3505859375 },
      { translateY: 0 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_6: {
    position: 'absolute',
    width: 13.298566818237305,
    height: 19,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_7: {
    position: 'absolute',
    width: 13.298566818237305,
    height: 19,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_8: {
    position: 'absolute',
    width: 13.298566818237305,
    height: 19,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_3: {
    position: 'absolute',
    color: 'rgba(29, 161, 242, 1)',
    // width: "auto",
    height: 19,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Vector_4: {
    position: 'absolute',
    color: 'rgba(29, 161, 242, 1)',
    // width: "auto",
    height: 7.431551456451416,
    borderRadius: 0,
    left: 3.12890625,
    right: 3.129243850708008,
    transform: [
      { translateX: 0 },
      { translateY: 3.3033447265625 },
      { rotate: '0deg' }
    ]
  },
  style________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 294,
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
  style_Frame_460_2: {
    position: 'absolute',
    width: 343,
    height: 38,
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 0,
    // right: "auto",
    top: 77,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_dashicons_arrow_down_alt2: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 0,
    overflow: 'hidden',
    left: 10,
    // right: "auto",
    top: 9,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Vector_5: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 8,
    borderRadius: 0,
    left: 3,
    right: 3,
    transform: [{ translateX: 0 }, { translateY: 6 }, { rotate: '0deg' }]
  },
  style____________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 238,
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
