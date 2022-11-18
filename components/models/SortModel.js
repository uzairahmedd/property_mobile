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

export default function SortModel() {
  let [fontsLoaded] = useFonts({});

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{ height: Dimensions.get("window").height }}
    >
      <View style={stylesheet.style_SortModel}>
        <View style={stylesheet.style_Group_458}>
          <View style={stylesheet.style_Rectangle_68}></View>
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
              رتب حسب
            </Text>
          </View>
          <View style={stylesheet.style_Frame_459}>
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
                الأحدث
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_464}>
            <View
              style={[
                stylesheet.style_________2,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_________2,
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
                اٌلأقدم
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_460}>
            <View
              style={[
                stylesheet.style____________________________,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style____________________________,
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
                المساحة - الأكبر إلى الأصغر
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_462}>
            <View
              style={[
                stylesheet.style___________________________,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style___________________________,
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
                البناء - الأجدد إلى الأقدم
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_461}>
            <View
              style={[
                stylesheet.style_____________________________2,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_____________________________2,
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
                المساحة - الأصغر إلى الأكبر
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Frame_463}>
            <View
              style={[
                stylesheet.style____________________________2,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style____________________________2,
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
                البناء - الأقدم إلى الأجدد
              </Text>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Rectangle_79}></View>
      </View>
    </ScrollView>
  );
}

const stylesheet = StyleSheet.create({
  style_SortModel: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 203,
    borderRadius: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(0,0,0,0)",
    left: 0,
    top: 0,
  },
  style_Group_458: {
    position: "absolute",
    width: "100%",
    height: 203,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Rectangle_68: {
    position: "absolute",
    width: "100%",
    height: 203,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 0,
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
  style________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 288,
    // right: "auto",
    top: 24,
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
  style_Frame_459: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 298,
    // right: "auto",
    top: 57,
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
  style_Frame_464: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 236,
    // right: "auto",
    top: 57,
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
  style_________2: {
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
    left: 45,
    // right: "auto",
    top: 99,
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
  style____________________________: {
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
    left: 80,
    // right: "auto",
    top: 141,
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
  style___________________________: {
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
    textAlign: "right",
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
    left: 204,
    // right: "auto",
    top: 99,
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
  style_____________________________2: {
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
  style_Frame_463: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 220,
    // right: "auto",
    top: 141,
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
  style____________________________2: {
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
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Rectangle_79: {
    position: "absolute",
    width: 64,
    height: 6,
    borderRadius: 8,
    opacity: 0.5,
    left: 155,
    // right: "auto",
    top: 7,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(200, 200, 200, 0.5)",
  },
});
