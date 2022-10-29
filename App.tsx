import { StatusBar } from 'expo-status-bar'
import { I18n } from 'i18n-js'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { I18nManager } from 'react-native'

export default function App() {
  I18nManager.forceRTL(true)
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
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
