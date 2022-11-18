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

export default function DetailsScreen() {
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
      <View style={stylesheet.style_DetailsScreen}>
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
                    fill={"rgba(255, 255, 255, 1)"}
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
                    fill={"rgba(255, 255, 255, 1)"}
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
        <Component_style_Group_440
          variant="variant1"
          variant1_left={16}
          variant1_right={"auto"}
          variant1_top={50}
          variant1_bottom={"auto"}
          variant1_transform={[
            { translateX: 0 },
            { translateY: 0 },
            { rotate: "0deg" },
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
            فيلا إطلالة مميزة في حي سكني هادئ
          </Text>
        </View>
        <View style={stylesheet.style_Group_439}>
          <View
            style={[
              stylesheet.style______________________________________________,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style______________________________________________,
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
                      fill={"rgba(255, 255, 255, 1)"}
                    >
                      <Path
                        fillRule={"nonzero"}
                        d={
                          "M 5.171664714813232 0 C 2.3199480709628966 0 0 2.3199479486967154 0 5.171664442255539 C 0 6.11047363585822 0.42103432471652646 7.120165097792648 0.43867882735346886 7.162755275733726 C 0.5746631868530125 7.485527976850209 0.8429812299994842 7.986874977049233 1.0364623266299104 8.280747209829153 L 4.582399069340681 13.653498500936722 C 4.727509896346667 13.873750556102781 4.942286171466651 14 5.171664714813232 14 C 5.401043258159814 14 5.615819533279798 13.87375039290884 5.7609303602857835 13.653802549381554 L 9.30717115145741 8.280747209829153 C 9.500956477875302 7.986874977049233 9.768969856050443 7.485527976850209 9.904954215549987 7.162755275733726 C 9.92259871818693 7.120469313964586 10.343329429626465 6.1107778293643324 10.343329429626465 5.171664442255539 C 10.343329429626463 2.3199479486967154 8.023381358663569 0 5.171664714813232 0 Z M 9.34398074355613 6.926683707637029 C 9.22259873388016 7.215992693304726 8.972837628875773 7.682355264381645 8.799130543664914 7.945805934365821 L 5.252890332738443 13.318860693673098 C 5.182920750033448 13.42503192462044 5.160712728053873 13.42503192462044 5.0907431453488785 13.318860693673098 L 1.5445023541772518 7.945805934365821 C 1.3707952689663931 7.682355264381645 1.1210341639620067 7.2156886448598945 0.9996521542860352 6.926379659192198 C 0.9944804892901656 6.913906821075178 0.6084311429192039 5.984528385467114 0.6084311429192039 5.171664442255539 C 0.6084311429192039 2.6554976111722715 2.655497751122632 0.6084311108535928 5.171664714813232 0.6084311108535928 C 7.687831678503833 0.6084311108535928 9.734897706462107 2.6554976111722715 9.734897706462107 5.171664442255539 C 9.734897706462107 5.985745304552843 9.347935546066703 6.917557241178217 9.34398074355613 6.926683707637029 Z"
                        }
                        strokeLinejoin={"miter"}
                      />
                    </Svg>
                    <Svg
                      style={stylesheet.style_Vector_4}
                      fill={"rgba(255, 255, 255, 1)"}
                    >
                      <Path
                        fillRule={"nonzero"}
                        d={
                          "M 2.7379401247173014 0 C 1.2281183082634601 0 0 1.2284221884631277 0 2.7379397828907357 C 0 4.2474573773183435 1.2281183082634601 5.475880146026611 2.7379401247173014 5.475880146026611 C 4.2477619411711425 5.475880146026611 5.475879669189453 4.2474573773183435 5.475879669189453 2.7379397828907357 C 5.475879669189451 1.2284221884631277 4.2477619411711425 0 2.7379401247173014 0 Z M 2.7379401247173014 4.8674487285677515 C 1.5639722522165727 4.8674487285677515 0.608431138826067 3.912211826736293 0.608431138826067 2.7379397828907357 C 0.608431138826067 1.5636677390451785 1.5639722522165727 0.6084311273362901 2.7379401247173014 0.6084311273362901 C 3.91190799721803 0.6084311273362901 4.867449110608536 1.5636677390451785 4.867449110608536 2.7379397828907357 C 4.867449110608536 3.912211826736293 3.91190799721803 4.8674487285677515 2.7379401247173014 4.8674487285677515 Z"
                        }
                        strokeLinejoin={"miter"}
                      />
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            stylesheet.style_Desc,
            { display: "flex", flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Text
            style={[
              stylesheet.style_Desc,
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
            فيلا إطلالة مميزة في حي سكني هادئ
          </Text>
        </View>
        <View
          style={[
            stylesheet.style_Price,
            { display: "flex", flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Text
            style={[
              stylesheet.style_Price,
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
            4.5 مليون ر.س
          </Text>
        </View>
        <View style={stylesheet.style_Group_524}>
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
              وصف العقار
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_______________________________________________________________________________________________________________,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style_______________________________________________________________________________________________________________,
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
              شرح وصف العقار. هذا النص هو مثال لنص يمكن أن يستبدل في نفس
              المساحة، لقد تم توليد هذا النص من مولد النص العربى،
            </Text>
          </View>
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
              للبيع
            </Text>
          </View>
        </View>
        <View
          style={[
            stylesheet.style_Basic_Info,
            { display: "flex", flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Text
            style={[
              stylesheet.style_Basic_Info,
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
            المعلومات الأساسية
          </Text>
        </View>
        <View
          style={[
            stylesheet.style_Additional,
            { display: "flex", flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Text
            style={[
              stylesheet.style_Additional,
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
            المعلومات الإضافية
          </Text>
        </View>
        <View
          style={[
            stylesheet.style_Props,
            { display: "flex", flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Text
            style={[
              stylesheet.style_Props,
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
            مميزات العقار
          </Text>
        </View>
        <View style={stylesheet.style_Group_531}>
          <View style={stylesheet.style_Group_525}>
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
                طبيعة العقار
              </Text>
            </View>
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
                سكني
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Group_526}>
            <View
              style={[
                stylesheet.style____________2,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style____________2,
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
                شقة
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Group_527}>
            <View
              style={[
                stylesheet.style____________________,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style____________________,
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
                هل يوجد عداد كهرباء
              </Text>
            </View>
            <View
              style={[
                stylesheet.style___,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style___,
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
                لا
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Group_528}>
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
                هل يوجد عداد ماء
              </Text>
            </View>
            <View
              style={[
                stylesheet.style____2,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style____2,
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
                لا
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Group_529}>
            <View
              style={[
                stylesheet.style____________,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style____________,
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
                عدد الشوارع
              </Text>
            </View>
            <View
              style={[
                stylesheet.style_1,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_1,
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
                1
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Group_530}>
            <View
              style={[
                stylesheet.style_______________,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_______________,
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
                معلومات الشارع
              </Text>
            </View>
            <View
              style={[
                stylesheet.style______8_________________,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style______8_________________,
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
                شارع 8متر , واجهة شرقية
              </Text>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_530_2}>
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
              إجمالي الأدوار/ الدور
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_5_____________________,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style_5_____________________,
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
              5 أدوار , الدور الثالث
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Group_525_2}>
          <View
            style={[
              stylesheet.style__________,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style__________,
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
              غرف النوم
            </Text>
          </View>
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
              استديو
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_460}>
          <View
            style={[
              stylesheet.style___________2,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style___________2,
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
              غرف ملابس
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_461}>
          <View
            style={[
              stylesheet.style____________3,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style____________3,
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
              غرفة أطفال
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Frame_462}>
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
              مسبح خاص
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Group_526_2}>
          <View
            style={[
              stylesheet.style______________2,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style______________2,
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
              دورات المياه
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_1_2,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style_1_2,
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
              1
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Group_527_2}>
          <View
            style={[
              stylesheet.style________2,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style________2,
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
              صاللات
            </Text>
          </View>
          <View
            style={[
              stylesheet.style___________3,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style___________3,
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
              غير متوفر
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Group_528_2}>
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
              مجالس
            </Text>
          </View>
          <View
            style={[
              stylesheet.style___________4,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style___________4,
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
              غير متوفر
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Group_529_2}>
          <View
            style={[
              stylesheet.style_____________2,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style_____________2,
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
              عدد المواقف
            </Text>
          </View>
          <View
            style={[
              stylesheet.style_1_3,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style_1_3,
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
              1
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Group_530_3}>
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
              التأثيث
            </Text>
          </View>
          <View
            style={[
              stylesheet.style___________5,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style___________5,
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
              غير متوفر
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Group_464}>
          <View
            style={[
              stylesheet.style_______________________________________________2,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style_______________________________________________2,
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
              جدة - الطريق السريع - بالقرب من مسجد الهداي..
            </Text>
          </View>
          <View style={stylesheet.style_Location_1_2}>
            <View style={stylesheet.style_Group_9}>
              <View style={stylesheet.style_Group_10}>
                <View style={stylesheet.style_Group_11}>
                  <View style={stylesheet.style_Group_12}>
                    <Svg
                      style={stylesheet.style_Vector_5}
                      fill={"rgba(29, 161, 242, 1)"}
                    >
                      <Path
                        fillRule={"nonzero"}
                        d={
                          "M 5.171664714813232 0 C 2.3199480709628966 0 0 2.3199479486967154 0 5.171664442255539 C 0 6.11047363585822 0.42103432471652646 7.120165097792648 0.43867882735346886 7.162755275733726 C 0.5746631868530125 7.485527976850209 0.8429812299994842 7.986874977049233 1.0364623266299104 8.280747209829153 L 4.582399069340681 13.653498500936722 C 4.727509896346667 13.873750556102781 4.942286171466651 14 5.171664714813232 14 C 5.401043258159814 14 5.615819533279798 13.87375039290884 5.7609303602857835 13.653802549381554 L 9.30717115145741 8.280747209829153 C 9.500956477875302 7.986874977049233 9.768969856050443 7.485527976850209 9.904954215549987 7.162755275733726 C 9.92259871818693 7.120469313964586 10.343329429626465 6.1107778293643324 10.343329429626465 5.171664442255539 C 10.343329429626463 2.3199479486967154 8.023381358663569 0 5.171664714813232 0 Z M 9.34398074355613 6.926683707637029 C 9.22259873388016 7.215992693304726 8.972837628875773 7.682355264381645 8.799130543664914 7.945805934365821 L 5.252890332738443 13.318860693673098 C 5.182920750033448 13.42503192462044 5.160712728053873 13.42503192462044 5.0907431453488785 13.318860693673098 L 1.5445023541772518 7.945805934365821 C 1.3707952689663931 7.682355264381645 1.1210341639620067 7.2156886448598945 0.9996521542860352 6.926379659192198 C 0.9944804892901656 6.913906821075178 0.6084311429192039 5.984528385467114 0.6084311429192039 5.171664442255539 C 0.6084311429192039 2.6554976111722715 2.655497751122632 0.6084311108535928 5.171664714813232 0.6084311108535928 C 7.687831678503833 0.6084311108535928 9.734897706462107 2.6554976111722715 9.734897706462107 5.171664442255539 C 9.734897706462107 5.985745304552843 9.347935546066703 6.917557241178217 9.34398074355613 6.926683707637029 Z"
                        }
                        strokeLinejoin={"miter"}
                      />
                    </Svg>
                    <Svg
                      style={stylesheet.style_Vector_6}
                      fill={"rgba(29, 161, 242, 1)"}
                    >
                      <Path
                        fillRule={"nonzero"}
                        d={
                          "M 2.7379401247173014 0 C 1.2281183082634601 0 0 1.2284221884631277 0 2.7379397828907357 C 0 4.2474573773183435 1.2281183082634601 5.475880146026611 2.7379401247173014 5.475880146026611 C 4.2477619411711425 5.475880146026611 5.475879669189453 4.2474573773183435 5.475879669189453 2.7379397828907357 C 5.475879669189451 1.2284221884631277 4.2477619411711425 0 2.7379401247173014 0 Z M 2.7379401247173014 4.8674487285677515 C 1.5639722522165727 4.8674487285677515 0.608431138826067 3.912211826736293 0.608431138826067 2.7379397828907357 C 0.608431138826067 1.5636677390451785 1.5639722522165727 0.6084311273362901 2.7379401247173014 0.6084311273362901 C 3.91190799721803 0.6084311273362901 4.867449110608536 1.5636677390451785 4.867449110608536 2.7379397828907357 C 4.867449110608536 3.912211826736293 3.91190799721803 4.8674487285677515 2.7379401247173014 4.8674487285677515 Z"
                        }
                        strokeLinejoin={"miter"}
                      />
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Group_454}>
          <View style={stylesheet.style_Group_451}>
            <View
              style={[
                stylesheet.style_512__2,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_512__2,
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
                512 م2
              </Text>
            </View>
            <View style={stylesheet.style_area_1}>
              <View style={stylesheet.style_Group_13}>
                <Svg
                  style={stylesheet.style_Vector_7}
                  fill={"rgba(14, 14, 14, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 11.488859832286835 0 L 0.328125 0 C 0.24110083607956767 0 0.15764070977456868 0.034570279133318504 0.09610533714294434 0.09610565478670846 C 0.034569964511319995 0.15764103044009842 0 0.24110084791910297 0 0.32812501611295747 C 0 0.41514918430681197 0.034569964511319995 0.4986090017858166 0.09610533714294434 0.5601443774392065 C 0.15764070977456868 0.6216797530925965 0.24110083607956767 0.6562500322259149 0.328125 0.6562500322259149 L 11.488859832286835 0.6562500322259149 C 11.808698183856905 0.6565782987840905 12.11534614674747 0.7837680357750474 12.341521203517914 1.009912965120762 C 12.567696260288358 1.2360578944664764 12.694926347125147 1.542687703242344 12.695297241210938 1.8625260314028957 L 12.695297241210938 13.023584349731768 C 12.695297241210938 13.110608517925623 12.729867205722257 13.194067396631427 12.791402578353882 13.255602772284817 C 12.852937950985506 13.317138147938207 12.936398077290505 13.351709365844727 13.023422241210938 13.351709365844727 C 13.11044640513137 13.351709365844727 13.193906531436369 13.317138147938207 13.255441904067993 13.255602772284817 C 13.316977276699618 13.194067396631427 13.351547241210938 13.110608517925623 13.351547241210938 13.023584349731768 L 13.351547241210938 1.8625260314028957 C 13.35094973944797 1.3687089534181822 13.154505640268326 0.8952910259424767 12.805308938026428 0.5461244255264135 C 12.45611223578453 0.19695782511035026 11.982676964253187 0.0005548752396491733 11.488859832286835 0 L 11.488859832286835 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_8}
                  fill={"rgba(14, 14, 14, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 16.742812256140787 14.746068621119036 C 16.712346339906887 14.715602703626459 16.676178537720446 14.691436455234617 16.636372898925835 14.674948417885641 C 16.596567260131224 14.658460380536665 16.553902929814353 14.64997329798328 16.510817615945484 14.649973296621347 C 16.467732302076616 14.649973295259413 16.425069223457342 14.658460382981387 16.38526358466273 14.674948417885641 C 16.34545794586812 14.691436452789896 16.309290146126404 14.715602703626459 16.27882422744778 14.746068621119036 C 16.24835830876916 14.776534538611614 16.224190805294196 14.812702336945312 16.20770276974806 14.852507974190281 C 16.191214734201925 14.89231361143525 16.182728897847145 14.93497794009119 16.182728899209078 14.97806325228274 C 16.18272890057101 15.021148564474288 16.191214731757203 15.063811641432675 16.20770276974806 15.103617278677644 C 16.224190807738918 15.143422915922613 16.24835830876916 15.179590716701034 16.27882422744778 15.21005663174889 L 17.2532270005596 16.18433920396196 L 3.3954312665467055 16.18433920396196 C 3.0756430455481802 16.183944043105768 2.769068076910012 16.056722849387178 2.542958547237787 15.830583189987316 C 2.3168490175655623 15.604443530587453 2.1896683324431883 15.297851519505162 2.189315798124251 14.97806325228274 L 2.189315798124251 1.1202679012946377 L 3.163436939275802 2.094510419186031 C 3.2249656359216203 2.1560391085470805 3.3084165545758255 2.1906057453989876 3.3954312665467055 2.19060574368372 C 3.4824459785175854 2.190605741968453 3.5658969020612337 2.1560391085470805 3.6274255938176085 2.094510419186031 C 3.6889542855739834 2.0329817298249813 3.7235206074166425 1.949530809530095 3.7235206091319095 1.8625161009467168 C 3.7235206108471774 1.7755013923633387 3.6889542855739834 1.6920507898822839 3.6274255938176085 1.630522095631791 L 2.093185109428316 0.0961308414157405 C 2.0627249187330525 0.06565471476500111 2.026558422028096 0.04147880727739807 1.986752010701371 0.024984352533743634 C 1.9469455993746456 0.008489897790089199 1.9042792643858348 0 1.8611907821574125 0 C 1.8181022999289902 0 1.7754359649401794 0.008489897790089199 1.735629553613454 0.024984352533743634 C 1.6958231422867287 0.04147880727739807 1.659656958506173 0.06565471476500111 1.6291967678109096 0.0961308414157405 L 0.09464464983446996 1.630522095631791 C 0.03375445098024075 1.6921808881966431 -0.0002692177407632236 1.7754252637270422 0.000001604461537766618 1.8620817618960122 C 0.0002724266638387568 1.948738260064982 0.03481564607386371 2.0317683068367396 0.09609004763944626 2.093045307200873 C 0.1573644492050288 2.154322307565006 0.24039319861712566 2.1888692617554293 0.32704969038076437 2.1891437609424433 C 0.4137061821444031 2.1894182601294574 0.49695189573366905 2.1553979998174846 0.5586132772146576 2.094510419186031 L 1.5330657661905742 1.1201892008110266 L 1.5330657661905742 14.97806325228274 C 1.5335903072827237 15.471847062606905 1.7299667563190118 15.945257852411698 2.0791097699029133 16.29443101049129 C 2.4282527834868146 16.643604168570885 2.901647476114978 16.840022041922797 3.3954312665467055 16.84058921034768 L 17.2532270005596 16.84058921034768 L 16.27882422744778 17.81488054444362 C 16.248044269575686 17.84527681914679 16.223578684829302 17.88146082354118 16.206836595008035 17.92134868655857 C 16.190094505186767 17.96123654957596 16.18140586544478 18.004040735875613 16.18127067150369 18.047299501077607 C 16.1811354775626 18.0905582662796 16.18955683017012 18.133417551718782 16.206049277216884 18.17340928118581 C 16.22254172426365 18.213401010652834 16.246780387480655 18.249736211310566 16.277369754835195 18.280324279326987 C 16.307959122189736 18.310912347343407 16.34429483031943 18.335148997610773 16.384287260533803 18.351639747378567 C 16.424279690748175 18.36813049714636 16.46713828355486 18.37654912313151 16.510397045551482 18.376412093639363 C 16.553655807548104 18.376275064147215 16.59646071181764 18.367584946479425 16.63634786497381 18.350841164340096 C 16.67623501812998 18.334097382200767 16.71241728818049 18.309631024652393 16.742812256140787 18.278849779610187 L 18.277364726157177 16.744458838318522 C 18.30784085399436 16.71399864880908 18.332016762423134 16.677832153512096 18.34851121780892 16.638025743735042 C 18.365005673194705 16.59821933395799 18.37349510192871 16.5555526877058 18.37349510192871 16.51246420715482 C 18.37349510192871 16.469375726603843 18.365005673194705 16.426709080351653 18.34851121780892 16.3869026705746 C 18.332016762423134 16.347096260797546 18.30784085399436 16.31092976550056 18.277364726157177 16.28046957599112 L 16.742812256140787 14.746068621119036 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_9}
                  fill={"rgba(14, 14, 14, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.32812499371225595 1.1966986351071026e-8 C 0.285031732530577 -0.000011627928624948162 0.24235803937847222 0.008468153093883667 0.20254282730867335 0.02495385428086447 C 0.16272761523887447 0.04143955546784528 0.1265512247533679 0.06560814678783984 0.09607968528111428 0.0960796867147779 C 0.06560814580886067 0.12655122664171595 0.04143892900074224 0.1627282435158 0.02495322805975464 0.20254345617970596 C 0.008467527118767037 0.2423586688436119 -0.000011627927570145725 0.2850317367837094 1.1967867467524382e-8 0.3281249986084092 L 1.1967867467524382e-8 6.699000717601013 C 1.1967867467524382e-8 6.786024881152373 0.03456997362775476 6.869483755405879 0.09610534508019838 6.93101912777653 C 0.157640716532642 6.992554500147181 0.2411008314594371 7.027125716209422 0.32812499371225595 7.027125716209422 C 0.41514915596507485 7.027125716209422 0.4986086548219986 6.992554500147181 0.5601440262744423 6.93101912777653 C 0.6216793977268859 6.869483755405879 0.6562499874245119 6.786024881152373 0.6562499874245119 6.699000717601013 L 0.6562499874245119 1.9524065769362906 C 0.6567447498225012 1.670794071994322 0.7689616132323143 1.4008848412154966 0.9682668857995371 1.2019294151353437 C 1.16757215836676 1.0029739890551908 1.4376780776481268 0.8912311754576199 1.7192910282167784 0.8912311754576199 C 2.00090397878543 0.8912311754576199 2.2710098980667968 1.0029739890551908 2.4703151706340196 1.2019294151353437 C 2.6696204432012425 1.4008848412154966 2.7818379324598133 1.670794071994322 2.7823326948578027 1.9524065769362906 L 2.7823326948578027 6.699003220996083 C 2.7823326948578027 6.786027384547443 2.816902658706671 6.869487510498484 2.8784380301591144 6.931022882869135 C 2.939973401611558 6.992558255239786 3.02343352631724 7.027128219604492 3.1104576885700586 7.027128219604492 C 3.1974818508228773 7.027128219604492 3.2809413496798014 6.992558255239786 3.342476721132245 6.931022882869135 C 3.4040120925846886 6.869487510498484 3.438582682282315 6.786027384547443 3.438582682282315 6.699003220996083 L 3.438582682282315 1.9524065769362906 C 3.4390774446803043 1.670794071994322 3.551294308090117 1.4008848412154966 3.75059958065734 1.2019294151353437 C 3.9499048532245626 1.0029739890551908 4.220011398354688 0.8912311754576199 4.50162434892334 0.8912311754576199 C 4.783237299491991 0.8912311754576199 5.0533425929246 1.0029739890551908 5.252647865491823 1.2019294151353437 C 5.451953138059046 1.4008848412154966 5.564170001468859 1.670794071994322 5.564664763866848 1.9524065769362906 L 5.564664763866848 6.699003220996083 C 5.564664763866848 6.786027384547443 5.599234727715715 6.869487510498484 5.660770099168159 6.931022882869135 C 5.722305470620603 6.992558255239786 5.805765595326284 7.027128219604492 5.892789757579103 7.027128219604492 C 5.979813919831922 7.027128219604492 6.063274044537604 6.992558255239786 6.124809415990048 6.931022882869135 C 6.186344787442492 6.869487510498484 6.220914751291359 6.786027384547443 6.220914751291359 6.699003220996083 L 6.220914751291359 1.9524065769362906 C 6.221761502887832 1.5887444380346747 6.107005974598087 1.2342231919799171 5.893219089827193 0.9400361140438186 C 5.679432205056299 0.64584903610772 5.3776789525060815 0.42722068964925664 5.031530492447828 0.31572132144335135 C 4.685382032389575 0.20422195323744607 4.312753402871935 0.20562174223702745 3.9674524202633092 0.31971861752129305 C 3.6221514376546837 0.43381549280555864 3.322047687737661 0.6547046983787962 3.1104770898815612 0.9504896660071599 C 2.976409529110583 0.7608518177040366 2.8048446898239217 0.6007504228170164 2.6064028538496595 0.48009609972475814 C 2.4079610178753974 0.3594417766324999 2.186866331848886 0.28080274953626644 1.95680501287551 0.2490471488478537 C 1.726743693902134 0.21729154815944096 1.4926127542633485 0.23309542745215314 1.2689058537514193 0.2954801206052754 C 1.04519895323949 0.3578648137583976 0.8366774318597696 0.46550247015450513 0.6562499874245119 0.6117302451416056 L 0.6562499874245119 0.3281249986084092 C 0.6562611960127864 0.2850318541303533 0.6477813736269441 0.24235909911463954 0.6312955198908495 0.20254408202847346 C 0.614809666154755 0.16272906494230738 0.5906405141317619 0.12655239277398975 0.5601690602247682 0.09608093841231288 C 0.5296976063177745 0.065609484050636 0.49352094446815786 0.041440334111722016 0.45370592797609594 0.024954480129631956 C 0.413890911484034 0.008468626147541899 0.37121813754729277 -0.000011196621455466005 0.32812499371225595 1.1966986351071026e-8 L 0.32812499371225595 1.1966986351071026e-8 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_10}
                  fill={"rgba(14, 14, 14, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 2.360962220173457 2.0097432128787607 C 2.5046415293951716 1.7982889477052988 2.5815528696353907 1.5485810628045982 2.5817441418767024 1.29293166269665 C 2.5820146883080697 1.1232388020249142 2.5488253963198604 0.9551574433579372 2.4840741830902666 0.7983039491933785 C 2.419322969860673 0.6414504550288199 2.324280294867049 0.49890269112629326 2.2043848719162122 0.3788159563856884 C 2.0844894489653756 0.2587292216450835 1.9420941271652232 0.16346005684981296 1.785344073984579 0.09845884724525727 C 1.6285940208039347 0.033457637640701574 1.4605653709491506 0 1.2908723056316393 0 C 1.121179240314128 0 0.9531517639257845 0.033457637640701574 0.7964017107451402 0.09845884724525727 C 0.6396516575644959 0.16346005684981296 0.49725508406680674 0.2587292216450835 0.37735966111597025 0.3788159563856884 C 0.25746423816513375 0.49890269112629326 0.16242281486904614 0.6414504550288199 0.0976716016394525 0.7983039491933785 C 0.03292038840985885 0.9551574433579372 -0.00026890563660788295 1.1232388020249142 0.0000016407947593221994 1.29293166269665 C 0.000001640794756990731 1.3799558317454304 0.03457160726457248 1.4634153371199412 0.09610697971861379 1.524950713377855 C 0.1576423521726551 1.5864860896357689 0.2411024782367991 1.6210566820331094 0.3281266419060911 1.6210566820331094 C 0.4151508055753831 1.6210566820331094 0.49860967994199035 1.5864860896357689 0.5601450523960316 1.524950713377855 C 0.6216804248500729 1.4634153371199412 0.6562516409591652 1.3799558317454304 0.6562516409591652 1.29293166269665 C 0.6560618625765392 1.20947053891624 0.6723363674633631 1.126791139411352 0.7041440921072698 1.049628558024821 C 0.7359518167511765 0.97246597663829 0.7826678360111676 0.9023355497941206 0.8416167808623055 0.8432524105137683 C 0.9005657257134434 0.7841692712334161 0.9705899397306645 0.7372940536847833 1.0476799912318369 0.7053109525042563 C 1.1247700427330092 0.6733278513237294 1.2074109718749502 0.6568652480502222 1.2908723056316393 0.6568652480502222 C 1.3743336393883285 0.6568652480502222 1.45697574199671 0.6733278513237294 1.5340657934978823 0.7053109525042563 C 1.6111558449990546 0.7372940536847833 1.681180059016276 0.7841692712334161 1.7401290038674138 0.8432524105137683 C 1.7990779487185515 0.9023355497941206 1.845793967978543 0.97246597663829 1.8776016926224495 1.049628558024821 C 1.909409417266356 1.126791139411352 1.9256839221531799 1.20947053891624 1.925494143770554 1.29293166269665 C 1.9257644925996458 1.4129400098741753 1.8908987689211154 1.530402276979192 1.825196871854646 1.630828059457159 L 0.29031661441587114 3.2783437515047784 C 0.22958074909504791 3.3431932807836193 0.18911993914654301 3.4243788329700253 0.17391124690054446 3.5119174106226283 C 0.1587025546545459 3.5994559882752313 0.1694083334645797 3.689531263157681 0.20471176818540698 3.7710663812394722 C 0.24001520290623427 3.8526014993212634 0.2983778301397553 3.922041698051831 0.3726219859396706 3.9708485857197307 C 0.44686614173958594 4.019655473387631 0.5337548873816294 4.045700861247258 0.622604759475913 4.045782089233398 L 2.223175355336717 4.045782089233398 C 2.3101995190060087 4.045782089233398 2.393659645070153 4.0112121226848645 2.4551950175241943 3.9496767464269507 C 2.516730389978236 3.888141370169037 2.551300354389791 3.804681238945719 2.551300354389791 3.717657069896939 C 2.551300354389791 3.6306329008481586 2.516730389978236 3.547173395473648 2.4551950175241943 3.485638019215734 C 2.393659645070153 3.4241026429578203 2.3101995190060087 3.3895320505604793 2.223175355336717 3.3895320505604793 L 1.0869157022163252 3.3895320505604793 L 2.2625875556738757 2.139198786913848 C 2.2712500556019384 2.1299062865054905 2.360962220173457 2.0097432128787607 2.360962220173457 2.0097432128787607 L 2.360962220173457 2.0097432128787607 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
              </View>
            </View>
          </View>
          <View style={stylesheet.style_Group_452}>
            <View
              style={[
                stylesheet.style_6____,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_6____,
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
                6 غرف
              </Text>
            </View>
            <View style={stylesheet.style_Beds_1}>
              <View style={stylesheet.style_Group_14}>
                <View style={stylesheet.style_Group_15}>
                  <View style={stylesheet.style_Group_16}>
                    <Svg
                      style={stylesheet.style_Vector_11}
                      fill={"rgba(14, 14, 14, 1)"}
                    >
                      <Path
                        fillRule={"nonzero"}
                        d={
                          "M 21.08334732055664 8.25043713535542 L 21.08334732055664 6.41708920001769 C 21.08334732055664 5.023741654818396 20.185000583529472 4.125436571661116 18.791695952415466 4.125436571661116 L 8.25 4.125436571661116 C 6.856652423739433 4.125436571661116 5.958347976207733 5.023784599963999 5.958347976207733 6.41708920001769 L 5.958347976207733 8.236084933259901 L 1.4987500458955765 8.245838398694938 L 0.9166523516178131 8.245838398694938 L 0.9166523516178131 0.47249130223899877 C 0.9166523516178131 0.24333895572957623 0.7516523450613022 0.03708907410592717 0.5270546786487103 0.004991419472986051 C 0.24290233850479126 -0.03625857868543688 0 0.1837413176911753 0 0.4587413156585429 L 0 15.569990049404824 C 0 15.799142395914247 0.16500000655651093 16.005392594158458 0.38959767296910286 16.0374902487914 C 0.6737500131130219 16.078740246949824 0.9166952967643738 15.858740361778185 0.9166952967643738 15.583740363810819 L 0.9166952967643738 12.833740425115336 L 21.08334732055664 12.833740425115336 L 21.08334732055664 15.569990049404824 C 21.08334732055664 15.799142395914247 21.248348023742437 16.005392594158458 21.47294569015503 16.0374902487914 C 21.75709803029895 16.078740246949824 22 15.858740361778185 22 15.583740363810819 L 22 9.167088483062097 C 22 8.543740842019409 21.706651989370584 8.2549918227001 21.08334732055664 8.25043713535542 Z M 6.875 6.41708920001769 C 6.875 5.220839220128644 7.736652363091707 5.042089230669949 8.25 5.042089230669949 L 18.79165267944336 5.042089230669949 C 19.305000316351652 5.042089230669949 20.16665267944336 5.220839220128644 20.16665267944336 6.41708920001769 L 20.16665267944336 8.25043713535542 L 6.875 8.25043713535542 L 6.875 6.41708920001769 Z M 21.083304047584534 11.917087766106503 L 0.9166523516178131 11.917087766106503 L 0.9166523516178131 9.167088483062097 L 21.083304047584534 9.167088483062097 L 21.083304047584534 11.917087766106503 L 21.083304047584534 11.917087766106503 Z"
                        }
                        strokeLinejoin={"miter"}
                      />
                    </Svg>
                  </View>
                </View>
                <View style={stylesheet.style_Group_17}>
                  <View style={stylesheet.style_Group_18}>
                    <Svg
                      style={stylesheet.style_Vector_12}
                      fill={"rgba(14, 14, 14, 1)"}
                    >
                      <Path
                        fillRule={"nonzero"}
                        d={
                          "M 2.5458984375 0 C 1.1398320496082306 0 0 1.1398320496082306 0 2.5458984375 C 0 3.9519648253917694 1.1398320496082306 5.091796875 2.5458984375 5.091796875 C 3.9519648253917694 5.091796875 5.091796875 3.9519648253917694 5.091796875 2.5458984375 C 5.091796875 1.1398320496082306 3.9519648253917694 0 2.5458984375 0 Z M 2.5458984375 4.275390625 C 1.5907460898160934 4.275390625 0.81640625 3.5010507851839066 0.81640625 2.5458984375 C 0.81640625 1.5907460898160934 1.5907460898160934 0.81640625 2.5458984375 0.81640625 C 3.5010507851839066 0.81640625 4.275390625 1.5907460898160934 4.275390625 2.5458984375 C 4.275390625 3.5010507851839066 3.5010937303304672 4.275390625 2.5458984375 4.275390625 Z"
                        }
                        strokeLinejoin={"miter"}
                      />
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={stylesheet.style_Group_453}>
            <View
              style={[
                stylesheet.style_2_____,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet.style_2_____,
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
                2 حمام
              </Text>
            </View>
            <View style={stylesheet.style_Bathroom_1}>
              <View style={stylesheet.style_Group_19}>
                <Svg
                  style={stylesheet.style_Vector_13}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418025687336922 0 0 0.14434814453125 0 0.322265625 L 0 0.7291259765625 C 0 0.90704345703125 0.14418025687336922 1.0513916015625 0.322265625 1.0513916015625 C 0.50018310546875 1.0513916015625 0.64453125 0.9072112832218409 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434814453125 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_14}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14434818550944328 0 0 0.14434814453125 0 0.322265625 L 0 0.7291259765625 C 0 0.90704345703125 0.14434818550944328 1.0513916015625 0.322265625 1.0513916015625 C 0.5003509931266308 1.0513916015625 0.64453125 0.9072112832218409 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434814453125 0.5003509931266308 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_15}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418025687336922 0 0 0.14434814453125 0 0.322265625 L 0 0.7291259765625 C 0 0.90704345703125 0.14418025687336922 1.0513916015625 0.322265625 1.0513916015625 C 0.5001830644905567 1.0513916015625 0.64453125 0.9072112832218409 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434814453125 0.5001830644905567 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_16}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14434814453125 0 0 0.14434814453125 0 0.322265625 L 0 0.7291259765625 C 0 0.90704345703125 0.14434814453125 1.0513916015625 0.322265625 1.0513916015625 C 0.5003509931266308 1.0513916015625 0.64453125 0.9072112832218409 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434814453125 0.5003509931266308 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_17}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418031834065914 0 0 0.14434814453125 0 0.322265625 L 0 0.7291259765625 C 0 0.90704345703125 0.14418031834065914 1.0513916015625 0.322265625 1.0513916015625 C 0.50018310546875 1.0513916015625 0.64453125 0.9072112832218409 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434814453125 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_18}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418031834065914 0 0 0.14434818550944328 0 0.322265625 L 0 0.7291259765625 C 0 0.9072113446891308 0.14418031834065914 1.0513916015625 0.322265625 1.0513916015625 C 0.50018310546875 1.0513916015625 0.64453125 0.9072113446891308 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434818550944328 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_19}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418031834065914 0 0 0.14434818550944328 0 0.322265625 L 0 0.7291259765625 C 0 0.9072113446891308 0.14418031834065914 1.0513916015625 0.322265625 1.0513916015625 C 0.50018310546875 1.0513916015625 0.64453125 0.9072113446891308 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434818550944328 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_20}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14434814453125 0 0 0.14434818550944328 0 0.322265625 L 0 0.7291259765625 C 0 0.9072113446891308 0.14434814453125 1.0513916015625 0.322265625 1.0513916015625 C 0.5003509316593409 1.0513916015625 0.64453125 0.9072113446891308 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434818550944328 0.5003509316593409 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_21}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418031834065914 0 0 0.14434818550944328 0 0.322265625 L 0 0.7291259765625 C 0 0.9072113446891308 0.14418031834065914 1.0513916015625 0.322265625 1.0513916015625 C 0.50018310546875 1.0513916015625 0.64453125 0.9072113446891308 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434818550944328 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_22}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418025687336922 0 0 0.14418031834065914 0 0.322265625 L 0 0.7289581298828125 C 0 0.9070434980094433 0.14418025687336922 1.0512237548828125 0.322265625 1.0512237548828125 C 0.50018310546875 1.0512237548828125 0.64453125 0.9070434980094433 0.64453125 0.7289581298828125 L 0.64453125 0.322265625 C 0.64453125 0.14418031834065914 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_23}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14434818550944328 0 0 0.14418031834065914 0 0.322265625 L 0 0.7289581298828125 C 0 0.9070434980094433 0.14434818550944328 1.0512237548828125 0.322265625 1.0512237548828125 C 0.5003509931266308 1.0512237548828125 0.64453125 0.9070434980094433 0.64453125 0.7289581298828125 L 0.64453125 0.322265625 C 0.64453125 0.14418031834065914 0.5003509931266308 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_24}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418025687336922 0 0 0.14418031834065914 0 0.322265625 L 0 0.7289581298828125 C 0 0.9070434980094433 0.14418025687336922 1.0512237548828125 0.322265625 1.0512237548828125 C 0.5001830644905567 1.0512237548828125 0.64453125 0.9070434980094433 0.64453125 0.7289581298828125 L 0.64453125 0.322265625 C 0.64453125 0.14418031834065914 0.5001830644905567 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_25}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14434814453125 0 0 0.14418031834065914 0 0.322265625 L 0 0.7289581298828125 C 0 0.9070434980094433 0.14434814453125 1.0512237548828125 0.322265625 1.0512237548828125 C 0.5003509931266308 1.0512237548828125 0.64453125 0.9070434980094433 0.64453125 0.7289581298828125 L 0.64453125 0.322265625 C 0.64453125 0.14418031834065914 0.5003509931266308 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_26}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418031834065914 0 0 0.14418031834065914 0 0.322265625 L 0 0.7289581298828125 C 0 0.9070434980094433 0.14418031834065914 1.0512237548828125 0.322265625 1.0512237548828125 C 0.50018310546875 1.0512237548828125 0.64453125 0.9070434980094433 0.64453125 0.7289581298828125 L 0.64453125 0.322265625 C 0.64453125 0.14418031834065914 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_27}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418031834065914 0 0 0.14418025687336922 0 0.322265625 L 0 0.7289581298828125 C 0 0.9070434365421534 0.14418031834065914 1.0512237548828125 0.322265625 1.0512237548828125 C 0.50018310546875 1.0512237548828125 0.64453125 0.9070434365421534 0.64453125 0.7289581298828125 L 0.64453125 0.322265625 C 0.64453125 0.14418025687336922 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_28}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418031834065914 0 0 0.14418025687336922 0 0.322265625 L 0 0.7289581298828125 C 0 0.9070434365421534 0.14418031834065914 1.0512237548828125 0.322265625 1.0512237548828125 C 0.50018310546875 1.0512237548828125 0.64453125 0.9070434365421534 0.64453125 0.7289581298828125 L 0.64453125 0.322265625 C 0.64453125 0.14418025687336922 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_29}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14434814453125 0 0 0.14418025687336922 0 0.322265625 L 0 0.7289581298828125 C 0 0.9070434365421534 0.14434814453125 1.0512237548828125 0.322265625 1.0512237548828125 C 0.5003509316593409 1.0512237548828125 0.64453125 0.9070434365421534 0.64453125 0.7289581298828125 L 0.64453125 0.322265625 C 0.64453125 0.14418025687336922 0.5003509316593409 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_30}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418031834065914 0 0 0.14418025687336922 0 0.322265625 L 0 0.7289581298828125 C 0 0.9070434365421534 0.14418031834065914 1.0512237548828125 0.322265625 1.0512237548828125 C 0.50018310546875 1.0512237548828125 0.64453125 0.9070434365421534 0.64453125 0.7289581298828125 L 0.64453125 0.322265625 C 0.64453125 0.14418025687336922 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_31}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418025687336922 0 0 0.14434810355305672 0 0.322265625 L 0 0.7291259765625 C 0 0.9070434160530567 0.14418025687336922 1.0513916015625 0.322265625 1.0513916015625 C 0.50018310546875 1.0513916015625 0.64453125 0.9070434160530567 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434810355305672 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_32}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14434818550944328 0 0 0.14434810355305672 0 0.322265625 L 0 0.7291259765625 C 0 0.9070434160530567 0.14434818550944328 1.0513916015625 0.322265625 1.0513916015625 C 0.5003509931266308 1.0513916015625 0.64453125 0.9070434160530567 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434810355305672 0.5003509931266308 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_33}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418025687336922 0 0 0.14434810355305672 0 0.322265625 L 0 0.7291259765625 C 0 0.9070434160530567 0.14418025687336922 1.0513916015625 0.322265625 1.0513916015625 C 0.5001830644905567 1.0513916015625 0.64453125 0.9070434160530567 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434810355305672 0.5001830644905567 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_34}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14434814453125 0 0 0.14434810355305672 0 0.322265625 L 0 0.7291259765625 C 0 0.9070434160530567 0.14434814453125 1.0513916015625 0.322265625 1.0513916015625 C 0.5003509931266308 1.0513916015625 0.64453125 0.9070434160530567 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434810355305672 0.5003509931266308 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_35}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418031834065914 0 0 0.14434810355305672 0 0.322265625 L 0 0.7291259765625 C 0 0.9070434160530567 0.14418031834065914 1.0513916015625 0.322265625 1.0513916015625 C 0.50018310546875 1.0513916015625 0.64453125 0.9070434160530567 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434810355305672 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_36}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14434818550944328 0 0 0.14434814453125 0 0.322265625 L 0 0.7291259765625 C 0 0.90704345703125 0.14434818550944328 1.0513916015625 0.322265625 1.0513916015625 C 0.5003509931266308 1.0513916015625 0.64453125 0.90704345703125 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434814453125 0.5003509931266308 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_37}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418025687336922 0 0 0.14434814453125 0 0.322265625 L 0 0.7291259765625 C 0 0.90704345703125 0.14418025687336922 1.0513916015625 0.322265625 1.0513916015625 C 0.5001830644905567 1.0513916015625 0.64453125 0.90704345703125 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434814453125 0.5001830644905567 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_38}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14434814453125 0 0 0.14434814453125 0 0.322265625 L 0 0.7291259765625 C 0 0.90704345703125 0.14434814453125 1.0513916015625 0.322265625 1.0513916015625 C 0.5003509931266308 1.0513916015625 0.64453125 0.90704345703125 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434814453125 0.5003509931266308 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_39}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418031834065914 0 0 0.14434810355305672 0 0.322265625 L 0 0.7291259765625 C 0 0.9070434160530567 0.14418031834065914 1.0513916015625 0.322265625 1.0513916015625 C 0.50018310546875 1.0513916015625 0.64453125 0.9070434160530567 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434810355305672 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_40}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418031834065914 0 0 0.14434810355305672 0 0.322265625 L 0 0.7291259765625 C 0 0.9070434160530567 0.14418031834065914 1.0513916015625 0.322265625 1.0513916015625 C 0.50018310546875 1.0513916015625 0.64453125 0.9070434160530567 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434810355305672 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_41}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14434814453125 0 0 0.14434810355305672 0 0.322265625 L 0 0.7291259765625 C 0 0.9070434160530567 0.14434814453125 1.0513916015625 0.322265625 1.0513916015625 C 0.5003509316593409 1.0513916015625 0.64453125 0.9070434160530567 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434810355305672 0.5003509316593409 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_42}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0.322265625 0 C 0.14418031834065914 0 0 0.14434810355305672 0 0.322265625 L 0 0.7291259765625 C 0 0.9070434160530567 0.14418031834065914 1.0513916015625 0.322265625 1.0513916015625 C 0.50018310546875 1.0513916015625 0.64453125 0.9070434160530567 0.64453125 0.7291259765625 L 0.64453125 0.322265625 C 0.64453125 0.14434810355305672 0.50018310546875 0 0.322265625 0 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet.style_Vector_43}
                  fill={"rgba(0, 0, 0, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 18.231674194335938 19.310089111328125 L 16.925994873046875 19.310089111328125 L 16.925994873046875 17.40234375 C 16.925994873046875 17.22425844334066 16.781814616173506 17.080078125 16.603729248046875 17.080078125 C 16.42581180855632 17.080078125 16.281463623046875 17.22425844334066 16.281463623046875 17.40234375 L 16.281463623046875 19.310089111328125 L 15.267669677734375 19.310089111328125 L 15.267669677734375 0.64453125 L 16.281463623046875 0.64453125 L 16.281463623046875 15.833984375 C 16.281463623046875 16.01206968165934 16.42581180855632 16.15625 16.603729248046875 16.15625 C 16.781814616173506 16.15625 16.925994873046875 16.01206968165934 16.925994873046875 15.833984375 L 16.925994873046875 0.537109375 C 16.925994873046875 0.24086000584065914 16.685134928673506 0 16.388885498046875 0 L 7.409088134765625 0 C 7.112838704138994 0 6.871978759765625 0.24086000584065914 6.871978759765625 0.537109375 L 6.871978759765625 1.290740966796875 C 5.8321685791015625 1.4401245322078466 5.020629893057048 2.3013458251953125 4.9509735107421875 3.36163330078125 L 4.7542572021484375 3.36163330078125 C 4.4581756591796875 3.36163330078125 4.2171478271484375 3.602493306621909 4.2171478271484375 3.89874267578125 L 4.2171478271484375 4.6914825439453125 C 4.2171478271484375 4.987731913104653 4.4581756591796875 5.2285919189453125 4.7542572021484375 5.2285919189453125 L 9.633895874023438 5.2285919189453125 C 9.930145243182778 5.2285919189453125 10.171005249023438 4.987731913104653 10.171005249023438 4.6914825439453125 L 10.171005249023438 3.89874267578125 C 10.171005249023438 3.602493306621909 9.930145243182778 3.36163330078125 9.633895874023438 3.36163330078125 L 9.437179565429688 3.36163330078125 C 9.36769106052816 2.3013458251953125 8.55615234375 1.4401245322078466 7.516510009765625 1.290740966796875 L 7.516510009765625 0.64453125 L 14.623306274414062 0.64453125 L 14.623306274414062 9.980667114257812 L 14.163909912109375 9.980667114257812 C 13.867660542950034 9.980667114257812 13.626800537109375 10.221694946289062 13.626800537109375 10.517776489257812 L 13.626800537109375 13.828216552734375 C 13.626800537109375 14.124465983361006 13.867660542950034 14.365325927734375 14.163909912109375 14.365325927734375 L 14.623306274414062 14.365325927734375 L 14.623306274414062 19.310089111328125 L 5.216339111328125 19.310089111328125 C 5.038421589881182 19.310089111328125 4.894073486328125 19.45443721488118 4.894073486328125 19.632354736328125 C 4.894073486328125 19.810440042987466 5.038421589881182 19.954620361328125 5.216339111328125 19.954620361328125 L 18.124252319335938 19.954620361328125 L 18.124252319335938 21.35546875 L 0.64453125 21.35546875 L 0.64453125 19.954620361328125 L 3.733917236328125 19.954620361328125 C 3.912002542987466 19.954620361328125 4.056182861328125 19.810440042987466 4.056182861328125 19.632354736328125 C 4.056182861328125 19.45443721488118 3.912002542987466 19.310089111328125 3.733917236328125 19.310089111328125 L 0.537109375 19.310089111328125 C 0.24086000584065914 19.310089111328125 0 19.55111690238118 0 19.847198486328125 L 0 21.462890625 C 0 21.75913999415934 0.24086000584065914 22 0.537109375 22 L 18.231674194335938 22 C 18.527755737304688 22 18.768783569335938 21.75913999415934 18.768783569335938 21.462890625 L 18.768783569335938 19.847198486328125 C 18.768783569335938 19.55111690238118 18.527755737304688 19.310089111328125 18.231674194335938 19.310089111328125 L 18.231674194335938 19.310089111328125 Z M 8.790969848632812 3.36163330078125 L 8.524932861328125 3.36163330078125 C 8.347015339881182 3.36163330078125 8.202667236328125 3.505813619121909 8.202667236328125 3.68389892578125 C 8.202667236328125 3.861984232440591 8.347015339881182 4.00616455078125 8.524932861328125 4.00616455078125 L 9.526473999023438 4.00616455078125 L 9.526473999023438 4.5840606689453125 L 4.8616790771484375 4.5840606689453125 L 4.8616790771484375 4.00616455078125 L 6.978057861328125 4.00616455078125 C 7.156143167987466 4.00616455078125 7.300323486328125 3.861984232440591 7.300323486328125 3.68389892578125 C 7.300323486328125 3.505813619121909 7.156143167987466 3.36163330078125 6.978057861328125 3.36163330078125 L 5.5971832275390625 3.36163330078125 C 5.6723785400390625 2.5497589111328125 6.359710611402988 1.911773681640625 7.194244384765625 1.911773681640625 C 8.028610229492188 1.911773681640625 8.715942372567952 2.5497589111328125 8.790969848632812 3.36163330078125 Z M 14.623306274414062 13.720794677734375 L 14.271331787109375 13.720794677734375 L 14.271331787109375 10.625198364257812 L 14.623306274414062 10.625198364257812 L 14.623306274414062 13.720794677734375 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
              </View>
            </View>
          </View>
        </View>
        <View style={stylesheet.style_Line_16}></View>
        <View style={stylesheet.style_Line_17}></View>
        <View style={stylesheet.style_Line_18}></View>
        <View style={stylesheet.style_Line_19}></View>
        <View style={stylesheet.style_Group_468}>
          <View style={stylesheet.style_Rectangle_74}></View>
          <View style={stylesheet.style_Call_1}>
            <View style={stylesheet.style_Group_20}>
              <View style={stylesheet.style_Layer_3}>
                <Svg
                  style={stylesheet.style_Vector_44}
                  fill={"rgba(255, 255, 255, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 19.961562395095825 14.845874905586243 C 19.925124895526096 14.815624905750155 15.807687520980835 11.869000060483813 14.690500020980835 12.062187552452087 C 14.153562508523464 12.157062550075352 13.84625056385994 12.522812195122242 13.230938076972961 13.256374716758728 C 13.131938081234694 13.374624720774591 12.893375046551228 13.657188141718507 12.70912504196167 13.858625650405884 C 12.320224735885859 13.731925860978663 11.940899189561605 13.577530140057206 11.574061870574951 13.39662504196167 C 9.680357933044434 12.474693469703197 8.150306530296803 10.944641411304474 7.22837495803833 9.050937473773956 C 7.047469859942794 8.684100154787302 6.89307479467243 8.304775264114141 6.766375005245209 7.91587495803833 C 6.968500005081296 7.730937462300062 7.251749984920025 7.492375001311302 7.372749984264374 7.390625 C 8.102187477052212 6.778750009834766 8.467937449924648 6.471437204629183 8.562812447547913 5.933812201023102 C 8.757374942302704 4.82074972987175 5.8093750942498446 0.6998749917838722 5.779125094413757 0.6627499908208847 C 5.644872665405273 0.4723512288182974 5.470021091401577 0.31413552071899176 5.26719206571579 0.19952405244112015 C 5.064363040030003 0.08491258416324854 4.838616693392396 0.016764762811362743 4.6062498688697815 0 C 3.411374844610691 1.5265566588595902e-16 0 4.424749910831451 0 5.170687437057495 C 0 5.213999937754124 0.06256255507469177 9.616749942302704 5.491749942302704 15.139437437057495 C 11.008250057697296 20.56243744492531 15.411000062245876 20.625 15.454312562942505 20.625 C 16.20025008916855 20.625 20.625 17.213624499738216 20.625 16.018749475479126 C 20.608250236487947 15.786301964893937 20.540037186816335 15.560485320165753 20.425296545028687 15.357638120651245 C 20.31055590324104 15.154790921136737 20.152157217264175 14.979986840859056 19.961562395095825 14.845874905586243 L 19.961562395095825 14.845874905586243 Z M 15.378687143325806 19.245874643325806 C 14.777812134474516 19.19637464545667 11.083187699317932 18.70893704891205 6.4638752937316895 14.17074966430664 C 1.9023126363754272 9.52668708562851 1.4272499778307974 5.821750242263079 1.379812479019165 5.247687757015228 C 2.2809717133641243 3.8332546055316925 3.3692944198846817 2.547201953828335 4.615187376737595 1.4245000183582306 C 4.642687376122922 1.4520000177435577 4.679125047288835 1.4932499988935888 4.725875049829483 1.546875 C 5.681380055844784 2.8512199074029922 6.5044905841350555 4.247559875249863 7.182999968528748 5.715187311172485 C 6.9623530097305775 5.937162537127733 6.729135559871793 6.146278088912368 6.4845001101493835 6.341499984264374 C 6.105132807046175 6.630560241639614 5.75676903128624 6.958187986165285 5.445000052452087 7.319124937057495 L 5.277937531471252 7.55287504196167 L 5.327437222003937 7.835437715053558 C 5.4729324178770185 8.46568888425827 5.6957675609737635 9.075540903955698 5.990874826908112 9.651125073432922 C 7.048172451555729 11.822265475988388 8.802588641643524 13.576439321041107 10.973874926567078 14.633437395095825 C 11.549344725906849 14.928969563916326 12.159222275018692 15.152044367976487 12.789562940597534 15.29756212234497 L 13.07212495803833 15.347062468528748 L 13.305875062942505 15.179999947547913 C 13.668179251253605 14.866849265992641 13.99717408977449 14.517119318246841 14.287624716758728 14.136375188827515 C 14.502812212333083 13.879250179976225 14.790875603444874 13.536187732592225 14.899500608444214 13.439250230789185 C 16.371296510100365 14.117092695087194 17.771211087703705 14.941194854676723 19.078125 15.89912462234497 C 19.135187497828156 15.947249622549862 19.175062709255144 15.98437489499338 19.20187520980835 16.008437395095825 C 18.079353660345078 17.254712596535683 16.793278470635414 18.343285843729973 15.378687143325806 19.244500398635864 L 15.378687143325806 19.245874643325806 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
              </View>
            </View>
          </View>
          <View
            style={[
              stylesheet.style__________________2,
              { display: "flex", flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text
              style={[
                stylesheet.style__________________2,
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
              التواصل بالإتصال
            </Text>
          </View>
        </View>
        <View style={stylesheet.style_Group_506}>
          <View style={stylesheet.style_Rectangle_74_2}></View>
          <View style={stylesheet.style_Group_532}>
            <View style={stylesheet.style_calendar_1}>
              <View style={stylesheet.style_Group_21}>
                <View style={stylesheet.style_Group_22}>
                  <Svg
                    style={stylesheet.style_Vector_45}
                    fill={"rgba(201, 0, 157, 1)"}
                  >
                    <Path
                      fillRule={"nonzero"}
                      d={
                        "M 0.6445837410964608 16.757779439290363 L 3.8672333843098543 16.757779439290363 L 3.8672333843098543 18.691369374593098 C 3.8672333843098543 19.04732181439661 4.155810904316695 19.335899353027344 4.5117633211481545 19.335899353027344 L 21.355479003855745 19.335899353027344 C 21.711431420687205 19.335899353027344 22.00000762939453 19.04732181439661 22.00000762939453 18.691369374593098 L 22.00000762939453 1.9335899353027344 C 22.00000762939453 1.5776374954992207 21.711431420687205 1.2890599568684897 21.355479003855745 1.2890599568684897 L 18.132829319664243 1.2890599568684897 L 18.132829319664243 0.6445299784342449 C 18.132829319664243 0.28857753863073116 17.8442517996574 0 17.48829938282594 0 C 17.13234696599448 0 16.84376944598764 0.28857753863073116 16.84376944598764 0.6445299784342449 L 16.84376944598764 1.2890599568684897 L 13.57815109934025 1.2890599568684897 L 13.57815109934025 0.6445299784342449 C 13.57815109934025 0.28857753863073116 13.289573579333409 0 12.93362116250195 0 C 12.577668745670492 0 12.289091225663649 0.28857753863073116 12.289091225663649 0.6445299784342449 L 12.289091225663649 1.2890599568684897 L 9.066441541472146 1.2890599568684897 L 9.066441541472146 0.6445299784342449 C 9.066441541472146 0.28857753863073116 8.777864021465303 0 8.421911604633845 0 C 8.065959187802386 0 7.777381667795544 0.28857753863073116 7.777381667795544 0.6445299784342449 L 7.777381667795544 1.2890599568684897 L 4.5117633211481545 1.2890599568684897 C 4.155810904316695 1.2890599568684897 3.8672333843098543 1.5776374954992207 3.8672333843098543 1.9335899353027344 L 3.8672333843098543 5.800769805908203 C 3.8672333843098543 10.550955878098547 1.8930382213761894 14.20526838714108 0.23195562750623608 15.618121090826268 C 0.023471667107702543 15.791843413853833 -0.05382892698228616 16.07749929502388 0.03851072560303425 16.332690203391635 C 0.1309363195291212 16.587838146208497 0.3731936696807301 16.757779439290363 0.6445837410964608 16.757779439290363 L 0.6445837410964608 16.757779439290363 Z M 20.710949067017445 18.046839396158855 L 5.156293257986455 18.046839396158855 L 5.156293257986455 16.757779439290363 L 17.48829938282594 16.757779439290363 C 17.639076422088202 16.757779439290363 17.785083793771875 16.7049284207539 17.90092731201467 16.60837783088597 C 18.675738215716674 15.9630314455176 19.875896080194092 14.426557406460052 20.710949067017445 12.45867846188032 L 20.710949067017445 18.046839396158855 Z M 5.156293257986455 2.5781199137369795 L 7.777381667795544 2.5781199137369795 L 7.777381667795544 3.222649892171224 C 7.777381667795544 3.578602331974738 8.065959187802386 3.8671798706054688 8.421911604633845 3.8671798706054688 C 8.777864021465303 3.8671798706054688 9.066441541472146 3.578602331974738 9.066441541472146 3.222649892171224 L 9.066441541472146 2.5781199137369795 L 12.289091225663649 2.5781199137369795 L 12.289091225663649 3.222649892171224 C 12.289091225663649 3.578602331974738 12.577668745670492 3.8671798706054688 12.93362116250195 3.8671798706054688 C 13.289573579333409 3.8671798706054688 13.57815109934025 3.578602331974738 13.57815109934025 3.222649892171224 L 13.57815109934025 2.5781199137369795 L 16.84376944598764 2.5781199137369795 L 16.84376944598764 3.222649892171224 C 16.84376944598764 3.578602331974738 17.13234696599448 3.8671798706054688 17.48829938282594 3.8671798706054688 C 17.8442517996574 3.8671798706054688 18.132829319664243 3.578602331974738 18.132829319664243 3.222649892171224 L 18.132829319664243 2.5781199137369795 L 20.710949067017445 2.5781199137369795 L 20.710949067017445 5.156239827473959 L 5.156293257986455 5.156239827473959 L 5.156293257986455 2.5781199137369795 Z M 5.145250476959031 6.4448703337240865 L 20.699518469158924 6.4448703337240865 C 20.554284385140654 10.533553621132807 18.985025990457444 13.750531486892658 17.23555689200952 15.468719482421875 L 2.110631472158658 15.468719482421875 C 4.092904752321389 12.942978447654362 5.038903041478522 9.654285934701976 5.145250476959031 6.4448703337240865 L 5.145250476959031 6.4448703337240865 Z"
                      }
                      strokeLinejoin={"miter"}
                    />
                  </Svg>
                </View>
              </View>
            </View>
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
                حجز
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
const Component_style_Group_440 = ({
  variant,
  variant1_left,
  variant1_right,
  variant1_top,
  variant1_bottom,
  variant1_transform,
}) => {
  if (variant === "variant1") {
    return (
      <View
        style={[
          component_style_Group_440_stylesheet.style_Property_1_Default,
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
          style={component_style_Group_440_stylesheet.style_Ellipse_2}
        ></View>
        <View style={component_style_Group_440_stylesheet.style_Heart_1}>
          <View style={component_style_Group_440_stylesheet.style_Group}>
            <Svg
              style={component_style_Group_440_stylesheet.style_Vector}
              fill={"rgba(0,0,0,0)"}
            >
              <Path
                fillRule={"nonzero"}
                d={
                  "M 17.693671822547913 1.952045738697052 C 17.021354038268328 1.0687184929847717 16.07163404673338 0.43701782263815403 14.99708116054535 0.1584242768585682 C 13.922528274357319 -0.12016926892101765 12.785520359873772 -0.02948356419801712 11.768711566925049 0.4159128852188587 C 10.858633428812027 0.8086472749710083 10.046953111886978 1.470795378088951 9.388671875 2.3495063483715057 C 8.730390638113022 1.4686469733715057 7.9187109768390656 0.8064988292753696 7.008632838726044 0.4159128852188587 C 5.991824045777321 -0.02948356419801712 4.854815147817135 -0.12016926892101765 3.7802622616291046 0.1584242768585682 C 2.7057093754410744 0.43701782263815403 1.7559897117316723 1.0687184929847717 1.0836719274520874 1.952045738697052 C 0.3746875524520874 2.881030149757862 0 4.042045630514622 0 5.309194058179855 C 0 7.132787749171257 1.0875391215085983 9.133412644267082 3.2321094274520874 11.257787585258484 C 4.979648411273956 12.988139167428017 7.044726595282555 14.40524885058403 8.119804739952087 15.095756649971008 C 8.498604904860258 15.338196139782667 8.938931450247765 15.467040061950684 9.388671875 15.467040061950684 C 9.838412299752235 15.467040061950682 10.278738845139742 15.338196139782667 10.657539010047913 15.095756649971008 C 11.731757760047913 14.40524885058403 13.797695338726044 12.988139167428017 15.545234322547913 11.257787585258484 C 17.6898046284914 9.134272038936615 18.77734375 7.132787749171257 18.77734375 5.309194058179855 C 18.77734375 4.042045630514622 18.402656197547913 2.881030149757862 17.693671822547913 1.952045738697052 Z"
                }
                strokeLinejoin={"miter"}
                strokeWidth={1}
                stroke={"rgba(131, 131, 131, 1)"}
              />
            </Svg>
          </View>
        </View>
      </View>
    );
  }
  if (variant === "variant2") {
    return (
      <View
        style={[
          component_style_Group_440_stylesheet.style_Property_1_Variant2,
          {},
        ]}
      >
        <View
          style={component_style_Group_440_stylesheet.style_Ellipse_2_2}
        ></View>
        <View style={component_style_Group_440_stylesheet.style_Heart_1_2}>
          <View style={component_style_Group_440_stylesheet.style_Group_2}>
            <Svg
              style={component_style_Group_440_stylesheet.style_Vector_2}
              fill={"rgba(226, 22, 22, 1)"}
            >
              <Path
                fillRule={"nonzero"}
                d={
                  "M 17.693671822547913 1.952045738697052 C 17.021354038268328 1.0687184929847717 16.07163404673338 0.43701782263815403 14.99708116054535 0.1584242768585682 C 13.922528274357319 -0.12016926892101765 12.785520359873772 -0.02948356419801712 11.768711566925049 0.4159128852188587 C 10.858633428812027 0.8086472749710083 10.046953111886978 1.470795378088951 9.388671875 2.3495063483715057 C 8.730390638113022 1.4686469733715057 7.9187109768390656 0.8064988292753696 7.008632838726044 0.4159128852188587 C 5.991824045777321 -0.02948356419801712 4.854815147817135 -0.12016926892101765 3.7802622616291046 0.1584242768585682 C 2.7057093754410744 0.43701782263815403 1.7559897117316723 1.0687184929847717 1.0836719274520874 1.952045738697052 C 0.3746875524520874 2.881030149757862 0 4.042045630514622 0 5.309194058179855 C 0 7.132787749171257 1.0875391215085983 9.133412644267082 3.2321094274520874 11.257787585258484 C 4.979648411273956 12.988139167428017 7.044726595282555 14.40524885058403 8.119804739952087 15.095756649971008 C 8.498604904860258 15.338196139782667 8.938931450247765 15.467040061950684 9.388671875 15.467040061950684 C 9.838412299752235 15.467040061950682 10.278738845139742 15.338196139782667 10.657539010047913 15.095756649971008 C 11.731757760047913 14.40524885058403 13.797695338726044 12.988139167428017 15.545234322547913 11.257787585258484 C 17.6898046284914 9.134272038936615 18.77734375 7.132787749171257 18.77734375 5.309194058179855 C 18.77734375 4.042045630514622 18.402656197547913 2.881030149757862 17.693671822547913 1.952045738697052 Z"
                }
                strokeLinejoin={"miter"}
              />
            </Svg>
          </View>
        </View>
      </View>
    );
  }
};

const stylesheet = StyleSheet.create({
  style_DetailsScreen: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 1200,
    borderRadius: 0,
    overflow: "hidden",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 1)",
    left: 0,
    top: 0,
  },
  style_Rectangle_64: {
    position: "absolute",
    width: "100%",
    height: 212,
    borderRadius: 0,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Back2_1: {
    position: "absolute",
    width: 24,
    height: 24,
    borderRadius: 0,
    overflow: "hidden",
    left: 359,
    // right: "auto",
    top: 80,
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
    color: "rgba(255, 255, 255, 1)",
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
    color: "rgba(255, 255, 255, 1)",
    // width: "auto",
    height: 13.057499885559082,
    borderRadius: 0,
    left: -7.49951171875,
    right: 24.223901748657227,
    transform: [
      { translateX: 0 },
      { translateY: -5.47509765625 },
      { rotate: "-7.0167096047110005e-15deg" },
    ],
  },
  style_Group_463: {
    position: "absolute",
    width: 69,
    height: 9,
    transform: [{ translateX: 153 }, { translateY: 191 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Ellipse_3: {
    position: "absolute",
    width: 9,
    height: 9,
    borderRadius: 1000,
    backgroundColor: "rgba(41, 32, 113, 1)",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Ellipse_4: {
    position: "absolute",
    width: 9,
    height: 9,
    borderRadius: 1000,
    backgroundColor: "rgba(255, 255, 255, 1)",
    left: 15,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Ellipse_5: {
    position: "absolute",
    width: 9,
    height: 9,
    borderRadius: 1000,
    backgroundColor: "rgba(255, 255, 255, 1)",
    left: 30,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Ellipse_6: {
    position: "absolute",
    width: 9,
    height: 9,
    borderRadius: 1000,
    backgroundColor: "rgba(255, 255, 255, 1)",
    left: 45,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Ellipse_7: {
    position: "absolute",
    width: 9,
    height: 9,
    borderRadius: 1000,
    backgroundColor: "rgba(255, 255, 255, 1)",
    left: 60,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Title: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 76,
    // right: "auto",
    top: 60,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 700,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_439: {
    position: "absolute",
    width: 243,
    height: 14,
    transform: [{ translateX: 66 }, { translateY: 93 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style______________________________________________: {
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
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Location_1: {
    position: "absolute",
    width: 14,
    height: 14,
    borderRadius: 0,
    overflow: "hidden",
    left: 229,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  style_Group_5: {
    position: "absolute",
    width: 10.343329429626465,
    height: 14,
    transform: [
      { translateX: 1.828369140625 },
      { translateY: 0 },
      { rotate: "0deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_6: {
    position: "absolute",
    width: 10.343329429626465,
    height: 14,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_7: {
    position: "absolute",
    width: 10.343329429626465,
    height: 14,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_8: {
    position: "absolute",
    width: 10.343329429626465,
    height: 14,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Vector_3: {
    position: "absolute",
    color: "rgba(255, 255, 255, 1)",
    // width: "auto",
    height: 14,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Vector_4: {
    position: "absolute",
    color: "rgba(255, 255, 255, 1)",
    // width: "auto",
    height: 5.475880146026611,
    borderRadius: 0,
    left: 2.433837890625,
    right: 2.4336118698120117,
    transform: [
      { translateX: 0 },
      { translateY: 2.43408203125 },
      { rotate: "0deg" },
    ],
  },
  style_Desc: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 126,
    // right: "auto",
    top: 228,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 16,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Price: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 250,
    // right: "auto",
    top: 320,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 18,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_524: {
    position: "absolute",
    width: 327,
    height: 80,
    transform: [{ translateX: 24 }, { translateY: 366 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style___________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 249,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 16,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_______________________________________________________________________________________________________________:
    {
      position: "absolute",
      width: 326,
      // height: "auto",
      left: 1,
      // right: "auto",
      top: 29,
      // bottom: "auto",
      transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
      fontFamily: "Tajawal",
      // fontWeight: 400,
      textDecorationLine: "none",
      fontSize: 14,
      color: "rgba(131, 131, 131, 1)",
      textAlign: "right",
      textAlignVertical: "top",
      letterSpacing: -0.30000001192092896,
    },
  style______: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Basic_Info: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 217,
    // right: "auto",
    top: 478,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 16,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Additional: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 224,
    // right: "auto",
    top: 721,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 16,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Props: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 263,
    // right: "auto",
    top: 997,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 16,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_531: {
    position: "absolute",
    width: 326,
    height: 182,
    transform: [{ translateX: 25 }, { translateY: 507 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_525: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_____________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 254,
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
  style_____: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_526: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 0 }, { translateY: 33 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style____________2: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 272,
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
  style____: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_527: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 0 }, { translateY: 66 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style____________________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 214,
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
  style___: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_528: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 0 }, { translateY: 99 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_________________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 231,
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
  style____2: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_529: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 0 }, { translateY: 132 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style____________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 259,
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
  style_1: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_530: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 0 }, { translateY: 165 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_______________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 234,
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
  style______8_________________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_530_2: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 25 }, { translateY: 948 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style______________________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 224,
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
  style_5_____________________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_525_2: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 25 }, { translateY: 750 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style__________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 271,
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
  style_______: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Frame_460: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(41, 32, 113, 1)",
    left: 258,
    // right: "auto",
    top: 1026,
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
  style___________2: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
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
    left: 156,
    // right: "auto",
    top: 1026,
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
  style____________3: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "right",
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
    left: 50,
    // right: "auto",
    top: 1026,
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
  style_________: {
    position: "relative",
    // width: "auto",
    // height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
    flexShrink: 0,
  },
  style_Group_526_2: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 25 }, { translateY: 783 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style______________2: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 259,
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
  style_1_2: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_527_2: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 25 }, { translateY: 816 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style________2: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 284,
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
  style___________3: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_528_2: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 25 }, { translateY: 849 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_______2: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 282,
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
  style___________4: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_529_2: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 25 }, { translateY: 882 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_____________2: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 256,
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
  style_1_3: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_530_3: {
    position: "absolute",
    width: 326,
    height: 17,
    transform: [{ translateX: 25 }, { translateY: 915 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style________: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 290,
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
  style___________5: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(41, 32, 113, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Group_464: {
    position: "absolute",
    width: 243,
    height: 14,
    transform: [{ translateX: 116 }, { translateY: 255 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_______________________________________________2: {
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
    fontSize: 12,
    color: "rgba(131, 131, 131, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Location_1_2: {
    position: "absolute",
    width: 14,
    height: 14,
    borderRadius: 0,
    overflow: "hidden",
    left: 229,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  style_Group_9: {
    position: "absolute",
    width: 10.343329429626465,
    height: 14,
    transform: [
      { translateX: 1.828369140625 },
      { translateY: 0 },
      { rotate: "0deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_10: {
    position: "absolute",
    width: 10.343329429626465,
    height: 14,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_11: {
    position: "absolute",
    width: 10.343329429626465,
    height: 14,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_12: {
    position: "absolute",
    width: 10.343329429626465,
    height: 14,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Vector_5: {
    position: "absolute",
    color: "rgba(29, 161, 242, 1)",
    // width: "auto",
    height: 14,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Vector_6: {
    position: "absolute",
    color: "rgba(29, 161, 242, 1)",
    // width: "auto",
    height: 5.475880146026611,
    borderRadius: 0,
    left: 2.433837890625,
    right: 2.4336118698120117,
    transform: [
      { translateX: 0 },
      { translateY: 2.43408203125 },
      { rotate: "0deg" },
    ],
  },
  style_Group_454: {
    position: "absolute",
    width: 231,
    height: 22,
    transform: [{ translateX: 128 }, { translateY: 281 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_451: {
    position: "absolute",
    width: 57,
    height: 21,
    transform: [{ translateX: 174 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_512__2: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 6,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_area_1: {
    position: "absolute",
    width: 21,
    height: 21,
    borderRadius: 0,
    overflow: "hidden",
    left: 36,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  style_Group_13: {
    position: "absolute",
    width: 18.373504638671875,
    height: 18.376422882080078,
    transform: [
      { translateX: 1.31396484375 },
      { translateY: 1.3125 },
      { rotate: "0deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Vector_7: {
    position: "absolute",
    color: "rgba(14, 14, 14, 1)",
    // width: "auto",
    height: 13.351709365844727,
    borderRadius: 0,
    left: 5.02197265625,
    right: -0.0000152587890625,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Vector_8: {
    position: "absolute",
    color: "rgba(14, 14, 14, 1)",
    // width: "auto",
    height: 18.376413345336914,
    borderRadius: 0,
    left: 0,
    right: 0.0000095367431640625,
    transform: [
      { translateX: 0 },
      { translateY: 0.000244140625 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_9: {
    position: "absolute",
    color: "rgba(14, 14, 14, 1)",
    // width: "auto",
    height: 7.027128219604492,
    borderRadius: 0,
    left: 5.509765625,
    right: 6.642819881439209,
    transform: [
      { translateX: 0 },
      { translateY: 5.330322265625 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_10: {
    position: "absolute",
    color: "rgba(14, 14, 14, 1)",
    // width: "auto",
    height: 4.045782089233398,
    borderRadius: 0,
    left: 12.8212890625,
    right: 2.9704697132110596,
    transform: [
      { translateX: 0 },
      { translateY: 3.474609375 },
      { rotate: "0deg" },
    ],
  },
  style_Group_452: {
    position: "absolute",
    width: 58,
    height: 22,
    transform: [{ translateX: 88 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_6____: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 6,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Beds_1: {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: 0,
    overflow: "hidden",
    left: 36,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  style_Group_14: {
    position: "absolute",
    width: 22,
    height: 16.042482376098633,
    transform: [
      { translateX: 0 },
      { translateY: 2.978759765625 },
      { rotate: "0deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_15: {
    position: "absolute",
    width: 22,
    height: 16.042482376098633,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_16: {
    position: "absolute",
    width: 22,
    height: 16.042482376098633,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Vector_11: {
    position: "absolute",
    color: "rgba(14, 14, 14, 1)",
    // width: "auto",
    height: 16.042482376098633,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Group_17: {
    position: "absolute",
    width: 5.091796875,
    height: 5.091796875,
    transform: [
      { translateX: 0.9130859375 },
      { translateY: 3.144287109375 },
      { rotate: "0deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_18: {
    position: "absolute",
    width: 5.091796875,
    height: 5.091796875,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Vector_12: {
    position: "absolute",
    color: "rgba(14, 14, 14, 1)",
    // width: "auto",
    height: 5.091796875,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Group_453: {
    position: "absolute",
    width: 60,
    height: 22,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_2_____: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 6,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Tajawal",
    // fontWeight: 500,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(14, 14, 14, 1)",
    textAlign: "right",
    textAlignVertical: "top",
    letterSpacing: -0.30000001192092896,
  },
  style_Bathroom_1: {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: 0,
    overflow: "hidden",
    left: 38,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  style_Group_19: {
    position: "absolute",
    width: 18.768783569335938,
    height: 22,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Vector_13: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 3.395751953125,
    right: 14.728500366210938,
    transform: [
      { translateX: 0 },
      { translateY: 5.864990234375 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_14: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 5.1337890625,
    right: 12.990463256835938,
    transform: [
      { translateX: 0 },
      { translateY: 5.864990234375 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_15: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 6.8720703125,
    right: 11.252182006835938,
    transform: [
      { translateX: 0 },
      { translateY: 5.864990234375 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_16: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 8.610107421875,
    right: 9.514144897460938,
    transform: [
      { translateX: 0 },
      { translateY: 5.864990234375 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_17: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 10.34814453125,
    right: 7.7761077880859375,
    transform: [
      { translateX: 0 },
      { translateY: 5.864990234375 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_18: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 4.264892578125,
    right: 13.859359741210938,
    transform: [
      { translateX: 0 },
      { translateY: 7.6728515625 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_19: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 6.0029296875,
    right: 12.121322631835938,
    transform: [
      { translateX: 0 },
      { translateY: 7.6728515625 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_20: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 7.740966796875,
    right: 10.383285522460938,
    transform: [
      { translateX: 0 },
      { translateY: 7.6728515625 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_21: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 9.479248046875,
    right: 8.645004272460938,
    transform: [
      { translateX: 0 },
      { translateY: 7.6728515625 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_22: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0512237548828125,
    borderRadius: 0,
    left: 3.395751953125,
    right: 14.728500366210938,
    transform: [
      { translateX: 0 },
      { translateY: 9.2548828125 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_23: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0512237548828125,
    borderRadius: 0,
    left: 5.1337890625,
    right: 12.990463256835938,
    transform: [
      { translateX: 0 },
      { translateY: 9.2548828125 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_24: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0512237548828125,
    borderRadius: 0,
    left: 6.8720703125,
    right: 11.252182006835938,
    transform: [
      { translateX: 0 },
      { translateY: 9.2548828125 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_25: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0512237548828125,
    borderRadius: 0,
    left: 8.610107421875,
    right: 9.514144897460938,
    transform: [
      { translateX: 0 },
      { translateY: 9.2548828125 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_26: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0512237548828125,
    borderRadius: 0,
    left: 10.34814453125,
    right: 7.7761077880859375,
    transform: [
      { translateX: 0 },
      { translateY: 9.2548828125 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_27: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0512237548828125,
    borderRadius: 0,
    left: 4.264892578125,
    right: 13.859359741210938,
    transform: [
      { translateX: 0 },
      { translateY: 11.062744140625 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_28: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0512237548828125,
    borderRadius: 0,
    left: 6.0029296875,
    right: 12.121322631835938,
    transform: [
      { translateX: 0 },
      { translateY: 11.062744140625 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_29: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0512237548828125,
    borderRadius: 0,
    left: 7.740966796875,
    right: 10.383285522460938,
    transform: [
      { translateX: 0 },
      { translateY: 11.062744140625 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_30: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0512237548828125,
    borderRadius: 0,
    left: 9.479248046875,
    right: 8.645004272460938,
    transform: [
      { translateX: 0 },
      { translateY: 11.062744140625 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_31: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 3.395751953125,
    right: 14.728500366210938,
    transform: [
      { translateX: 0 },
      { translateY: 12.64453125 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_32: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 5.1337890625,
    right: 12.990463256835938,
    transform: [
      { translateX: 0 },
      { translateY: 12.64453125 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_33: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 6.8720703125,
    right: 11.252182006835938,
    transform: [
      { translateX: 0 },
      { translateY: 12.64453125 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_34: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 8.610107421875,
    right: 9.514144897460938,
    transform: [
      { translateX: 0 },
      { translateY: 12.64453125 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_35: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 10.34814453125,
    right: 7.7761077880859375,
    transform: [
      { translateX: 0 },
      { translateY: 12.64453125 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_36: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 5.1337890625,
    right: 12.990463256835938,
    transform: [
      { translateX: 0 },
      { translateY: 16.336669921875 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_37: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 6.8720703125,
    right: 11.252182006835938,
    transform: [
      { translateX: 0 },
      { translateY: 16.336669921875 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_38: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 8.610107421875,
    right: 9.514144897460938,
    transform: [
      { translateX: 0 },
      { translateY: 16.336669921875 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_39: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 4.264892578125,
    right: 13.859359741210938,
    transform: [
      { translateX: 0 },
      { translateY: 14.49755859375 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_40: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 6.0029296875,
    right: 12.121322631835938,
    transform: [
      { translateX: 0 },
      { translateY: 14.49755859375 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_41: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 7.740966796875,
    right: 10.383285522460938,
    transform: [
      { translateX: 0 },
      { translateY: 14.49755859375 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_42: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 1.0513916015625,
    borderRadius: 0,
    left: 9.479248046875,
    right: 8.645004272460938,
    transform: [
      { translateX: 0 },
      { translateY: 14.49755859375 },
      { rotate: "0deg" },
    ],
  },
  style_Vector_43: {
    position: "absolute",
    color: "rgba(0, 0, 0, 1)",
    // width: "auto",
    height: 22,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Line_16: {
    position: "absolute",
    width: 343,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(200, 200, 200, 1)",
    left: 359,
    // right: "auto",
    top: 354,
    // bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "-0.000005008956130975337deg" },
    ],
  },
  style_Line_17: {
    position: "absolute",
    width: 343,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(200, 200, 200, 1)",
    left: 359,
    // right: "auto",
    top: 462,
    // bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "-0.000005008956130975337deg" },
    ],
  },
  style_Line_18: {
    position: "absolute",
    width: 343,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(200, 200, 200, 1)",
    left: 359,
    // right: "auto",
    top: 705,
    // bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "-0.000005008956130975337deg" },
    ],
  },
  style_Line_19: {
    position: "absolute",
    width: 343,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(200, 200, 200, 1)",
    left: 359,
    // right: "auto",
    top: 981,
    // bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "-0.000005008956130975337deg" },
    ],
  },
  style_Group_468: {
    position: "absolute",
    width: 228.6666717529297,
    height: 48,
    transform: [{ translateX: 16 }, { translateY: 1108 }, { rotate: "0deg" }],
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
  style_Call_1: {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: 0,
    overflow: "hidden",
    left: 15,
    // right: "auto",
    top: 13,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  style_Group_20: {
    position: "absolute",
    width: 20.625,
    height: 20.625,
    transform: [{ translateX: 1 }, { translateY: 1 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Layer_3: {
    position: "absolute",
    width: 20.625,
    height: 20.625,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Vector_44: {
    position: "absolute",
    color: "rgba(255, 255, 255, 1)",
    // width: "auto",
    height: 20.625,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style__________________2: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 58,
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
    transform: [{ translateX: 257 }, { translateY: 1108 }, { rotate: "0deg" }],
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
  style_Group_532: {
    position: "absolute",
    width: 63,
    height: 22,
    transform: [{ translateX: 20 }, { translateY: 13 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_calendar_1: {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: 0,
    overflow: "hidden",
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  style_Group_21: {
    position: "absolute",
    width: 22.00000762939453,
    height: 19.335899353027344,
    transform: [
      { translateX: 0 },
      { translateY: 1.33203125 },
      { rotate: "0deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Group_22: {
    position: "absolute",
    width: 22.00000762939453,
    height: 19.335899353027344,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Vector_45: {
    position: "absolute",
    color: "rgba(201, 0, 157, 1)",
    // width: "auto",
    height: 19.335899353027344,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_____2: {
    position: "absolute",
    // width: "auto",
    // height: "auto",
    left: 38,
    // right: "auto",
    top: 1,
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
const component_style_Group_440_stylesheet = StyleSheet.create({
  style_Property_1_Default: {
    position: "absolute",
    width: 36,
    height: 36,
    borderRadius: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Ellipse_2: {
    position: "absolute",
    width: 36,
    height: 36,
    borderRadius: 1000,
    backgroundColor: "rgba(255, 255, 255, 1)",
    left: 0,
    // right: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Heart_1: {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: 0,
    overflow: "hidden",
    left: 7,
    // right: "auto",
    transform: [{ translateX: 0 }, { translateY: 7 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  style_Group: {
    position: "absolute",
    width: 18.77734375,
    height: 15.467040061950684,
    transform: [
      { translateX: 1.611328125 },
      { translateY: 3.265625 },
      { rotate: "0deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Vector: {
    position: "absolute",
    color: "rgba(0,0,0,0)",
    // width: "auto",
    height: 15.467040061950684,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Property_1_Variant2: {
    position: "absolute",
    width: 36,
    height: 36,
    borderRadius: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Ellipse_2_2: {
    position: "absolute",
    width: 36,
    height: 36,
    borderRadius: 1000,
    backgroundColor: "rgba(255, 255, 255, 1)",
    left: 0,
    // right: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  style_Heart_1_2: {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: 0,
    overflow: "hidden",
    left: 7,
    // right: "auto",
    transform: [{ translateX: 0 }, { translateY: 7 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  style_Group_2: {
    position: "absolute",
    width: 18.77734375,
    height: 15.467040061950684,
    transform: [
      { translateX: 1.611328125 },
      { translateY: 3.265625 },
      { rotate: "0deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  style_Vector_2: {
    position: "absolute",
    color: "rgba(226, 22, 22, 1)",
    // width: "auto",
    height: 15.467040061950684,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
});
const imageUrlstyle_Rectangle_64 =
  "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/6a88bb1db63984ceebd3fee212c21929";
