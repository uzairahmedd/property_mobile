/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
  CompositeScreenProps,
  NavigatorScreenParams
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export interface RootStackParamList {
  Root: NavigatorScreenParams<RootTabParamList> | undefined
  Modal: undefined
  MapScreen: { data: any }
  SignUpScreen: { data: any }
  OTPScreen: { data: any }
  PropertyDetail: { data: any }
  Appointment: { navigation: any }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export interface RootTabParamList {
  Home: undefined
  AddProperty: undefined
}

export type RootDrawerParamList = {
  Home: string;
  AddProperty: undefined
  Login: undefined
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >
