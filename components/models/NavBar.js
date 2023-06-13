import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'

export default function NavBar({navigation, isLoggedIn, unauthAction}) {
  const routes = navigation.getState()?.routes ?? [];
  const currentScreen = routes.length > 0 ? routes[routes.length - 1]?.name : ''
  const handlePress = (screenName) => {
    if(!isLoggedIn && unauthAction && screenName != 'Home'){
      unauthAction(true)
    } else {
      // console.log(navigation)
      navigation.navigate(screenName)
    }
  }
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', margin: 10, shadowColor: '#ccc', shadowOffset: {width: 3, height: 3}, shadowOpacity: 0.5}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white', paddingVertical: 10, paddingLeft: 15, paddingRight: 5, borderRadius: 10, width: Dimensions.get('window').width - 40}}>
        <TouchableOpacity onPress={() => handlePress("Home")} style={stylesheet.style_Wallet}>
          <Image 
            source={require('../../assets/images/home.png')}
            style={[{ width: 35, height: 35 }, currentScreen == 'Home' && { tintColor: '#1DA1F2' }]} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('AddProperty1')} style={stylesheet.style_Card}>
          <Image 
            source={require('../../assets/images/add_property.png')}
            style={[{ width: 45, height: 45 }, currentScreen == 'AddProperty1' && { tintColor: '#1DA1F2' }]} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('FavScreen')} style={stylesheet.style_Movimientos_2}>
          <Image 
            source={require('../../assets/images/favourities.png')}
            style={[{ width: 45, height: 45 }, currentScreen == 'FavScreen' && { tintColor: '#1DA1F2' }]} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('SearchScreenAuction')} style={stylesheet.style_Movimientos}>
          <Image 
            source={require('../../assets/images/auctions.png')}
            style={[{ width: 45, height: 45 }, currentScreen == 'SearchScreenAuction' && { tintColor: '#1DA1F2' }]} 
          />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => handlePress('SettingsScreen')} style={stylesheet.style_Home}>
          <Image 
            source={require('../../assets/images/more.png')}
            style={[{ width: 45, height: 45 }, currentScreen == 'SettingsScreen' && { tintColor: '#1DA1F2' }]} 
          />
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

