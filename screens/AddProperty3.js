import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { Svg, Path } from 'react-native-svg'

import { useFonts } from '@expo-google-fonts/dev'
import { AntDesign } from '@expo/vector-icons'

export default function AddProperty3({navigation}) {
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
      <View style={stylesheet.style_AddProperty3}>
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
            stylesheet.style_3_6,
            { display: 'flex', flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <Text
            style={[
              stylesheet.style_3_6,
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
            3/6
          </Text>
        </View>
        <View style={stylesheet.style_Group_468}>
          <TouchableOpacity
          onPress={() => {
          navigation.navigate("AddProperty4")
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
        <View style={stylesheet.style_Group_510}>
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
              غرف النوم
            </Text>
          </View>
          <View style={stylesheet.style_Frame_503}>
            <View style={stylesheet.style_Frame_465}>
              <View
                style={[
                  stylesheet.style_6,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_6,
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
                  6
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_464}>
              <View
                style={[
                  stylesheet.style_5,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_5,
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
                  5
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_463}>
              <View
                style={[
                  stylesheet.style_4,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_4,
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
                  4
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_462}>
              <View
                style={[
                  stylesheet.style_3,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_3,
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
                  3
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_461}>
              <View
                style={[
                  stylesheet.style_2,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_2,
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
                  2
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_460}>
              <View
                style={[
                  stylesheet.style_1,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_1,
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
                  1
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_459}>
              <View
                style={[
                  stylesheet.style________,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
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
                  استوديو
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_515}>
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
              دورات المياه
            </Text>
          </View>
          <View style={stylesheet.style_Frame_504}>
            <View style={stylesheet.style_Frame_465_2}>
              <View
                style={[
                  stylesheet.style_6_2,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_6_2,
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
                  6
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_464_2}>
              <View
                style={[
                  stylesheet.style_5_2,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_5_2,
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
                  5
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_463_2}>
              <View
                style={[
                  stylesheet.style_4_2,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_4_2,
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
                  4
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_462_2}>
              <View
                style={[
                  stylesheet.style_3_2,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_3_2,
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
                  3
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_461_2}>
              <View
                style={[
                  stylesheet.style_2_2,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_2_2,
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
                  2
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_460_2}>
              <View
                style={[
                  stylesheet.style_1_2,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_1_2,
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
                  1
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_518}>
          <View
            style={[
              stylesheet.style____________,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style____________,
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
              عدد المواقف
            </Text>
          </View>
          <View style={stylesheet.style_Frame_504_2}>
            <View style={stylesheet.style_Frame_465_3}>
              <View
                style={[
                  stylesheet.style_6_3,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_6_3,
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
                  6
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_464_3}>
              <View
                style={[
                  stylesheet.style_5_3,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_5_3,
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
                  5
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_463_3}>
              <View
                style={[
                  stylesheet.style_4_3,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_4_3,
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
                  4
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_462_3}>
              <View
                style={[
                  stylesheet.style_3_3,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_3_3,
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
                  3
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_461_3}>
              <View
                style={[
                  stylesheet.style_2_3,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_2_3,
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
                  2
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_460_3}>
              <View
                style={[
                  stylesheet.style_1_3,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_1_3,
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
                  1
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_520}>
          <View
            style={[
              stylesheet.style_________2,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_________2,
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
              التأثيث
            </Text>
          </View>
          <View style={stylesheet.style_Frame_503_2}>
            <View style={stylesheet.style_Frame_461_4}>
              <View
                style={[
                  stylesheet.style___________,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
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
                  غير مفروشة
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_460_4}>
              <View
                style={[
                  stylesheet.style___________2,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
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
                  نص مفروشة
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_459_2}>
              <View
                style={[
                  stylesheet.style________3,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style________3,
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
                  مفروشة
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_514}>
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
              أدوار العقار
            </Text>
          </View>
          <View style={stylesheet.style_Frame_459_3}>
            <View
              style={[
                stylesheet.style_______________,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style_______________,
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
                رقم دور العقار
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
                دور
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
            <View
              style={[
                stylesheet.style________________2,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style________________2,
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
                إجمالي الأدوار
              </Text>
            </View>
            <View style={stylesheet.style_arrow_1}>
              <View style={stylesheet.style_Group}>
                <View style={stylesheet.style_17}>
                  <Svg
                    style={stylesheet.style_Vector}
                    fill={'rgba(41, 32, 113, 1)'}
                  >
                    <Path
                      fillRule={'nonzero'}
                      d={
                        'M 4.083795800898705 8.131934245426525 C 4.0070252585437585 8.132378099780917 3.9309222752002144 8.117663759894842 3.8598504121030315 8.088634407261353 C 3.7887785490058485 8.059605054627863 3.7241358045972195 8.016831170693559 3.6696290943390983 7.96276702816966 L 0.16962894526412378 4.462766964272357 C 0.06098255899017002 4.353472192618802 5.181041002259356e-16 4.205625324188425 0 4.051516968586013 C 5.181041002259356e-16 3.8974086129836 0.06098255899017002 3.7495617445532243 0.16962894526412378 3.640266972899669 L 3.6696290943390983 0.14026663953967522 C 3.781221620362258 0.04470124408363803 3.924765970086825 -0.005235634523395459 4.071577007145036 0.00043503939991470223 C 4.218388044203247 0.006105713323224863 4.357652405238088 0.06696601618125723 4.46154088903486 0.17085450570606492 C 4.565429372831632 0.2747429952308726 4.626290233567488 0.4140076420992831 4.631960907178137 0.5608186872521245 C 4.637631580788787 0.7076297324049658 4.587694430549017 0.85117409004405 4.49212904036211 0.9627666222200184 L 1.406295597846743 4.048600234877094 L 4.49212904036211 7.134434681999278 C 4.57404165204734 7.215676318714955 4.630024754828711 7.319382268997298 4.652999440331308 7.432439974133767 C 4.675974125833904 7.545497679270236 4.664908465007595 7.662829392999137 4.621201870973622 7.769598369154717 C 4.57749527693965 7.876367345310297 4.5031107222760856 7.967778525724854 4.407453645240448 8.032273521219393 C 4.3117965682048105 8.096768516713931 4.199163238247887 8.13145052702779 4.083795800898705 8.131934245426525 L 4.083795800898705 8.131934245426525 Z'
                      }
                      strokeLinejoin={'miter'}
                    />
                  </Svg>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_516}>
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
              صالات
            </Text>
          </View>
          <View style={stylesheet.style_Frame_504_3}>
            <View style={stylesheet.style_Frame_465_4}>
              <View
                style={[
                  stylesheet.style_6_4,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_6_4,
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
                  6
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_464_4}>
              <View
                style={[
                  stylesheet.style_5_4,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_5_4,
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
                  5
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_463_4}>
              <View
                style={[
                  stylesheet.style_4_4,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_4_4,
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
                  4
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_462_4}>
              <View
                style={[
                  stylesheet.style_3_4,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_3_4,
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
                  3
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_461_5}>
              <View
                style={[
                  stylesheet.style_2_4,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_2_4,
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
                  2
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_460_5}>
              <View
                style={[
                  stylesheet.style_1_4,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_1_4,
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
                  1
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_459_4}>
              <View
                style={[
                  stylesheet.style___________3,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
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
                  غير متوفر
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_517}>
          <View
            style={[
              stylesheet.style_______2,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_______2,
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
              مجالس
            </Text>
          </View>
          <View style={stylesheet.style_Frame_504_4}>
            <View style={stylesheet.style_Frame_465_5}>
              <View
                style={[
                  stylesheet.style_6_5,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_6_5,
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
                  6
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_464_5}>
              <View
                style={[
                  stylesheet.style_5_5,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_5_5,
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
                  5
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_463_5}>
              <View
                style={[
                  stylesheet.style_4_5,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_4_5,
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
                  4
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_462_5}>
              <View
                style={[
                  stylesheet.style_3_5,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_3_5,
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
                  3
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_461_6}>
              <View
                style={[
                  stylesheet.style_2_5,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_2_5,
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
                  2
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_460_6}>
              <View
                style={[
                  stylesheet.style_1_5,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                ]}
              >
                <Text
                  style={[
                    stylesheet.style_1_5,
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
                  1
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Frame_459_5}>
              <View
                style={[
                  stylesheet.style___________4,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
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
                  غير متوفر
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Rectangle_82}></View>
        <View style={stylesheet.style_Rectangle_83}></View>
        <View style={stylesheet.style_Rectangle_84}></View>
        <View style={stylesheet.style_Rectangle_85}></View>
        <View style={stylesheet.style_Rectangle_86}></View>
        <View style={stylesheet.style_Rectangle_87}></View>
        <View style={stylesheet.style_Rectangle_88}></View>

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
  style_AddProperty3: {
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
    left: 0,
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
  style_3_6: {
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
  style_Group_510: {
    position: 'absolute',
    width: 319,
    height: 60,
    transform: [{ translateX: 40 }, { translateY: 123 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style__________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 264,
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
  style_Frame_503: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 0,
    left: 0,
    // right: "auto",
    top: 27,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'row'
  },
  style_Frame_465: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_6: {
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
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_5: {
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
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_4: {
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
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_3: {
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
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_2: {
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
  style_Frame_460: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_1: {
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
  style_Frame_459: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(29, 161, 242, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0
  },
  style________: {
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
  style_Group_515: {
    position: 'absolute',
    width: 238,
    height: 60,
    transform: [{ translateX: 121 }, { translateY: 207 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_____________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 171,
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
  style_Frame_504: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 0,
    left: 0,
    // right: "auto",
    top: 27,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'row'
  },
  style_Frame_465_2: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_6_2: {
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
  style_Frame_464_2: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_5_2: {
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
  style_Frame_463_2: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_4_2: {
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
  style_Frame_462_2: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_3_2: {
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
  style_Frame_461_2: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_2_2: {
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
  style_Frame_460_2: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(29, 161, 242, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0
  },
  style_1_2: {
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
  style_Group_518: {
    position: 'absolute',
    width: 238,
    height: 60,
    transform: [{ translateX: 121 }, { translateY: 459 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style____________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 168,
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
  style_Frame_504_2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 0,
    left: 0,
    // right: "auto",
    top: 27,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'row'
  },
  style_Frame_465_3: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_6_3: {
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
  style_Frame_464_3: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_5_3: {
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
  style_Frame_463_3: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_4_3: {
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
  style_Frame_462_3: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_3_3: {
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
  style_Frame_461_3: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_2_3: {
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
  style_Frame_460_3: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(29, 161, 242, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0
  },
  style_1_3: {
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
  style_Group_520: {
    position: 'absolute',
    width: 286,
    height: 60,
    transform: [{ translateX: 73 }, { translateY: 543 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_________2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 250,
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
  style_Frame_503_2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 0,
    left: 0,
    // right: "auto",
    top: 27,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'row'
  },
  style_Frame_461_4: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style___________: {
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
  style_Frame_460_4: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
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
  style_Frame_459_2: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(29, 161, 242, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0
  },
  style________3: {
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
  style_Group_514: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 65,
    transform: [{ translateX: 16 }, { translateY: 627 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style______________2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 285,
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
    width: Dimensions.get("window").width - 20,
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
  style_______________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 26,
    // right: "auto",
    top: 10,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style____: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 137,
    // right: "auto",
    top: 10,
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
    left: 117,
    // right: "auto",
    top: 10,
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
  style________________2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 257,
    // right: "auto",
    top: 10,
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
  style_arrow_1: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 0,
    overflow: 'hidden',
    left: 16,
    // right: "auto",
    top: 26,
    // bottom: "auto",
    transform: [
      { translateX: 8.881784197001252e-16 },
      { translateY: -7 },
      { rotate: '-90deg' }
    ],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group: {
    position: 'absolute',
    width: 4.6646833419799805,
    height: 8.131943702697754,
    transform: [
      { translateX: 2.951416015625 },
      { translateY: -4.666259765625 },
      { rotate: '90deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_17: {
    position: 'absolute',
    width: 4.6646833419799805,
    height: 8.131943702697754,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '90deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 8.131943702697754,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '-90deg' }]
  },
  style_Group_516: {
    position: 'absolute',
    width: 325,
    height: 60,
    transform: [{ translateX: 34 }, { translateY: 291 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style______: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 287,
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
  style_Frame_504_3: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 0,
    left: 0,
    // right: "auto",
    top: 27,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'row'
  },
  style_Frame_465_4: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_6_4: {
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
  style_Frame_464_4: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_5_4: {
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
  style_Frame_463_4: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_4_4: {
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
  style_Frame_462_4: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_3_4: {
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
  style_Frame_461_5: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_2_4: {
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
  style_Frame_460_5: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_1_4: {
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
  style_Frame_459_4: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(29, 161, 242, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0
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
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
  },
  style_Group_517: {
    position: 'absolute',
    width: 325,
    height: 60,
    transform: [{ translateX: 34 }, { translateY: 375 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_______2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 281,
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
  style_Frame_504_4: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 0,
    left: 0,
    // right: "auto",
    top: 27,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'row'
  },
  style_Frame_465_5: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_6_5: {
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
  style_Frame_464_5: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_5_5: {
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
  style_Frame_463_5: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_4_5: {
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
  style_Frame_462_5: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_3_5: {
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
  style_Frame_461_6: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_2_5: {
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
  style_Frame_460_6: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginRight: 10
  },
  style_1_5: {
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
  style_Frame_459_5: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    minWidth: 0,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 1)',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(29, 161, 242, 1)',
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0
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
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896,
    flexShrink: 0
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
    backgroundColor: 'rgba(29, 161, 242, 1)'
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
    backgroundColor: 'rgba(29, 161, 242, 1)'
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
    backgroundColor: 'rgba(29, 161, 242, 1)'
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
    backgroundColor: 'rgba(29, 161, 242, 1)'
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
    backgroundColor: 'rgba(29, 161, 242, 1)'
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
  style_Group_5: {
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
      { translateY: -5.4749755859375 },
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
