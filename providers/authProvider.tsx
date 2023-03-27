import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { I18nManager } from 'react-native';
import * as Updates from "expo-updates";
import { useEffect, useContext, useState, createContext, useMemo } from 'react';

const AuthContext = createContext({
  signIn: async (token: string) => {},
  signOut: () => {},
  signUp: async (data: any) => {},
});

const AuthProvider = ({children, state, dispatch}: any) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        if(!I18nManager.isRTL){
          I18nManager.allowRTL(true);
          I18nManager.forceRTL(true);
          Updates.reloadAsync();
        }
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });

        await AsyncStorage.getItem('auth-token').then(token => {
          dispatch({ type: 'RESTORE_TOKEN', token: token });
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.log('Error: loadResourcesAndDataAsync', e)
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);


  const authContext = useMemo(
    () => ({
      signIn: async (token: string) => {
        dispatch({ type: 'SIGN_IN', token });
      },
      signOut: () => {
        AsyncStorage.multiRemove(['user', 'auth-token'])
        dispatch({ type: 'SIGN_OUT', token: null })
      },
      signUp: async (data: any) => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        {children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext }
export const useAuth = () => useContext(AuthContext)
export default AuthProvider