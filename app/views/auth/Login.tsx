import FormButton from '@/app/components/elements/form/FormButton';
import PasswordField from '@/app/components/elements/form/PasswordField';
import TextField from '@/app/components/elements/form/TextField';
import ArrowIcon from '@/app/components/elements/icons/ArrowIcon';
import MoonIcon from '@/app/components/elements/icons/MoonIcon';
import SunIcon from '@/app/components/elements/icons/SunIcon';
import { useGlobalStyles } from '@/app/hooks/useGlobalStyles';
import { useTheme } from '@/app/providers/ThemeProvider';
import { colors } from '@/static/colors';
import { useRouter } from 'expo-router';
import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet, Text } from 'react-native';

const Login = () => {
    const { theme, setMode } = useTheme();
    const globalStyles = useGlobalStyles()
    const styles = StyleSheet.create({
        innerView: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 24
            // height: '100%'
          },
        logo: {
            fontFamily: 'Sora_600SemiBold',
            fontSize: 20,
            // fontWeight: 'bold',
            color: theme === 'dark' ? colors.whiteSmoke : colors.night,
            marginBottom: 10,
            marginTop: 10
        },
        text: {
            fontFamily: 'Sora_400Regular',
            // marginBottom: 20,
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
        },
        loginForm: {

        }
    })

    const router = useRouter();
    
    return (
        <>
        <View style={globalStyles.container}>
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

            <View style={styles.loginForm}>
                <TouchableOpacity onPress={() => {router.replace('/')}} style={{
                    marginBottom: 20,
                }}>
                    <ArrowIcon width={20} height={20} color={theme === 'dark' ? colors.burntSienna : colors.night} />
                </TouchableOpacity>
                <Text style={globalStyles.title}>Welcome back!</Text>
                <Text style={{...globalStyles.subTitle, marginBottom: 20}}>
                    You've been missed.{'\n'}Let's get you back into your account.
                </Text>

                <View style={{ marginBottom: 0 }}>
                    {/* {label && <Text style={{ fontSize: 16, marginBottom: 5 }}>{label}</Text>} */}
                    <TextField
                        inputLabel='Email address'
                        inputPlaceholder={`Your registered email address`}
                        preloadValue={''}
                        returnFieldValue={() => { } }
                        requiredField={true}
                        inputType='text' 
                        hasError={false} 
                        disabled={false}
                    />
                    {/* {error && <Text style={{ color: 'red', marginTop: 4 }}>{error}</Text>} */}
                </View>

                <View style={{ marginBottom: 10 }}>
                    {/* {label && <Text style={{ fontSize: 16, marginBottom: 5 }}>{label}</Text>} */}
                    <PasswordField
                        inputLabel='Password'
                        inputPlaceholder={`Your account password`}
                        preloadValue={''}
                        returnFieldValue={() => { } }
                        requiredField={true}
                        inputType='text'
                        hasError={false}
                        disabled={false} 
                        showPasswordMeter={false}
                    />
                    {/* {error && <Text style={{ color: 'red', marginTop: 4 }}>{error}</Text>} */}
                </View>
            </View>
  
            <View>
              <FormButton
                buttonLabel="Log in"
                processing={false}
                disabled={false}
                buttonAction={() => {}}
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
    )
}

export default Login