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

export default function DateBookScreen() {
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
      <View style={stylesheet.style_DateBookScreen}>
        <Image
          style={stylesheet.style_Rectangle_64}
          source={{ uri: imageUrlstyle_Rectangle_64 }}
        ></Image>
        <View style={stylesheet.style_Back2_1}>
          <View style={stylesheet.style_Group}>
            <View style={stylesheet.style_Group_2}>
              <View style={stylesheet.style_Group_3}>
                <View style={stylesheet.style_Group_4}>
                  <Svg
                    style={stylesheet.style_Vector}
                    fill={'rgba(255, 255, 255, 1)'}
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
                    fill={'rgba(255, 255, 255, 1)'}
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
            حجز موعد
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
            يرجى التأكد من صحة المعلومات لتأكيد زيارتك للعقار
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
                الإسم كامل
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
              stylesheet.style____________3,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style____________3,
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
                stylesheet.style____________4,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style____________4,
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
                stylesheet.style__966,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style__966,
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
                |
              </Text>
            </View>
          </View>
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
          <View style={stylesheet.style_Rectangle_74_4}></View>
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
              تقديم
            </Text>
          </View>
        </View>
        <Component_style_Group_440
          variant="variant1"
          variant1_left={16}
          variant1_right={'auto'}
          variant1_top={50}
          variant1_bottom={'auto'}
          variant1_transform={[
            { translateX: 0 },
            { translateY: 0 },
            { rotate: '0deg' }
          ]}
        />
        <View style={stylesheet.style_Group_463}>
          <View style={stylesheet.style_Ellipse_3}></View>
          <View style={stylesheet.style_Ellipse_4}></View>
          <View style={stylesheet.style_Ellipse_5}></View>
          <View style={stylesheet.style_Ellipse_6}></View>
          <View style={stylesheet.style_Ellipse_7}></View>
        </View>
        <View
          style={[
            stylesheet.style__________________________________,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style__________________________________,
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
            فيلا إطلالة مميزة في حي سكني هادئ
          </Text>
        </View>
        <View style={stylesheet.style_Group_439}>
          <View
            style={[
              stylesheet.style______________________________________________,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style______________________________________________,
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
              جدة - الطريق السريع - بالقرب من مسجد الهداي..
            </Text>
          </View>
          <View style={stylesheet.style_Location_1}>
            <View style={stylesheet.style_Group_5}>
              <View style={stylesheet.style_Group_6}>
                <View style={stylesheet.style_Group_7}>
                  <View style={stylesheet.style_Group_8}>
                    <Svg
                      style={stylesheet.style_Vector_3}
                      fill={'rgba(255, 255, 255, 1)'}
                    >
                      <Path
                        fillRule={'nonzero'}
                        d={
                          'M 5.171664714813232 0 C 2.3199480709628966 0 0 2.3199479486967154 0 5.171664442255539 C 0 6.11047363585822 0.42103432471652646 7.120165097792648 0.43867882735346886 7.162755275733726 C 0.5746631868530125 7.485527976850209 0.8429812299994842 7.986874977049233 1.0364623266299104 8.280747209829153 L 4.582399069340681 13.653498500936722 C 4.727509896346667 13.873750556102781 4.942286171466651 14 5.171664714813232 14 C 5.401043258159814 14 5.615819533279798 13.87375039290884 5.7609303602857835 13.653802549381554 L 9.30717115145741 8.280747209829153 C 9.500956477875302 7.986874977049233 9.768969856050443 7.485527976850209 9.904954215549987 7.162755275733726 C 9.92259871818693 7.120469313964586 10.343329429626465 6.1107778293643324 10.343329429626465 5.171664442255539 C 10.343329429626463 2.3199479486967154 8.023381358663569 0 5.171664714813232 0 Z M 9.34398074355613 6.926683707637029 C 9.22259873388016 7.215992693304726 8.972837628875773 7.682355264381645 8.799130543664914 7.945805934365821 L 5.252890332738443 13.318860693673098 C 5.182920750033448 13.42503192462044 5.160712728053873 13.42503192462044 5.0907431453488785 13.318860693673098 L 1.5445023541772518 7.945805934365821 C 1.3707952689663931 7.682355264381645 1.1210341639620067 7.2156886448598945 0.9996521542860352 6.926379659192198 C 0.9944804892901656 6.913906821075178 0.6084311429192039 5.984528385467114 0.6084311429192039 5.171664442255539 C 0.6084311429192039 2.6554976111722715 2.655497751122632 0.6084311108535928 5.171664714813232 0.6084311108535928 C 7.687831678503833 0.6084311108535928 9.734897706462107 2.6554976111722715 9.734897706462107 5.171664442255539 C 9.734897706462107 5.985745304552843 9.347935546066703 6.917557241178217 9.34398074355613 6.926683707637029 Z'
                        }
                        strokeLinejoin={'miter'}
                      />
                    </Svg>
                    <Svg
                      style={stylesheet.style_Vector_4}
                      fill={'rgba(255, 255, 255, 1)'}
                    >
                      <Path
                        fillRule={'nonzero'}
                        d={
                          'M 2.7379401247173014 0 C 1.2281183082634601 0 0 1.2284221884631277 0 2.7379397828907357 C 0 4.2474573773183435 1.2281183082634601 5.475880146026611 2.7379401247173014 5.475880146026611 C 4.2477619411711425 5.475880146026611 5.475879669189453 4.2474573773183435 5.475879669189453 2.7379397828907357 C 5.475879669189451 1.2284221884631277 4.2477619411711425 0 2.7379401247173014 0 Z M 2.7379401247173014 4.8674487285677515 C 1.5639722522165727 4.8674487285677515 0.608431138826067 3.912211826736293 0.608431138826067 2.7379397828907357 C 0.608431138826067 1.5636677390451785 1.5639722522165727 0.6084311273362901 2.7379401247173014 0.6084311273362901 C 3.91190799721803 0.6084311273362901 4.867449110608536 1.5636677390451785 4.867449110608536 2.7379397828907357 C 4.867449110608536 3.912211826736293 3.91190799721803 4.8674487285677515 2.7379401247173014 4.8674487285677515 Z'
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
const Component_style_Group_440 = ({
  variant,
  variant1_left,
  variant1_right,
  variant1_top,
  variant1_bottom,
  variant1_transform
}) => {
  if (variant === 'variant1') {
    return (
      <View
        style={[
          component_style_Group_440_stylesheet.style_Property_1_Default,
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
          style={component_style_Group_440_stylesheet.style_Ellipse_2}
        ></View>
        <View style={component_style_Group_440_stylesheet.style_Heart_1}>
          <View style={component_style_Group_440_stylesheet.style_Group}>
            <Svg
              style={component_style_Group_440_stylesheet.style_Vector}
              fill={'rgba(0,0,0,0)'}
            >
              <Path
                fillRule={'nonzero'}
                d={
                  'M 17.693671822547913 1.952045738697052 C 17.021354038268328 1.0687184929847717 16.07163404673338 0.43701782263815403 14.99708116054535 0.1584242768585682 C 13.922528274357319 -0.12016926892101765 12.785520359873772 -0.02948356419801712 11.768711566925049 0.4159128852188587 C 10.858633428812027 0.8086472749710083 10.046953111886978 1.470795378088951 9.388671875 2.3495063483715057 C 8.730390638113022 1.4686469733715057 7.9187109768390656 0.8064988292753696 7.008632838726044 0.4159128852188587 C 5.991824045777321 -0.02948356419801712 4.854815147817135 -0.12016926892101765 3.7802622616291046 0.1584242768585682 C 2.7057093754410744 0.43701782263815403 1.7559897117316723 1.0687184929847717 1.0836719274520874 1.952045738697052 C 0.3746875524520874 2.881030149757862 0 4.042045630514622 0 5.309194058179855 C 0 7.132787749171257 1.0875391215085983 9.133412644267082 3.2321094274520874 11.257787585258484 C 4.979648411273956 12.988139167428017 7.044726595282555 14.40524885058403 8.119804739952087 15.095756649971008 C 8.498604904860258 15.338196139782667 8.938931450247765 15.467040061950684 9.388671875 15.467040061950684 C 9.838412299752235 15.467040061950682 10.278738845139742 15.338196139782667 10.657539010047913 15.095756649971008 C 11.731757760047913 14.40524885058403 13.797695338726044 12.988139167428017 15.545234322547913 11.257787585258484 C 17.6898046284914 9.134272038936615 18.77734375 7.132787749171257 18.77734375 5.309194058179855 C 18.77734375 4.042045630514622 18.402656197547913 2.881030149757862 17.693671822547913 1.952045738697052 Z'
                }
                strokeLinejoin={'miter'}
                strokeWidth={1}
                stroke={'rgba(131, 131, 131, 1)'}
              />
            </Svg>
          </View>
        </View>
      </View>
    )
  }
  if (variant === 'variant2') {
    return (
      <View
        style={[
          component_style_Group_440_stylesheet.style_Property_1_Variant2,
          {}
        ]}
      >
        <View
          style={component_style_Group_440_stylesheet.style_Ellipse_2_2}
        ></View>
        <View style={component_style_Group_440_stylesheet.style_Heart_1_2}>
          <View style={component_style_Group_440_stylesheet.style_Group_2}>
            <Svg
              style={component_style_Group_440_stylesheet.style_Vector_2}
              fill={'rgba(226, 22, 22, 1)'}
            >
              <Path
                fillRule={'nonzero'}
                d={
                  'M 17.693671822547913 1.952045738697052 C 17.021354038268328 1.0687184929847717 16.07163404673338 0.43701782263815403 14.99708116054535 0.1584242768585682 C 13.922528274357319 -0.12016926892101765 12.785520359873772 -0.02948356419801712 11.768711566925049 0.4159128852188587 C 10.858633428812027 0.8086472749710083 10.046953111886978 1.470795378088951 9.388671875 2.3495063483715057 C 8.730390638113022 1.4686469733715057 7.9187109768390656 0.8064988292753696 7.008632838726044 0.4159128852188587 C 5.991824045777321 -0.02948356419801712 4.854815147817135 -0.12016926892101765 3.7802622616291046 0.1584242768585682 C 2.7057093754410744 0.43701782263815403 1.7559897117316723 1.0687184929847717 1.0836719274520874 1.952045738697052 C 0.3746875524520874 2.881030149757862 0 4.042045630514622 0 5.309194058179855 C 0 7.132787749171257 1.0875391215085983 9.133412644267082 3.2321094274520874 11.257787585258484 C 4.979648411273956 12.988139167428017 7.044726595282555 14.40524885058403 8.119804739952087 15.095756649971008 C 8.498604904860258 15.338196139782667 8.938931450247765 15.467040061950684 9.388671875 15.467040061950684 C 9.838412299752235 15.467040061950682 10.278738845139742 15.338196139782667 10.657539010047913 15.095756649971008 C 11.731757760047913 14.40524885058403 13.797695338726044 12.988139167428017 15.545234322547913 11.257787585258484 C 17.6898046284914 9.134272038936615 18.77734375 7.132787749171257 18.77734375 5.309194058179855 C 18.77734375 4.042045630514622 18.402656197547913 2.881030149757862 17.693671822547913 1.952045738697052 Z'
                }
                strokeLinejoin={'miter'}
              />
            </Svg>
          </View>
        </View>
      </View>
    )
  }
}

const stylesheet = StyleSheet.create({
  style_DateBookScreen: {
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
  style_Rectangle_64: {
    position: 'absolute',
    width: '100%',
    height: 212,
    borderRadius: 0,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Back2_1: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 0,
    overflow: 'hidden',
    left: 359,
    // right: "auto",
    top: 80,
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
    color: 'rgba(255, 255, 255, 1)',
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
    color: 'rgba(255, 255, 255, 1)',
    // width: "auto",
    height: 13.057499885559082,
    borderRadius: 0,
    left: -7.4993896484375,
    right: 24.223779678344727,
    transform: [
      { translateX: 0 },
      { translateY: -5.47509765625 },
      { rotate: '-7.0167096047110005e-15deg' }
    ]
  },
  style_________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    right: 10,
    // right: "auto",
    top: 234,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 18,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style__________________________________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 83,
    // right: "auto",
    top: 261,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(131, 131, 131, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Group_465: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 73,
    transform: [{ translateX: 16 }, { translateY: 298 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style___________: {
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
  style_Group_464: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 48,
    transform: [{ translateX: 0 }, { translateY: 25 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
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
  style____________2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 261,
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
  style_Group_466: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 73,
    transform: [{ translateX: 16 }, { translateY: 391 }, { rotate: '0deg' }],
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
    width: Dimensions.get("window").width - 20,
    height: 48,
    transform: [{ translateX: 0 }, { translateY: 25 }, { rotate: '0deg' }],
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
    width: Dimensions.get("window").width - 20,
    height: 73,
    transform: [{ translateX: 16 }, { translateY: 484 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style____________3: {
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
    width: Dimensions.get("window").width - 20,
    height: 48,
    transform: [{ translateX: 0 }, { translateY: 25 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74_3: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
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
  style____________4: {
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
  style__966: {
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
  style_______________________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 138,
    // right: "auto",
    top: 747,
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
    width: Dimensions.get("window").width - 20,
    height: 48,
    transform: [{ translateX: 16 }, { translateY: 679 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74_4: {
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
  style______: {
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
  style_Group_463: {
    position: 'absolute',
    width: 69,
    height: 9,
    transform: [{ translateX: 153 }, { translateY: 191 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Ellipse_3: {
    position: 'absolute',
    width: 9,
    height: 9,
    borderRadius: 1000,
    backgroundColor: 'rgba(41, 32, 113, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Ellipse_4: {
    position: 'absolute',
    width: 9,
    height: 9,
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    left: 15,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Ellipse_5: {
    position: 'absolute',
    width: 9,
    height: 9,
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    left: 30,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Ellipse_6: {
    position: 'absolute',
    width: 9,
    height: 9,
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    left: 45,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Ellipse_7: {
    position: 'absolute',
    width: 9,
    height: 9,
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    left: 60,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style__________________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 76,
    // right: "auto",
    top: 60,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Group_439: {
    position: 'absolute',
    width: 243,
    height: 14,
    transform: [{ translateX: 66 }, { translateY: 93 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style______________________________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Location_1: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 0,
    overflow: 'hidden',
    left: 229,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group_5: {
    position: 'absolute',
    width: 10.343329429626465,
    height: 14,
    transform: [
      { translateX: 1.828369140625 },
      { translateY: 0 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_6: {
    position: 'absolute',
    width: 10.343329429626465,
    height: 14,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_7: {
    position: 'absolute',
    width: 10.343329429626465,
    height: 14,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_8: {
    position: 'absolute',
    width: 10.343329429626465,
    height: 14,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_3: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 1)',
    // width: "auto",
    height: 14,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Vector_4: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 1)',
    // width: "auto",
    height: 5.475880146026611,
    borderRadius: 0,
    left: 2.4337158203125,
    right: 2.4337339401245117,
    transform: [
      { translateX: 0 },
      { translateY: 2.43408203125 },
      { rotate: '0deg' }
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
const component_style_Group_440_stylesheet = StyleSheet.create({
  style_Property_1_Default: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 0,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Ellipse_2: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    left: 0,
    // right: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Heart_1: {
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 0,
    overflow: 'hidden',
    left: 7,
    // right: "auto",
    transform: [{ translateX: 0 }, { translateY: 7 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group: {
    position: 'absolute',
    width: 18.77734375,
    height: 15.467040061950684,
    transform: [
      { translateX: 1.611328125 },
      { translateY: 3.265625 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector: {
    position: 'absolute',
    color: 'rgba(0,0,0,0)',
    // width: "auto",
    height: 15.467040061950684,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Property_1_Variant2: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 0,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Ellipse_2_2: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    left: 0,
    // right: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Heart_1_2: {
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 0,
    overflow: 'hidden',
    left: 7,
    // right: "auto",
    transform: [{ translateX: 0 }, { translateY: 7 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group_2: {
    position: 'absolute',
    width: 18.77734375,
    height: 15.467040061950684,
    transform: [
      { translateX: 1.611328125 },
      { translateY: 3.265625 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_2: {
    position: 'absolute',
    color: 'rgba(226, 22, 22, 1)',
    // width: "auto",
    height: 15.467040061950684,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  }
})
const imageUrlstyle_Rectangle_64 =
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/0bfacb9b130e9d03d8a92db2a5e9e200'
