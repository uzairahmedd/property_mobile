/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import {
  ColorSchemeName,
  Pressable,
  Image,
  I18nManager,
  Touchable,
  StyleProp
} from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import ModalScreen from '../screens/ModalScreen'
import PropertyDetailScreen from '../screens/PropertyDetailScreen'
import AppointmentScreen from '../screens/AppointmentScreen'
import HomeScreen from '../screens/HomeScreen'
import AddPropertyScreen from '../screens/AddPropertyScreen'
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps
} from '../types'
import LinkingConfiguration from './LinkingConfiguration'

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

const Logo = ({ style = {} }: { style: any }) => {
  return (
    <Image
      style={[{ width: 110, height: 40, margin: 10 }, style]}
      resizeMode="contain"
      source={require('../assets/images/logo.png')}
    />
  )
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PropertyDetail"
        component={PropertyDetailScreen}
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
                source={require('../assets/images/icon-back.png')}
              />
            </Pressable>
          ),
          headerTransparent: true,
          headerTitle: ''
        })}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeft: () => <Logo />
        })}
      />
      <BottomTab.Screen
        name="AddProperty"
        component={() => null}
        options={{
          title: 'Add Property',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-group-plus"
              size={24}
              color={color}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}
