import { StatusBar } from 'expo-status-bar'
import { I18n } from 'i18n-js'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { I18nManager } from 'react-native'
import {
  useFonts,
  Tajawal_200ExtraLight,
  Tajawal_300Light,
  Tajawal_400Regular,
  Tajawal_500Medium,
  Tajawal_700Bold,
  Tajawal_800ExtraBold,
  Tajawal_900Black
} from '@expo-google-fonts/tajawal'
import OTPScreen from './screens/OTPScreen'

export default function App() {
  I18nManager.allowRTL(true)
  I18nManager.forceRTL(true)
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  const [fontsLoaded] = useFonts({
    Tajawal_200ExtraLight,
    Tajawal_300Light,
    Tajawal_400Regular,
    Tajawal_500Medium,
    Tajawal_700Bold,
    Tajawal_800ExtraBold,
    Tajawal_900Black,
    'SF Pro Text':
      'https://fontsfree.net//wp-content/fonts/basic/sans-serif/FontsFree-Net-SFProText-Regular.ttf',
    Tajawal: Tajawal_400Regular
  })

  if (!isLoadingComplete || !fontsLoaded) {
    return null
  } else {
    return (
      <PaperProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </PaperProvider>
    )
  }
}