const stylesheet = StyleSheet.create({
  style_SettingsScreen: {
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
    height: 130,
    borderRadius: 0,
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
    backgroundColor: '#292071'
  },
  style_Group_492: {
    position: 'absolute',
    width: 274,
    height: 60,
    transform: [{ translateX: 85 }, { translateY: 56 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_healthicons_ui_user_profile_outline: {
    position: 'absolute',
    width: 38,
    height: 38,
    borderRadius: 0,
    overflow: 'hidden',
    left: 236,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group: {
    position: 'absolute',
    width: 31.66666603088379,
    height: 31.66666603088379,
    transform: [
      { translateX: 3.1666717529296875 },
      { translateY: 3.166748046875 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 1)',
    // width: "auto",
    height: 22.959125518798828,
    borderRadius: 0,
    left: 5.5416717529296875,
    right: 5.541660308837891,
    transform: [
      { translateX: 0 },
      { translateY: 5.541748046875 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_2: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 1)',
    // width: "auto",
    height: 31.66666603088379,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style______________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 164,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: 0
  },
  style_Group_502: {
    position: 'absolute',
    width: 145,
    height: 23,
    transform: [{ translateX: 81 }, { translateY: 37 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style__966_5664616316: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 59,
    // right: "auto",
    top: 6,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: 0
  },
  style_Group_486: {
    position: 'absolute',
    width: 54,
    height: 23,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_81: {
    position: 'absolute',
    width: 54,
    height: 23,
    borderRadius: 8,
    opacity: 0.5,
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(29, 161, 242, 0.5)'
  },
  style_____: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 16,
    // right: "auto",
    top: 6,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: 0
  },
  style______________________________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 16,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: 0
  },
  style_carbon_edit: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 0,
    overflow: 'hidden',
    left: -26,
    // right: "auto",
    top: 15,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)',
    display: 'none'
  },
  style_Vector_3: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 1)',
    // width: "auto",
    height: 14.625,
    borderRadius: 0,
    left: 1.125,
    right: 1.125,
    transform: [{ translateX: 0 }, { translateY: 1.125 }, { rotate: '0deg' }]
  },
  style_Group_487: {
    position: 'absolute',
    width: 101,
    height: 100,
    transform: [{ translateX: 258 }, { translateY: 195 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_464: {
    position: 'absolute',
    width: 101,
    height: 100,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74: {
    position: 'absolute',
    width: 101,
    height: 100,
    borderRadius: 8,
    opacity: 1,
    borderWidth: 1,
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_house_1: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 0,
    overflow: 'hidden',
    left: 34,
    // right: "auto",
    top: 20,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group_2: {
    position: 'absolute',
    width: 31.03624725341797,
    height: 30,
    transform: [
      { translateX: 0.0345458984375 },
      { translateY: 1 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_4: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 30,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Vector_5: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 8.275861740112305,
    borderRadius: 0,
    left: 6.72503662109375,
    right: 17.069831371307373,
    transform: [
      { translateX: 0 },
      { translateY: 16.5517578125 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_6: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 1.034482717514038,
    borderRadius: 0,
    left: 17.94580078125,
    right: 12.05596375465393,
    transform: [
      { translateX: 0 },
      { translateY: 23.03857421875 },
      { rotate: '-67.49999576177215deg' }
    ]
  },
  style________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 33,
    // right: "auto",
    top: 74,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Group_490: {
    position: 'absolute',
    width: 101,
    height: 100,
    transform: [{ translateX: 137 }, { translateY: 195 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_464_2: {
    position: 'absolute',
    width: 101,
    height: 100,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74_2: {
    position: 'absolute',
    width: 101,
    height: 100,
    borderRadius: 8,
    opacity: 1,
    borderWidth: 1,
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_Bid_1: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 0,
    overflow: 'hidden',
    left: 33.5,
    // right: "auto",
    top: 20,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group_3: {
    position: 'absolute',
    width: 31.999963760375977,
    height: 31.9997501373291,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_4: {
    position: 'absolute',
    width: 1.250203013420105,
    height: 1.249843716621399,
    transform: [
      { translateX: 6.294042587280273 },
      { translateY: 10.713623046875 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_5: {
    position: 'absolute',
    width: 1.250203013420105,
    height: 1.249843716621399,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_7: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 1.249843716621399,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Group_6: {
    position: 'absolute',
    width: 17.499374389648438,
    height: 7.499750137329102,
    transform: [
      { translateX: 0 },
      { translateY: 24.499267578125 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_7: {
    position: 'absolute',
    width: 17.499374389648438,
    height: 7.499750137329102,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_8: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 7.499750137329102,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Group_8: {
    position: 'absolute',
    width: 31.9986515045166,
    height: 31.9997501373291,
    transform: [
      { translateX: 0.001312255859375 },
      { translateY: 0 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_9: {
    position: 'absolute',
    width: 31.9986515045166,
    height: 31.9997501373291,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_9: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 31.9997501373291,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Group_10: {
    position: 'absolute',
    width: 3.9017181396484375,
    height: 3.9016716480255127,
    transform: [
      { translateX: 8.061592102050781 },
      { translateY: 6.294189453125 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_11: {
    position: 'absolute',
    width: 3.9017181396484375,
    height: 3.9016716480255127,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_10: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 3.9016716480255127,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 30,
    // right: "auto",
    top: 74,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Group_491: {
    position: 'absolute',
    width: 101,
    height: 100,
    transform: [{ translateX: 16 }, { translateY: 195 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_464_3: {
    position: 'absolute',
    width: 101,
    height: 100,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74_3: {
    position: 'absolute',
    width: 101,
    height: 100,
    borderRadius: 8,
    opacity: 1,
    borderWidth: 1,
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_Setting_1: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 0,
    overflow: 'hidden',
    left: 34,
    // right: "auto",
    top: 20,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group_12: {
    position: 'absolute',
    width: 32,
    height: 32,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_13: {
    position: 'absolute',
    width: 21.33333396911621,
    height: 21.33333396911621,
    transform: [
      { translateX: 0 },
      { translateY: 10.666748046875 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_14: {
    position: 'absolute',
    width: 21.33333396911621,
    height: 21.33333396911621,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_11: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 21.33333396911621,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Group_15: {
    position: 'absolute',
    width: 9.60226058959961,
    height: 9.603201866149902,
    transform: [
      { translateX: 5.863899230957031 },
      { translateY: 16.533447265625 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_16: {
    position: 'absolute',
    width: 9.60226058959961,
    height: 9.603201866149902,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_12: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 9.603201866149902,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Group_17: {
    position: 'absolute',
    width: 26.182584762573242,
    height: 26.183401107788086,
    transform: [
      { translateX: 5.817413330078125 },
      { translateY: 0 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_18: {
    position: 'absolute',
    width: 26.182584762573242,
    height: 26.183401107788086,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_13: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 26.183401107788086,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Group_19: {
    position: 'absolute',
    width: 11.98214054107666,
    height: 11.995264053344727,
    transform: [
      { translateX: 12.54791259765625 },
      { translateY: 7.469970703125 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_20: {
    position: 'absolute',
    width: 11.98214054107666,
    height: 11.995264053344727,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_14: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 11.995264053344727,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style__________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 28,
    // right: "auto",
    top: 74,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Group_493: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 17,
    transform: [{ translateX: 16 }, { translateY: 154 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style____________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 138,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 14,
    color: 'rgba(14, 14, 14, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_Line_6: {
    position: 'absolute',
    width: 130,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(200, 200, 200, 1)',
    left: 213,
    // right: "auto",
    top: 8,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Line_7: {
    position: 'absolute',
    width: 130,
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(200, 200, 200, 1)',
    left: 0,
    // right: "auto",
    top: 8,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Group_495: {
    position: 'absolute',
    width: 132,
    height: 32,
    transform: [{ translateX: 219 }, { translateY: 596 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_____________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 0,
    // right: "auto",
    top: 8,
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
  style_Logout_1: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 0,
    overflow: 'hidden',
    left: 100,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group_21: {
    position: 'absolute',
    width: 31.999963760375977,
    height: 29.20037269592285,
    transform: [
      { translateX: 0 },
      { translateY: 1.39990234375 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_22: {
    position: 'absolute',
    width: 22.675277709960938,
    height: 6.704448699951172,
    transform: [
      { translateX: 9.324691772460938 },
      { translateY: 11.24755859375 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_23: {
    position: 'absolute',
    width: 22.675277709960938,
    height: 6.704448699951172,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_15: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 6.704448699951172,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Group_24: {
    position: 'absolute',
    width: 27.37266731262207,
    height: 29.20037269592285,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_25: {
    position: 'absolute',
    width: 27.37266731262207,
    height: 29.20037269592285,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_16: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 29.20037269592285,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_____________2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 296,
    // right: "auto",
    top: 335,
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
  style____________9_____8__: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 262,
    // right: "auto",
    top: 368,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(131, 131, 131, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_________2: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 326,
    // right: "auto",
    top: 665,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(131, 131, 131, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style________________0_0_1__: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 16,
    // right: "auto",
    top: 665,
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
  style______________________9_____8__: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 207,
    // right: "auto",
    top: 401,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 12,
    color: 'rgba(131, 131, 131, 1)',
    textAlign: 'right',
    textAlignVertical: 'top',
    letterSpacing: -0.30000001192092896
  },
  style_0507691011: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 16,
    // right: "auto",
    top: 366,
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
  style_80012345451: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 16,
    // right: "auto",
    top: 399,
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
  style_Line_8: {
    position: 'absolute',
    width: '100%',
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(200, 200, 200, 1)',
    left: 0,
    // right: "auto",
    top: 315,
    // bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '-0.000005476264598103419deg' }
    ]
  },
  style_Line_12: {
    position: 'absolute',
    width: '100%',
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(200, 200, 200, 1)',
    left: 0,
    // right: "auto",
    top: 435,
    // bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '-0.000005476264598103419deg' }
    ]
  },
  style_Line_10: {
    position: 'absolute',
    width: '100%',
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(200, 200, 200, 1)',
    left: 0,
    // right: "auto",
    top: 583,
    // bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '-0.000005476264598103419deg' }
    ]
  },
  style_Line_11: {
    position: 'absolute',
    width: '100%',
    height: 0,
    // borderRadius: undefined,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(200, 200, 200, 1)',
    left: 0,
    // right: "auto",
    top: 641,
    // bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '-0.000005476264598103419deg' }
    ]
  },
  style_AppBar: {
    // position: "absolute",
    width: 360,
    // height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(150, 150, 150, 1)',
    // left: 8,
    // right: "auto",
    // top: 716,
    // bottom: "auto",
    // transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    shadowColor: 'rgb(108, 99, 171)',
    shadowOffset: {
      width: -10,
      height: 10
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 12,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 12,
    // marginRight:10,
    // marginLeft:10,
    alignSelf:"center",
    display: 'flex',
    flexDirection: 'row'
  },
  style_Home: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 0,
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    marginRight: 12
  },
  style_Group_496: {
    position: 'relative',
    width: 59,
    height: 48,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
    minWidth: 0,
    flexShrink: 0
  },
  style_Rectangle_80: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderRadius: 8,
    opacity: 1,
    left: 5,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
    // backgroundColor: "rgba(29, 161, 242, 1)",
  },
  style_More_1: {
    position: 'absolute',
    width: 26,
    height: 26,
    borderRadius: 0,
    overflow: 'hidden',
    left: 16.5,
    // right: "auto",
    top: 2,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group_26: {
    position: 'absolute',
    width: 26,
    height: 26,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_27: {
    position: 'absolute',
    width: 26,
    height: 26,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_28: {
    position: 'absolute',
    width: 26,
    height: 26,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_29: {
    position: 'absolute',
    width: 26,
    height: 26,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_17: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 1)',
    // width: "auto",
    height: 26,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Vector_18: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 1)',
    // width: "auto",
    height: 3.25,
    borderRadius: 0,
    left: 11.375,
    right: 11.375,
    transform: [{ translateX: 0 }, { translateY: 11.375 }, { rotate: '0deg' }]
  },
  style_Vector_19: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 1)',
    // width: "auto",
    height: 3.25,
    borderRadius: 0,
    left: 17.0625,
    right: 5.6875,
    transform: [{ translateX: 0 }, { translateY: 11.375 }, { rotate: '0deg' }]
  },
  style_Vector_20: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 1)',
    // width: "auto",
    height: 3.25,
    borderRadius: 0,
    left: 5.6875,
    right: 17.0625,
    transform: [{ translateX: 0 }, { translateY: 11.375 }, { rotate: '0deg' }]
  },
  style_______: {
    position: 'absolute',
    width: 59,
    height: 14,
    left: 0,
    // right: "auto",
    transform: [{ translateX: 0 }, { translateY: 34 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 700,
    textDecorationLine: 'none',
    fontSize: 10,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: 0
  },
  style_Movimientos: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 0,
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    marginRight: 12
  },
  style_Group_485: {
    position: 'relative',
    width: 59,
    height: 48,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
    minWidth: 0,
    flexShrink: 0
  },
  style_Bid_1_2: {
    position: 'absolute',
    width: 26,
    height: 26,
    borderRadius: 0,
    overflow: 'hidden',
    left: 16.5,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group_30: {
    position: 'absolute',
    width: 25.999971389770508,
    height: 25.999797821044922,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_31: {
    position: 'absolute',
    width: 1.0157899856567383,
    height: 1.0154980421066284,
    transform: [
      { translateX: 5.113910675048828 },
      { translateY: 8.704833984375 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_32: {
    position: 'absolute',
    width: 1.0157899856567383,
    height: 1.0154980421066284,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_21: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 1.0154980421066284,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Group_33: {
    position: 'absolute',
    width: 14.218241691589355,
    height: 6.0935468673706055,
    transform: [
      { translateX: 0 },
      { translateY: 19.905517578125 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_34: {
    position: 'absolute',
    width: 14.218241691589355,
    height: 6.0935468673706055,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_22: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 6.0935468673706055,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Group_35: {
    position: 'absolute',
    width: 25.998905181884766,
    height: 25.999797821044922,
    transform: [
      { translateX: 0.001064300537109375 },
      { translateY: 0 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_36: {
    position: 'absolute',
    width: 25.998905181884766,
    height: 25.999797821044922,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_23: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 25.999797821044922,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Group_37: {
    position: 'absolute',
    width: 3.1701459884643555,
    height: 3.1701083183288574,
    transform: [
      { translateX: 6.550045013427734 },
      { translateY: 5.114013671875 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_38: {
    position: 'absolute',
    width: 3.1701459884643555,
    height: 3.1701083183288574,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_24: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 3.1701083183288574,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style__________2: {
    position: 'absolute',
    width: 59,
    height: 14,
    left: 0,
    // right: "auto",
    transform: [{ translateX: 0 }, { translateY: 34 }, { rotate: '0deg' }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 10,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: 0
  },
  style_Movimientos_2: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 0,
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    marginRight: 12
  },
  style_Heart_2: {
    position: 'relative',
    width: 26,
    height: 26,
    borderRadius: 0,
    minWidth: 0,
    overflow: 'hidden',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 0)',
    flexShrink: 0,
    marginBottom: 8
  },
  style_Group_39: {
    position: 'absolute',
    width: 24.27800941467285,
    height: 19.99797821044922,
    transform: [
      { translateX: 0.8609962463378906 },
      { translateY: 3 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_25: {
    position: 'absolute',
    color: 'rgba(0,0,0,0)',
    // width: "auto",
    height: 19.99797821044922,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_________3: {
    position: 'relative',
    width: 59,
    height: 14,
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 10,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: 0,
    flexShrink: 0
  },
  style_Card: {
    position: 'relative',
    // width: "auto",
    // height: "auto",
    borderRadius: 0,
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    marginRight: 12
  },
  style_Request_1: {
    position: 'relative',
    width: 26,
    height: 26,
    borderRadius: 0,
    minWidth: 0,
    overflow: 'hidden',
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(255, 255, 255, 0)',
    flexShrink: 0,
    marginBottom: 8
  },
  style_Group_40: {
    position: 'absolute',
    width: 26,
    height: 26,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_26: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 1.5234375,
    borderRadius: 0,
    left: 17.133514404296875,
    right: 7.343048095703125,
    transform: [
      { translateX: 0 },
      { translateY: 11.014404296875 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_27: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 6.418670654296875,
    borderRadius: 0,
    left: 15.09393310546875,
    right: 5.3032684326171875,
    transform: [
      { translateX: 0 },
      { translateY: 3.671630859375 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_28: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 13.76171875,
    borderRadius: 0,
    left: 0,
    right: 16.317642211914062,
    transform: [
      { translateX: 0 },
      { translateY: 12.23828125 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_29: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 18.658187866210938,
    borderRadius: 0,
    left: 9.790664672851562,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style___________: {
    position: 'relative',
    width: 59,
    height: 14,
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    fontFamily: 'Tajawal',
    // fontWeight: 500,
    textDecorationLine: 'none',
    fontSize: 10,
    color: 'rgba(41, 32, 113, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    letterSpacing: 0,
    flexShrink: 0
  },
  style_Wallet: {
    position: 'relative',
    width: 59,
    height: 48,
    borderRadius: 0,
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0
  },
  style_Group_425: {
    position: 'relative',
    width: 59,
    height: 46,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
    minWidth: 0,
    flexShrink: 0
  },
  style_Ellipse_1: {
    position: 'absolute',
    width: 46,
    height: 46,
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 6,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Plus: {
    position: 'absolute',
    width: 59,
    height: 46,
    borderRadius: 0,
    overflow: 'hidden',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Home_2: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 0,
    overflow: 'hidden',
    left: 15,
    // right: "auto",
    transform: [{ translateX: 0 }, { translateY: 9 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group_41: {
    position: 'absolute',
    width: 27.58649253845215,
    height: 27.28192901611328,
    transform: [
      { translateX: 0.000091552734375 },
      { translateY: 0 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style__x34_7: {
    position: 'absolute',
    width: 27.58649253845215,
    height: 27.28192901611328,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_30: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 27.28192901611328,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Vector_31: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 4.547180652618408,
    borderRadius: 0,
    left: 11.388626098632812,
    right: 11.650685787200928,
    transform: [
      { translateX: 0 },
      { translateY: 11.634033203125 },
      { rotate: '0deg' }
    ]
  },
  style_Group_464_4: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 48,
    transform: [{ translateX: 16 }, { translateY: 455 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74_4: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 48,
    borderRadius: 8,
    opacity: 1,
    borderWidth: 1,
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_Privacy_policy_1: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 0,
    overflow: 'hidden',
    left: 307,
    // right: "auto",
    top: 12,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group_42: {
    position: 'absolute',
    width: 23.774560928344727,
    height: 23.999963760375977,
    transform: [
      { translateX: 0.1127471923828125 },
      { translateY: 0 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Group_43: {
    position: 'absolute',
    width: 23.774560928344727,
    height: 23.999963760375977,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_32: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 0.703125,
    borderRadius: 0,
    left: 5.9576568603515625,
    right: 12.237419128417969,
    transform: [
      { translateX: 0 },
      { translateY: 6.359130859375 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_33: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 3.9617815017700195,
    borderRadius: 0,
    left: 15.412765502929688,
    right: 4.901295185089111,
    transform: [
      { translateX: 0 },
      { translateY: 9.868896484375 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_34: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 3.9328908920288086,
    borderRadius: 0,
    left: 14.318939208984375,
    right: 3.8074660301208496,
    transform: [
      { translateX: 0 },
      { translateY: 13.74658203125 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_35: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 23.999963760375977,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_________________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 187,
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
    letterSpacing: -0.30000001192092896
  },
  style_Group_496_2: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 48,
    transform: [{ translateX: 16 }, { translateY: 515 }, { rotate: '0deg' }],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Rectangle_74_5: {
    position: 'absolute',
    width: Dimensions.get("window").width - 20,
    height: 48,
    borderRadius: 8,
    opacity: 1,
    borderWidth: 1,
    borderColor: 'rgba(41, 32, 113, 1)',
    left: 0,
    // right: "auto",
    top: 0,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  style_Terms_2: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 0,
    overflow: 'hidden',
    left: 307,
    // right: "auto",
    top: 12,
    // bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  style_Group_44: {
    position: 'absolute',
    width: 23.991466522216797,
    height: 21.596500396728516,
    transform: [
      { translateX: 0.0085296630859375 },
      { translateY: 1.2060546875 },
      { rotate: '0deg' }
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  style_Vector_36: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 21.596500396728516,
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }]
  },
  style_Vector_37: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 14.658478736877441,
    borderRadius: 0,
    left: 20.46856689453125,
    right: 1.1475350856781006,
    transform: [
      { translateX: 0 },
      { translateY: 6.697265625 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_38: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 0.6863967180252075,
    borderRadius: 0,
    left: 20.549301147460938,
    right: 1.2335550785064697,
    transform: [
      { translateX: 0 },
      { translateY: 5.454833984375 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_39: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 4.84720516204834,
    borderRadius: 0,
    left: 5.6160430908203125,
    right: 13.563068866729736,
    transform: [
      { translateX: 0 },
      { translateY: 4.9736328125 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_40: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 3.1174285411834717,
    borderRadius: 0,
    left: 6.917938232421875,
    right: 13.005448341369629,
    transform: [
      { translateX: 0 },
      { translateY: 5.257568359375 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_41: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 0.6869480609893799,
    borderRadius: 0,
    left: 11.469940185546875,
    right: 7.680381774902344,
    transform: [
      { translateX: 0 },
      { translateY: 9.13427734375 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_42: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 0.6882151365280151,
    borderRadius: 0,
    left: 12.691513061523438,
    right: 7.6928088665008545,
    transform: [
      { translateX: 0 },
      { translateY: 4.9736328125 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_43: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 0.6871758699417114,
    borderRadius: 0,
    left: 11.469940185546875,
    right: 7.680381774902344,
    transform: [
      { translateX: 0 },
      { translateY: 7.74658203125 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_44: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 0.6872499585151672,
    borderRadius: 0,
    left: 11.469940185546875,
    right: 7.680381774902344,
    transform: [
      { translateX: 0 },
      { translateY: 6.360595703125 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_45: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 0.6882151365280151,
    borderRadius: 0,
    left: 11.482620239257812,
    right: 7.692780017852783,
    transform: [
      { translateX: 0 },
      { translateY: 15.51708984375 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_46: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 0.6894278526306152,
    borderRadius: 0,
    left: 12.692733764648438,
    right: 7.692800045013428,
    transform: [
      { translateX: 0 },
      { translateY: 11.355224609375 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_47: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 0.6897307634353638,
    borderRadius: 0,
    left: 11.482391357421875,
    right: 7.692780494689941,
    transform: [
      { translateX: 0 },
      { translateY: 14.1298828125 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_48: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 0.6897307634353638,
    borderRadius: 0,
    left: 11.482391357421875,
    right: 7.692780494689941,
    transform: [
      { translateX: 0 },
      { translateY: 12.742431640625 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_49: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 4.847508430480957,
    borderRadius: 0,
    left: 5.6160430908203125,
    right: 13.563068866729736,
    transform: [
      { translateX: 0 },
      { translateY: 11.357666015625 },
      { rotate: '0deg' }
    ]
  },
  style_Vector_50: {
    position: 'absolute',
    color: 'rgba(41, 32, 113, 1)',
    // width: "auto",
    height: 3.1173601150512695,
    borderRadius: 0,
    left: 6.917938232421875,
    right: 13.005448341369629,
    transform: [
      { translateX: 0 },
      { translateY: 11.642578125 },
      { rotate: '0deg' }
    ]
  },
  style_______________: {
    position: 'absolute',
    // width: "auto",
    // height: "auto",
    left: 177,
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
    letterSpacing: -0.30000001192092896
  }
})
