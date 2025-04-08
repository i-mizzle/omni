import { store } from '@/store';
import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider, useTheme } from './providers/ThemeProvider';
import { useFonts } from 'expo-font';
import { Sora_400Regular, Sora_600SemiBold, Sora_700Bold } from '@expo-google-fonts/sora';

import { colors } from '@/static/colors';
import FormButton from './components/elements/form/FormButton';
import MoonIcon from './components/elements/icons/MoonIcon';
import SunIcon from './components/elements/icons/SunIcon';
import { useRouter } from 'expo-router';
import { useGlobalStyles } from './hooks/useGlobalStyles';

function HomeScreen() {
  const { theme, setMode } = useTheme();
  const globalStyles = useGlobalStyles()
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? colors.night : colors.whiteSmoke,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 38
    },
    logo: {
      fontFamily: 'Sora_600SemiBold',
      fontSize: 20,
      // fontWeight: 'bold',
      color: theme === 'dark' ? colors.whiteSmoke : colors.night,
      marginBottom: 10
    },
    innerView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: 24
      // height: '100%'
    },
    text: {
      fontFamily: 'Sora_400Regular',
      // marginBottom: 20,
      color: theme === 'dark' ? colors.whiteSmoke : colors.outerSpace,
    },
    signupLink: {
      fontFamily: 'Sora_400Regular',
      marginBottom: 20,
      color: theme === 'dark' ? colors.whiteSmoke : colors.outerSpace,
    },
    themeToggler: {
      backgroundColor: theme === 'light' ? '#fff' : '#000', 
      width: 50, 
      height: 50, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 50, 
      shadowColor: theme === 'light' ? '#000' : colors.burntSienna,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 8
    }
  });

  const router = useRouter();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.innerView}>
          <View 
            style={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between', 
              paddingTop: 50, 
              backgroundColor: theme === 'dark' ? colors.night : colors.whiteSmoke,
              // paddingHorizontal: 20,
              // paddingVertical: 10,
              // position: 'absolute'
            }}
          >
          {theme === 'light' &&
            <TouchableOpacity onPress={() => setMode('dark')} style={styles.themeToggler}>
              <MoonIcon width={20} height={20} color={colors.delftBlue} />
            </TouchableOpacity>
          }
          {theme === 'dark' && 
            <TouchableOpacity onPress={() => setMode('light')} style={styles.themeToggler}>
              <SunIcon width={20} height={20} color={colors.burntSienna} />
            </TouchableOpacity>
          }

          <Text style={styles.logo}>omni</Text>

          </View>

          <View>
            <Text style={globalStyles.title}>Your funds, no borders.</Text>
            
            <Text style={{...styles.text, marginBottom: 20}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
          

          <View>
            <FormButton
              buttonLabel="Log in to your account"
              processing={false}
              disabled={false}
              buttonAction={() => router.replace('/views/auth/Login')}
            />

            <View 
              style={{
                flexDirection: 'row', 
                gap: 3, 
                marginTop: 20, 
                alignItems: 'center'
              }}>
              <Text style={{...styles.text}}>
                Don't have an account yet?{' '}
              </Text>
              <TouchableOpacity onPress={() => {router.replace('/views/auth/Signup')}}>
                <Text style={{ 
                    color: colors.burntSienna, 
                    fontFamily: 'Sora_600SemiBold'
                  }}>
                  Create an account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          

        </View>
      </View>
    </>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Onest': require('../assets/fonts/Onest.ttf'),
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'SpaceMono-Bold': require('../assets/fonts/SpaceMono-Bold.ttf'),
    'Sora': require('../assets/fonts/Sora.ttf'),
    Sora_400Regular,
    Sora_600SemiBold,
    Sora_700Bold,
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <Provider store={store}>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </Provider>
  );
}
