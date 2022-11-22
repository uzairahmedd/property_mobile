import { StatusBar } from "expo-status-bar";
import { I18n } from "i18n-js";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { I18nManager, View } from "react-native";
import {
  useFonts,
  Tajawal_200ExtraLight,
  Tajawal_300Light,
  Tajawal_400Regular,
  Tajawal_500Medium,
  Tajawal_700Bold,
  Tajawal_800ExtraBold,
  Tajawal_900Black,
} from "@expo-google-fonts/tajawal";
import OTPScreen from "./screens/OTPScreen";
import React from "react";

export default function App() {
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Tajawal_200ExtraLight,
    Tajawal_300Light,
    Tajawal_400Regular,
    Tajawal_500Medium,
    Tajawal_700Bold,
    Tajawal_800ExtraBold,
    Tajawal_900Black,
    "SF Pro Text":
      "https://fontsfree.net//wp-content/fonts/basic/sans-serif/FontsFree-Net-SFProText-Regular.ttf",
    Tajawal: Tajawal_400Regular,
  });

  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    return (
      <PaperProvider>
        <SafeAreaProvider>
          <View style={{ flex:1,paddingTop: 25 }}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </View>
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}
