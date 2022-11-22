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

export default function PhoneModel() {
  let [fontsLoaded] = useFonts({})

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{ height: Dimensions.get('window').height }}
    >
      <View style={stylesheet.style_PhoneModel}>
        <View style={stylesheet.style_Group_458}>
          <View style={stylesheet.style_Rectangle_68}></View>
          <View style={stylesheet.style_Group_481}>
            <View style={stylesheet.style_Rectangle_78}></View>
            <View style={stylesheet.style_Call_1}>
              <View style={stylesheet.style_Group}>
                <View style={stylesheet.style_Layer_3}>
                  <Svg
                    style={stylesheet.style_Vector}
                    fill={'rgba(29, 161, 242, 1)'}
                  >
                    <Path
                      fillRule={'nonzero'}
                      d={
                        'M 19.054218649864197 14.171062409877777 C 19.01943740027491 14.14218741003424 15.08915627002716 11.329500057734549 14.02275002002716 11.513906300067902 C 13.510218758136034 11.6044687977992 13.216875538229942 11.953593458980322 12.629531800746918 12.653812229633331 C 12.535031804814935 12.766687233466655 12.307312544435263 13.036406862549484 12.131437540054321 13.22868812084198 C 11.76021452061832 13.10774741275236 11.398131044581532 12.960369679145515 11.04796814918518 12.787687540054321 C 9.240341663360596 11.907661948353052 7.779838051646948 10.447157710790634 6.899812459945679 8.63953122496605 C 6.727130320854485 8.289368329569697 6.57975321309641 7.9272854793816805 6.45881250500679 7.556062459945679 C 6.651750004850328 7.379531214013696 6.922124985605478 7.1518125012516975 7.0376249849796295 7.0546875 C 7.733906228095293 6.4706250093877316 8.0830312022008 6.177280968055129 8.173593699932098 5.664093464612961 C 8.359312444925308 4.601624742150307 5.545312589965761 0.6680624921573326 5.516437590122223 0.6326249912381172 C 5.388287544250488 0.4508807184174657 5.221383769065142 0.29985663341358304 5.02777424454689 0.19045477733016014 C 4.834164720028639 0.08105292124673724 4.618679570965469 0.016002728138118982 4.396874874830246 0 C 3.2563123516738415 1.457167719820518e-16 0 4.223624914884567 0 4.935656189918518 C 0 4.976999940583482 0.05971880257129669 9.179624944925308 5.242124944925308 14.451281189918518 C 10.507875055074692 19.627781197428703 14.710500059416518 19.6875 14.751843810081482 19.6875 C 15.463875085115433 19.6875 19.6875 16.43118702247739 19.6875 15.290624499320984 C 19.67151158937486 15.068742784671485 19.606399132870138 14.853190532885492 19.49687397480011 14.659563660621643 C 19.387348816730082 14.465936788357794 19.236150071024895 14.299078348092735 19.054218649864197 14.171062409877777 L 19.054218649864197 14.171062409877777 Z M 14.679655909538269 18.37106215953827 C 14.10609340108931 18.323812161572278 10.579406440258026 17.858530819416046 6.170062780380249 13.52662467956543 C 1.8158438801765442 9.093655854463577 1.3623749788384885 5.557125231251121 1.3170937299728394 5.009156495332718 C 2.1772911809384823 3.6590157598257065 3.216144673526287 2.4314200468361378 4.405406132340431 1.3597500175237656 C 4.431656131753698 1.3860000169370323 4.4664375451393425 1.4253749989438802 4.5110625475645065 1.4765625 C 5.423135507851839 2.721619002521038 6.208831921219826 4.054488971829414 6.856499969959259 5.455406069755554 C 6.645882418379188 5.667291512712836 6.423265761695802 5.866901812143624 6.189750105142593 6.0532499849796295 C 5.827626770362258 6.329171139746904 5.49509771168232 6.641906714066863 5.197500050067902 6.986437439918518 L 5.038031280040741 7.209562540054321 L 5.0852809846401215 7.479281455278397 C 5.224162762518972 8.080884844064713 5.436869035474956 8.663016317412257 5.718562334775925 9.212437570095062 C 6.727800976485014 11.28488977253437 8.402470976114273 12.959328442811966 10.475062429904938 13.968281149864197 C 11.024374511092901 14.250380038283765 11.606530353426933 14.46331507852301 12.208219170570374 14.602218389511108 L 12.477937459945679 14.649468719959259 L 12.701062560081482 14.489999949932098 C 13.046898376196623 14.191083390265703 13.360938903875649 13.85725025832653 13.638187229633331 13.493812680244446 C 13.843593475408852 13.248375171795487 14.118563076015562 12.920906472019851 14.222250580787659 12.828375220298767 C 15.627146668732166 13.475406663492322 16.963428765535355 14.2620496340096 18.2109375 15.176437139511108 C 18.265406247926876 15.222374639706686 18.303468949743547 15.257812399766408 18.329062700271606 15.280781149864197 C 17.25756485760212 16.470407478511333 16.029947631061077 17.50950012356043 14.679655909538269 18.369750380516052 L 14.679655909538269 18.37106215953827 Z'
                      }
                      strokeLinejoin={'miter'}
                    />
                  </Svg>
                </View>
              </View>
            </View>
            <View
              style={[
                stylesheet.style_CountryCode,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style_CountryCode,
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
                stylesheet.style_PhoneNumber,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style_PhoneNumber,
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
                5597151613
              </Text>
            </View>
          </View>
          <View
            style={[
              stylesheet.style_Title,
              { display: 'flex', flexDirection: 'row', alignItems: 'center' }
            ]}
          >
            <Text
              style={[
                stylesheet.style_Title,
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
              رقم الجوال للتواصل
            </Text>
          </View>
          <View style={stylesheet.style_Submit}>
            <View
              style={[
                stylesheet.style_Text,
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
              ]}
            >
              <Text
                style={[
                  stylesheet.style_Text,
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
                نسخ الرقم
              </Text>
            </View>
          </View>
          <View style={stylesheet.style_Polygon_1}></View>
        </View>
      </View>
    </ScrollView>
  )
}

const stylesheet = StyleSheet.create({
  style_PhoneModel: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: 158,
    borderRadius: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(0,0,0,0)',
    left: 0,
    top: 0
  },
  style_Group_458: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 158,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_68: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 146,
    borderRadius: 8,
    opacity: 1,
    left: 0,
    // right: "auto",
    top: 0,
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
  style_Group_481: {
    position: 'absolute',
    width: 311,
    height: 41,
    transform: [{ translateX: 16 }, { translateY: 47 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_78: {
    position: 'absolute',
    width: 311,
    height: 41,
    borderRadius: 8,
    opacity: 1,
    borderWidth: 1,
    borderColor: 'rgba(29, 161, 242, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_Call_1: {
    position: 'absolute',
    width: 21,
    height: 21,
    borderRadius: 0,
    overflow: 'hidden',
    left: 274,
    // right: "auto",
    top: 10,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group: {
    position: 'absolute',
    width: 19.6875,
    height: 19.6875,
    transform: [
      { translateX: 0.65625 },
      { translateY: 0.65625 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Layer_3: {
    position: 'absolute',
    width: 19.6875,
    height: 19.6875,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector: {
    position: 'absolute',
    color: 'rgba(29, 161, 242, 1)',
    // width: "auto",
    height: 19.6875,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_CountryCode: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 16,
    // right: "auto",
    top: 12,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 16,
    color: 'rgba(29, 161, 242, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_PhoneNumber: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 125,
    // right: "auto",
    top: 12,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 16,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Title: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 200,
    // right: "auto",
    top: 16,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 16,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Submit: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 16,
    // right: "auto",
    top: 100,
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
  style_Text: {
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
  style_Polygon_1: {
    position: 'absolute',
    width: 29,
    height: 29,
    borderRadius: 2,
    left: 56,
    // right: "auto",
    top: 158,
    // bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '-7.0167096047110005e-15deg' }
    ]
  }
})
