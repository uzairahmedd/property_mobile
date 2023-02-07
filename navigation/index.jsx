/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  Pressable,
  Image,
  I18nManager,
  Touchable,
  StyleProp,
  View,
} from "react-native";
import Add from "../assets/svg/Add.svg";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import PropertyDetailScreen from "../screens/PropertyDetailScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import HomeScreen from "../screens/HomeScreen";
import AddPropertyScreen from "../screens/AddPropertyScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import i18n from "../locale/index";
import { Text } from "../components/Themed";
import SignUpScreen from "../screens/SignUpScreen";
import OTPScreen from "../screens/OTPScreen";

import AddOfferScreen from "../screens/AddOfferScreen";
import AddProperty1 from "../screens/AddProperty1";
import AddProperty2 from "../screens/AddProperty2";
import AddProperty3 from "../screens/AddProperty3";
import AddProperty4 from "../screens/AddProperty4";
import AddProperty5 from "../screens/AddProperty5";
import AddProperty6 from "../screens/AddProperty6";
import AddProperty7 from "../screens/AddProperty7";
import AddProperty8 from "../screens/AddProperty8";
import DateBookScreen from "../screens/DateBookScreen";
import DetailsScreen from "../screens/DetailsScreen";
import FavScreen from "../screens/FavScreen";
import MapScreen from "../screens/MapScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import MyAuctionsScreen from "../screens/MyAuctionsScreen";
import MyPropertiesScreen from "../screens/MyPropertiesScreen";
import PrivacyScreen from "../screens/PrivacyScreen";
import SearchScreen from "../screens/SearchScreen";
import SearchScreenAuction from "../screens/SearchScreenAuction";
import SettingsScreen from "../screens/SettingsScreen";
import TermsScreen from "../screens/TermsScreen";

import PriceModel from "../components/models/PriceModel";
import AppBar from "../components/models/AppBar";
import AuctionStatusModel from "../components/models/AuctionStatusMode";
import CityModel from "../components/models/CityModel";
import FloorModel from "../components/models/FloorModel";
import PhoneModel from "../components/models/PhoneModel";
import PropertyTypeModel from "../components/models/PropertyTypeModel";
import RoomsModel from "../components/models/RoomsModel";
import SortModel from "../components/models/SortModel";
import NavBar from "../components/models/NavBar";

export default function Navigation({ colorScheme, isLoggedIn }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

const Logo = ({ style = {} }) => {
  return (
    <Image
      style={[{ width: 110, height: 30, margin: 10 }, style]}
      resizeMode="contain"
      source={require("../assets/images/logo.png")}
    />
  );
};

function RootNavigator({isLoggedIn}) {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="Root"
        component={(props) => <BottomTabNavigator {...props} isLoggedIn={isLoggedIn} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PropertyDetail"
        component={PropertyDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                style={[{ width: 30, height: 40 }]}
                resizeMode="contain"
                source={require("../assets/images/icon-back.png")}
              />
            </Pressable>
          ),
          headerTransparent: true,
          headerTitle: "",
        })}
      />
      <Stack.Group screenOptions={{ presentation: "modal", headerTitle: "", headerShown: false }}>
        <Stack.Screen name="status" component={ModalScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
// const BottomTab = createBottomTabNavigator();
const BottomTab = createNativeStackNavigator();

function BottomTabNavigator({isLoggedIn}) {
  const colorScheme = useColorScheme();
  // let initRoute = "AddOfferScreen";
  // initRoute = "AddProperty1";
  // initRoute = "AddProperty2";
  // initRoute = "AddProperty3";
  // initRoute = "AddProperty4";
  // initRoute = "AddProperty5";
  // initRoute = "AddProperty6";
  // initRoute = "AddProperty7";
  // initRoute = "AddProperty8";
  // initRoute = "DateBookScreen";
  // initRoute = "DetailsScreen";
  // initRoute = "FavScreen";
  // initRoute = "MapScreen";
  // initRoute = "MyAccountScreen";
  // initRoute = "MyAuctionsScreen";
  // initRoute = "MyPropertiesScreen";
  // initRoute = "PrivacyScreen";
  // initRoute = "SearchScreen";
  // initRoute = "SearchScreenAuction";
  // initRoute = "SettingsScreen";
  // initRoute = "TermsScreen";
  return (
    <BottomTab.Navigator
      // initialRouteName={initRoute}
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
      
    >
      <BottomTab.Screen
        name="Home"
        options={({ navigation }) => ({
          title: "Home",
          // headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => <Logo />,
          headerLeft: () => {
            return (
              <View
                style={{ flexDirection: "row", alignItems: "center"}}
              >
                <AntDesign
                  name="pluscircleo"
                  size={14}
                  style={{ padding: 10 }}
                />
                <Text>{i18n.t("أضف إعلان")}</Text>
              </View>
            );
          },
          headerTitle: "",
        })}
      >
        { (props) => <HomeScreen {...props} isLoggedIn={isLoggedIn} /> }
      </BottomTab.Screen>
      <BottomTab.Screen
        name="AddProperty"
        component={() => null}
        options={{
          headerShown: false,
          title: "Add Property",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-group-plus"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen name="AddOfferScreen" options={{ headerShown: false }} component={AddOfferScreen} />
      <BottomTab.Screen name="AddProperty1" options={{ headerShown: false }} component={AddProperty1} />
      <BottomTab.Screen name="AddProperty2" options={{ headerShown: false }} component={AddProperty2} />
      <BottomTab.Screen name="AddProperty3" options={{ headerShown: false }} component={AddProperty3} />
      <BottomTab.Screen name="AddProperty4" options={{ headerShown: false }} component={AddProperty4} />
      <BottomTab.Screen name="AddProperty5" options={{ headerShown: false }} component={AddProperty5} />
      <BottomTab.Screen name="AddProperty6" options={{ headerShown: false }} component={AddProperty6} />
      <BottomTab.Screen name="AddProperty7" options={{ headerShown: false }} component={AddProperty7} />
      <BottomTab.Screen name="AddProperty8" options={{ headerShown: false }} component={AddProperty8} />
      <BottomTab.Screen name="DateBookScreen" options={{ headerShown: false }} component={DateBookScreen} />
      <BottomTab.Screen name="DetailsScreen" options={{ headerShown: false }} component={DetailsScreen} />
      <BottomTab.Screen name="FavScreen" options={{ headerShown: false }} component={FavScreen} />
      {/* <BottomTab.Screen name="MapScreen" options={{ headerShown: false }} component={MapScreen} /> */}
      <BottomTab.Screen name="MyAccountScreen" options={{ headerShown: false }} component={MyAccountScreen} />
      <BottomTab.Screen name="MyAuctionsScreen" options={{ headerShown: false }} component={MyAuctionsScreen} />
      <BottomTab.Screen name="MyPropertiesScreen" options={{ headerShown: false }} component={MyPropertiesScreen} />
      <BottomTab.Screen name="PrivacyScreen" options={{ headerShown: false }} component={PrivacyScreen} />
      <BottomTab.Screen name="SearchScreen" options={{ headerShown: false }} component={SearchScreen} />
      <BottomTab.Screen name="SearchScreenAuction" options={{ headerShown: false }} component={SearchScreenAuction} />
      <BottomTab.Screen name="SettingsScreen" options={{ headerShown: false }} component={SettingsScreen} />
      <BottomTab.Screen name="TermsScreen" options={{ headerShown: false }} component={TermsScreen} />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
