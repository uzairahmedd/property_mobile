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
import { AntDesign } from '@expo/vector-icons'

export default function CityModel() {
  let [fontsLoaded] = useFonts({})

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{ height: Dimensions.get('window').height }}
    >
      <View style={stylesheet.style_CityModel}>
        <View style={stylesheet.style_Group_458}>
          <View style={stylesheet.style_Rectangle_68}></View>
          <View style={stylesheet.style_Rectangle_77}></View>
          <View style={stylesheet.style_bi_arrow_left}></View>
          <View style={stylesheet.style_Line_4}></View>
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
              اختر المدينة
            </Text>
            <AntDesign
              name="arrowright"
              size={24}
              color="black"
              style={{ marginLeft: 20 }}
            />
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
              الرياض
            </Text>
          </View>
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
              الخبر
            </Text>
          </View>
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
              جازان
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_______3,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_______3,
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
              بربدة
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_______4,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_______4,
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
              نجران
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_____,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
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
              ابها
            </Text>
          </View>
          <View
            style={[
              stylesheet.style______2,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style______2,
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
              تبوك
            </Text>
          </View>
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
              الطائف
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_______5,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_______5,
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
              الخرج
            </Text>
          </View>
          <View
            style={[
              stylesheet.style______3,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style______3,
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
              عرعر
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_280,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_280,
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
              280
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_280_2,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_280_2,
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
              280
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_280_3,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_280_3,
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
              280
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_280_4,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_280_4,
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
              280
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_280_5,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_280_5,
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
              280
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_280_6,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_280_6,
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
              280
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_280_7,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_280_7,
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
              280
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_280_8,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_280_8,
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
              280
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_280_9,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_280_9,
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
              280
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_280_10,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_280_10,
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
              280
            </Text>
          </View>
          <View style={stylesheet.style_Polygon_1}></View>
        </View>
      </View>
    </ScrollView>
  )
}

const stylesheet = StyleSheet.create({
  style_CityModel: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: 418,
    borderRadius: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(0,0,0,0)',
    left: 0,
    top: 0
  },
  style_Group_458: {
    position: 'absolute',
    width: 343,
    height: 418,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_68: {
    position: 'absolute',
    width: 343,
    height: 404,
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
  style_Rectangle_77: {
    position: 'absolute',
    width: 3,
    height: 96,
    borderRadius: 8,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 77,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(41, 32, 113, 1)'
  },
  style_bi_arrow_left: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 0,
    overflow: 'hidden',
    left: 327,
    // right: "auto",
    top: 54,
    // bottom: "auto",
    transform: [
      { translateX: -15.999999999999998 },
      { translateY: -9.797174820681343e-16 },
      { rotate: '-7.0167096047110005e-15deg' }
    ],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Vector: {
    position: 'absolute',
    color: 'rgba(14, 14, 14, 1)',
    // width: "auto",
    height: 9.001262664794922,
    borderRadius: 0,
    left: -0.9990234375,
    right: 2.9981298446655273,
    transform: [
      { translateX: 0 },
      { translateY: -3.49951171875 },
      { rotate: '-7.0167096047110005e-15deg' }
    ]
  },
  style_Line_4: {
    position: 'absolute',
    width: '100%',
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(200, 200, 200, 1)',
    left: 0,
    // right: "auto",
    top: 63,
    // bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '7.0167096047110005e-15deg' }
    ]
  },
  style_____________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 236,
    // right: "auto",
    top: 38,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(200, 200, 200, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_______: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 288,
    // right: "auto",
    top: 87,
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
  style______: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 301,
    // right: "auto",
    top: 120,
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
  style_______2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 298,
    // right: "auto",
    top: 153,
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
  style_______3: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 299,
    // right: "auto",
    top: 186,
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
  style_______4: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 296,
    // right: "auto",
    top: 219,
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
  style_____: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 306,
    // right: "auto",
    top: 252,
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
  style______2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 299,
    // right: "auto",
    top: 285,
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
  style________2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 287,
    // right: "auto",
    top: 318,
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
  style_______5: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 297,
    // right: "auto",
    top: 351,
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
  style______3: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 302,
    // right: "auto",
    top: 384,
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
  style_280: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 26,
    // right: "auto",
    top: 87,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_280_2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 26,
    // right: "auto",
    top: 120,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_280_3: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 26,
    // right: "auto",
    top: 153,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_280_4: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 26,
    // right: "auto",
    top: 186,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_280_5: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 26,
    // right: "auto",
    top: 219,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_280_6: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 26,
    // right: "auto",
    top: 252,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_280_7: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 26,
    // right: "auto",
    top: 285,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_280_8: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 26,
    // right: "auto",
    top: 318,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_280_9: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 26,
    // right: "auto",
    top: 351,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_280_10: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 26,
    // right: "auto",
    top: 384,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Polygon_1: {
    position: 'absolute',
    width: 29,
    height: 29,
    borderRadius: 2,
    left: 304,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  }
})
