import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Svg, Path } from "react-native-svg";

import { useFonts } from "@expo-google-fonts/dev";

export default function AddProperty6() {
  let [fontsLoaded] = useFonts({
    "SF Pro Text":
      "https://fontsfree.net//wp-content/fonts/basic/sans-serif/FontsFree-Net-SFProText-Regular.ttf",
  });

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{ height: Dimensions.get("window").height }}
    >
      <View style={stylesheet.style_AddProperty6}>
        <View
          style={[
            stylesheet.style_________________,
            { display: "flex", flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Text
            style={[
              stylesheet.style_________________,
              {
                position: "relative",
                // flexGrow: 1,
                left: 0,
                top: 0,
                // height: "auto",
                transform: [{ translateX: 0 }, { translateY: 0 }],
              },
            ]}
          >
            اضافة إعلان عقار
          </Text>
        </View>
        <View
          style={[
            stylesheet.style_6_6,
            { display: "flex", flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Text
            style={[
              stylesheet.style_6_6,
              {
                position: "relative",
                // flexGrow: 1,
                left: 0,
                top: 0,
                // height: "auto",
                transform: [{ translateX: 0 }, { translateY: 0 }],
              },
            ]}
          >
            6/6
          </Text>
        </View>
        <View style={stylesheet.style_Group_468}>
          <View style={stylesheet.style_Rectangle_74}></View>
          <View
            style={[
              stylesheet.style_____________,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style_____________,
                {
                  position: "relative",
                  // flexGrow: 1,
                  left: 0,
                  top: 0,
                  // height: "auto",
                  transform: [{ translateX: 0 }, { translateY: 0 }],
                },
              ]}
            >
              توثيق العقار
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Group_506}>
          <View style={stylesheet.style_Rectangle_74_2}></View>
          <View
            style={[
              stylesheet.style_____,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style_____,
                {
                  position: "relative",
                  // flexGrow: 1,
                  left: 0,
                  top: 0,
                  // height: "auto",
                  transform: [{ translateX: 0 }, { translateY: 0 }],
                },
              ]}
            >
              تخطي
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
                    fill={"rgba(41, 32, 113, 1)"}
                  >
                    <Path
                      fillRule={"nonzero"}
                      d={
                        "M 12 0 C 5.372578382492065 0 0 5.372578382492065 0 12 C 0 18.627421617507935 5.372578382492065 24 12 24 C 18.627421617507935 24 24 18.627421617507935 24 12 C 24 5.372578382492065 18.627421617507935 0 12 0 Z M 12 22.5 C 6.201000094413757 22.5 1.5 17.798999905586243 1.5 12 C 1.5 6.201000094413757 6.201000094413757 1.5 12 1.5 C 17.798999905586243 1.5 22.5 6.201000094413757 22.5 12 C 22.5 17.798999905586243 17.798999905586243 22.5 12 22.5 Z"
                      }
                      strokeLinejoin={"miter"}
                    />
                  </Svg>
                  <Svg
                    style={stylesheet.style_Vector_2}
                    fill={"rgba(41, 32, 113, 1)"}
                  >
                    <Path
                      fillRule={"nonzero"}
                      d={
                        "M 6.218110084533691 0 L 0.2181093692779541 6 C -0.07270313054323196 6.292546883225441 -0.07270313054323196 6.764952287077904 0.2181093692779541 7.057499170303345 L 6.218110084533691 13.057499885559082 L 7.275609970092773 11.99250054359436 L 1.8081092834472656 6.5249998569488525 L 7.275609970092773 1.057499885559082 L 6.218110084533691 0 Z"
                      }
                      strokeLinejoin={"miter"}
                    />
                  </Svg>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            stylesheet.style___________________,
            { display: "flex", flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Text
            style={[
              stylesheet.style___________________,
              {
                position: "relative",
                // flexGrow: 1,
                left: 0,
                top: 0,
                // height: "auto",
                transform: [{ translateX: 0 }, { translateY: 0 }],
              },
            ]}
          >
            لماذا توثيق العقار
          </Text>
        </View>
        <View style={stylesheet.style_Group_510}>
          <View
            style={[
              stylesheet.style_________________________________________________,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style_________________________________________________,
                {
                  position: "relative",
                  // flexGrow: 1,
                  left: 0,
                  top: 0,
                  // height: "auto",
                  transform: [{ translateX: 0 }, { translateY: 0 }],
                },
              ]}
            >
              عرضة أيقونة موثق على العقار و كسب ثقة المستخدمين
            </Text>
          </View>
          <View
            style={[
              stylesheet.style______________________,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style______________________,
                {
                  position: "relative",
                  // flexGrow: 1,
                  left: 0,
                  top: 0,
                  // height: "auto",
                  transform: [{ translateX: 0 }, { translateY: 0 }],
                },
              ]}
            >
              أولوية في نتائج البحث
            </Text>
          </View>
          <View
            style={[
              stylesheet.style______________________________,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style______________________________,
                {
                  position: "relative",
                  // flexGrow: 1,
                  left: 0,
                  top: 0,
                  // height: "auto",
                  transform: [{ translateX: 0 }, { translateY: 0 }],
                },
              ]}
            >
              ضمان تواصل مع المستخدمين أكثر
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Group_511}>
          <View
            style={[
              stylesheet.style___________,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style___________,
                {
                  position: "relative",
                  // flexGrow: 1,
                  left: 0,
                  top: 0,
                  // height: "auto",
                  transform: [{ translateX: 0 }, { translateY: 0 }],
                },
              ]}
            >
              رقم الهوية
            </Text>
          </View>
          <View style={stylesheet.style_Frame_459}>
            <View
              style={[
                stylesheet.style_________,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_________,
                  {
                    position: "relative",
                    // flexGrow: 1,
                    left: 0,
                    top: 0,
                    // height: "auto",
                    transform: [{ translateX: 0 }, { translateY: 0 }],
                  },
                ]}
              >
                ادخل هنا
              </Text>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_512}>
          <View
            style={[
              stylesheet.style__________2,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style__________2,
                {
                  position: "relative",
                  // flexGrow: 1,
                  left: 0,
                  top: 0,
                  // height: "auto",
                  transform: [{ translateX: 0 }, { translateY: 0 }],
                },
              ]}
            >
              رقم الصك
            </Text>
          </View>
          <View style={stylesheet.style_Frame_459_2}>
            <View
              style={[
                stylesheet.style_____________________________________________________,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_____________________________________________________,
                  {
                    position: "relative",
                    // flexGrow: 1,
                    left: 0,
                    top: 0,
                    // height: "auto",
                    transform: [{ translateX: 0 }, { translateY: 0 }],
                  },
                ]}
              >
                الرجاء ادخال الكود ( تم ارساله لك عبر الرسالة نصية )
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const Component_style_system___light___status_bar___default = ({
  variant1_left,
  variant1_right,
  variant1_top,
  variant1_bottom,
  variant1_transform,
  variant1_text1,
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
          transform: variant1_transform,
        },
      ]}
    >
      <View
        style={[
          component_style_system___light___status_bar___default_stylesheet.style_Time,
          { display: "flex", flexDirection: "row", alignItems: "center" },
        ]}
      >
        <Text
          style={[
            component_style_system___light___status_bar___default_stylesheet.style_Time,
            {
              position: "relative",
              // flexGrow: 1,
              left: 0,
              top: 0,
              // height: "auto",
              transform: [{ translateX: 0 }, { translateY: 0 }],
            },
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
          fill={"rgba(0, 0, 0, 1)"}
        >
          <Path
            fillRule={"nonzero"}
            d={
              "M 0 0 L 0 4 C 0.8047311305999756 3.6612234711647034 1.328037977218628 2.8731333017349243 1.328037977218628 2 C 1.328037977218628 1.1268666982650757 0.8047311305999756 0.33877652883529663 0 0 Z"
            }
            strokeLinejoin={"miter"}
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
  );
};

const stylesheet = StyleSheet.create({
  style_AddProperty6: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 812,
    borderRadius: 0,
    overflow: "hidden",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
    left: 0,
    top: 0,
  },
  style_________________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 126,
    // right: "auto",
    top: 56,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 18,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_6_6: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 16,
    // right: "auto",
    top: 58,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 16,
    color: "rgb(1,1,1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_468: {
    position: "absolute",
    width: 228.6666717529297,
    height: 48,
    transform: [{ translateX: 16 }, { translateY: 716 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Rectangle_74: {
    position: "absolute",
    width: 228.6666717529297,
    height: 48,
    borderRadius: 8,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.10000000149011612,
    shadowRadius: 18,
    backgroundColor: "rgba(29, 161, 242, 1)",
  },
  style_____________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 76,
    // right: "auto",
    top: 14,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 16,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_506: {
    position: "absolute",
    width: 102.33000183105469,
    height: 48,
    transform: [{ translateX: 257 }, { translateY: 716 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Rectangle_74_2: {
    position: "absolute",
    width: 102.33000183105469,
    height: 48,
    borderRadius: 8,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.10000000149011612,
    shadowRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  style_____: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 31,
    // right: "auto",
    top: 14,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 16,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Rectangle_82: {
    position: "absolute",
    width: "100%",
    height: 9,
    borderRadius: 0,
    opacity: 0.15000000596046448,
    left: 0,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(200, 200, 200, 0.15000000596046448)",
  },
  style_Rectangle_83: {
    position: "absolute",
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(207, 87, 187, 1)",
  },
  style_Rectangle_84: {
    position: "absolute",
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    left: 63,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(207, 87, 187, 1)",
  },
  style_Rectangle_85: {
    position: "absolute",
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    left: 126,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(207, 87, 187, 1)",
  },
  style_Rectangle_86: {
    position: "absolute",
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    left: 190,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(207, 87, 187, 1)",
  },
  style_Rectangle_87: {
    position: "absolute",
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    left: 253,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(207, 87, 187, 1)",
  },
  style_Rectangle_88: {
    position: "absolute",
    width: 59,
    height: 9,
    borderRadius: 0,
    opacity: 1,
    left: 316,
    // right: "auto",
    top: 90,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(207, 87, 187, 1)",
  },
  style_Back2_1: {
    position: "absolute",
    width: 24,
    height: 24,
    borderRadius: 0,
    overflow: "hidden",
    left: 359,
    // right: "auto",
    top: 79,
    // bottom: "auto",
    transform: [
      { translateX: -24 },
      { translateY: -1.4695762231022014e-15 },
      { rotate: "-7.0167096047110005e-15deg" },
    ],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  style_Group: {
    position: "absolute",
    width: 24,
    height: 24,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "7.0167096047110005e-15deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_2: {
    position: "absolute",
    width: 24,
    height: 24,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "7.0167096047110005e-15deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_3: {
    position: "absolute",
    width: 24,
    height: 24,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "7.0167096047110005e-15deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_4: {
    position: "absolute",
    width: 24,
    height: 24,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "7.0167096047110005e-15deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Vector: {
    position: "absolute",
    color: "rgba(41, 32, 113, 1)",
    // width: "auto",
    height: 24,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "-7.0167096047110005e-15deg" },
    ],
  },
  style_Vector_2: {
    position: "absolute",
    color: "rgba(41, 32, 113, 1)",
    // width: "auto",
    height: 13.057499885559082,
    borderRadius: 0,
    left: -7.49951171875,
    right: 24.223901748657227,
    transform: [
      { translateX: 0 },
      { translateY: -5.4749755859375 },
      { rotate: "-7.0167096047110005e-15deg" },
    ],
  },
  style___________________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 266,
    // right: "auto",
    top: 123,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_510: {
    position: "absolute",
    width: 320,
    height: 75,
    transform: [{ translateX: 39 }, { translateY: 152 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_________________________________________________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(29, 161, 242, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style______________________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 185,
    // right: "auto",
    top: 29,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(29, 161, 242, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style______________________________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 108,
    // right: "auto",
    top: 58,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(29, 161, 242, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_511: {
    position: "absolute",
    width: 343,
    height: 65,
    transform: [{ translateX: 16 }, { translateY: 251 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style___________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 286,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Frame_459: {
    position: "absolute",
    width: 343,
    height: 38,
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 0,
    // right: "auto",
    top: 27,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  style_________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 287,
    // right: "auto",
    top: 12,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(131, 131, 131, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_512: {
    position: "absolute",
    width: 343,
    height: 65,
    transform: [{ translateX: 16 }, { translateY: 340 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style__________2: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 286,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Frame_459_2: {
    position: "absolute",
    width: 343,
    height: 38,
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 0,
    // right: "auto",
    top: 27,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  style_____________________________________________________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 90,
    // right: "auto",
    top: 12,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(131, 131, 131, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
});
const component_style_system___light___status_bar___default_stylesheet =
  StyleSheet.create({
    style_system___light___status_bar___default: {
      position: "absolute",
      width: "100%",
      height: 44,
      borderRadius: 0,
      backgroundColor: "rgba(0,0,0,0)",
    },
    style_Time: {
      position: "absolute",
      width: 54,
      // height: "auto",
      left: 21,
      // right: "auto",
      top: "50%",
      transform: [{ translateX: 0 }, { translateY: -8 }, { rotate: "0deg" }],
      fontFamily: "SF Pro Text",
      // fontWeight: 600,
      textDecorationLine: "none",
      fontSize: 15,
      color: "rgba(0, 0, 0, 1)",
      textAlign: "center",
      textAlignVertical: "top",
      letterSpacing: -0.30000001192092896,
    },
    style_Battery: {
      position: "absolute",
      width: 24.32803726196289,
      height: 11.333333015441895,
      transform: [
        { translateX: 336.33331298828125 },
        { translateY: 17.333343505859375 },
        { rotate: "0deg" },
      ],
      overflow: "hidden",
      backgroundColor: "rgba(0,0,0,0)",
    },
    style_Border: {
      position: "absolute",
      width: 22,
      height: 11.333333015441895,
      borderRadius: 2.6666667461395264,
      opacity: 0.3499999940395355,
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 1)",
      left: "auto",
      right: 2.3280372619628906,
      top: "50%",
      transform: [
        { translateX: 0 },
        { translateY: -5.666666507720947 },
        { rotate: "0deg" },
      ],
      backgroundColor: "rgba(0,0,0,0)",
    },
    style_Cap: {
      position: "absolute",
      color: "rgba(0, 0, 0, 1)",
      width: 1.328037977218628,
      height: 4,
      borderRadius: 0,
      left: "auto",
      right: -7.152557373046875e-7,
      top: "50%",
      transform: [
        { translateX: 0 },
        { translateY: -2.000000476837158 },
        { rotate: "0deg" },
      ],
    },
    style_Capacity: {
      position: "absolute",
      width: 18,
      height: 7.333333492279053,
      borderRadius: 1.3333333730697632,
      opacity: 1,
      left: "auto",
      right: 4.328037261962891,
      top: "50%",
      transform: [
        { translateX: 0 },
        { translateY: -3.6666665077209473 },
        { rotate: "0deg" },
      ],
      backgroundColor: "rgba(0, 0, 0, 1)",
    },
    style_Wifi: {
      position: "absolute",
      width: 15.33329963684082,
      height: 11,
      borderRadius: 0,
      transform: [
        { translateX: 316 },
        { translateY: 17.3306884765625 },
        { rotate: "0deg" },
      ],
    },
    style_Cellular_Connection: {
      position: "absolute",
      width: 17,
      height: 10.666666984558105,
      borderRadius: 0,
      transform: [
        { translateX: 294 },
        { translateY: 17.666656494140625 },
        { rotate: "0deg" },
      ],
    },
  });
