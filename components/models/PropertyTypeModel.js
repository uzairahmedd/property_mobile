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

export default function PropertyTypeModel() {
  let [fontsLoaded] = useFonts({});

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{ height: Dimensions.get("window").height }}
    >
      <View style={stylesheet.style_PropertyTypeModel}>
        <View style={stylesheet.style_Group_458}>
          <View style={stylesheet.style_Rectangle_68}></View>
          <View style={stylesheet.style_Frame_468}>
            <View
              style={[
                stylesheet.style_Clear,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_Clear,
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
                مسح
              </Text>
            </View>
          </View>
          <View
            style={[
              stylesheet.style_Title,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style_Title,
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
              نوع العقار
            </Text>
          </View>
          <View style={stylesheet.style_Frame_458}>
            <View
              style={[
                stylesheet.style_SelectedText,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_SelectedText,
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
                شقة
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_463}>
            <View
              style={[
                stylesheet.style____,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style____,
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
                أرض
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_467}>
            <View
              style={[
                stylesheet.style_Results,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_Results,
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
                اظهار النتائج
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_459}>
            <View
              style={[
                stylesheet.style_Text,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_Text,
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
                فيلا
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_464}>
            <View
              style={[
                stylesheet.style______,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style______,
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
                مزرعة
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_460}>
            <View
              style={[
                stylesheet.style_______,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_______,
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
                دوبلكس
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_465}>
            <View
              style={[
                stylesheet.style________,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style________,
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
                استراحة
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_461}>
            <View
              style={[
                stylesheet.style_____2,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_____2,
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
                قصر
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_466}>
            <View
              style={[
                stylesheet.style_______2,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_______2,
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
                شاليه
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_462}>
            <View
              style={[
                stylesheet.style_______3,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_______3,
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
                عمارة
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Polygon_1}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const stylesheet = StyleSheet.create({
  style_PropertyTypeModel: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 217,
    borderRadius: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(0,0,0,0)",
    left: 0,
    top: 0,
  },
  style_Group_458: {
    position: "absolute",
    width: 343,
    height: 217,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Rectangle_68: {
    position: "absolute",
    width: 343,
    height: 203,
    borderRadius: 8,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 14,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    shadowColor: "rgb(41, 32, 113)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15000000596046448,
    shadowRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  style_Frame_468: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(14, 14, 14, 1)",
    left: 275,
    // right: "auto",
    top: 175,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  style_Clear: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Title: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 264,
    // right: "auto",
    top: 30,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 16,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Frame_458: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    left: 277,
    // right: "auto",
    top: 63,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(29, 161, 242, 1)",
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  style_SelectedText: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Frame_463: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 278,
    // right: "auto",
    top: 109,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  style____: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Frame_467: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 16,
    // right: "auto",
    top: 175,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(41, 32, 113, 1)",
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  style_Results: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Frame_459: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 221,
    // right: "auto",
    top: 63,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  style_Text: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Frame_464: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 213,
    // right: "auto",
    top: 109,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  style______: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Frame_460: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 142,
    // right: "auto",
    top: 63,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  style_______: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Frame_465: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 136,
    // right: "auto",
    top: 109,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  style________: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Frame_461: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 82,
    // right: "auto",
    top: 63,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  style_____2: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Frame_466: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 70,
    // right: "auto",
    top: 109,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  style_______2: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Frame_462: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 17,
    // right: "auto",
    top: 63,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  style_______3: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Polygon_1: {
    position: "absolute",
    width: 29,
    height: 29,
    borderRadius: 2,
    left: 197,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
});
