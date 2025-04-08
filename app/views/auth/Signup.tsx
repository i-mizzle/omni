import Countdown from '@/app/components/elements/CountDown';
import FormButton from '@/app/components/elements/form/FormButton';
import OTPInput from '@/app/components/elements/form/OtpInput';
import PasswordField from '@/app/components/elements/form/PasswordField';
import TextField from '@/app/components/elements/form/TextField';
import ArrowIcon from '@/app/components/elements/icons/ArrowIcon';
import MoonIcon from '@/app/components/elements/icons/MoonIcon';
import SunIcon from '@/app/components/elements/icons/SunIcon';
import { useGlobalStyles } from '@/app/hooks/useGlobalStyles';
import { useTheme } from '@/app/providers/ThemeProvider';
import { colors } from '@/static/colors';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Signup = () => {
  const { theme, setMode } = useTheme();
  const globalStyles = useGlobalStyles();

  const styles = StyleSheet.create({
    innerView: {
      flex: 1,
      paddingBottom: 24,
    },
    logo: {
      fontFamily: 'Sora_600SemiBold',
      fontSize: 20,
      color: theme === 'dark' ? colors.whiteSmoke : colors.night,
      marginBottom: 10,
      marginTop: 10,
    },
    text: {
      flex: 1,
      fontFamily: 'Sora_400Regular',
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
      elevation: 8,
    },
    loginForm: {
      marginBottom: 30,
    },
  });

  const router = useRouter();

  const [signupComplete, setSignupComplete] = useState(false);
  const [counted, setCounted] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={globalStyles.container}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={{ flex: 1 }} // Ensure ScrollView grows to fill the available space
      >
        <View style={styles.innerView}>
          <View
            style={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              paddingTop: 50,
              backgroundColor: theme === 'dark' ? colors.night : colors.whiteSmoke,
            }}
          >
            {theme === 'light' && (
              <TouchableOpacity onPress={() => setMode('dark')} style={styles.themeToggler}>
                <MoonIcon width={20} height={20} color={colors.delftBlue} />
              </TouchableOpacity>
            )}
            {theme === 'dark' && (
              <TouchableOpacity onPress={() => setMode('light')} style={styles.themeToggler}>
                <SunIcon width={20} height={20} color={colors.burntSienna} />
              </TouchableOpacity>
            )}
            <Text style={styles.logo}>omni</Text>
          </View>

          <View style={styles.loginForm}>
            <TouchableOpacity onPress={() => { router.replace('/'); }} style={{ marginVertical: 20 }}>
              <ArrowIcon width={20} height={20} color={theme === 'dark' ? colors.burntSienna : colors.night} />
            </TouchableOpacity>

            {!signupComplete && <>
              <Text style={{...globalStyles.title, fontSize: 24}}>Let's get you started!</Text>
              
              <Text style={{ ...globalStyles.subTitle, marginBottom: 20, fontSize: 13 }}>
                Please provide your details below to start making cross-border payments.
              </Text>

              <View style={{ marginBottom: 0 }}>
                <TextField
                  inputLabel="Full name"
                  inputPlaceholder="Your full name"
                  preloadValue=""
                  returnFieldValue={() => {}}
                  requiredField={true}
                  inputType="text"
                  hasError={false}
                  disabled={false}
                />
              </View>

              <View style={{ marginBottom: 0 }}>
                <TextField
                  inputLabel="Email address"
                  inputPlaceholder="An active email address"
                  preloadValue=""
                  returnFieldValue={() => {}}
                  requiredField={true}
                  inputType="email"
                  hasError={false}
                  disabled={false}
                />
              </View>

              <View style={{ marginBottom: 10 }}>
                <PasswordField
                  inputLabel="Password"
                  inputPlaceholder="Your account password"
                  preloadValue=""
                  returnFieldValue={() => {}}
                  requiredField={true}
                  inputType="text"
                  hasError={false}
                  disabled={false}
                  showPasswordMeter={true}
                />
              </View>
            </>}

            {signupComplete && <>
              <View style={{ height: '50%' }}>
                <Text style={{...globalStyles.title, fontSize: 24}}>Confirm your email.</Text>
                
                <Text style={{ ...globalStyles.subTitle, marginBottom: 20, fontSize: 13 }}>
                  We've sent you an email with an OTP. Please provide the OTP in the field below to confirm your email.
                </Text>
                <OTPInput 
                  length={6} 
                  onChange={function (value: string): void {
                    console.log(value)
                    // throw new Error('Function not implemented.');
                  }} 
                />

                <View style={{marginTop: 20}}>
                  {counted && !otpSent 
                      ? 
                      <TouchableOpacity onPress={() => { router.replace('/views/auth/Signup'); }}>
                        <Text style={{ 
                            color: colors.burntSienna, 
                            fontFamily: 'Sora_600SemiBold' 
                          }}
                        >
                          Resend Confirmation Email
                        </Text>
                      </TouchableOpacity>
                      :
                      <>
                          <Text style={styles.text}>Didn't get the email?{'\n'}Please wait <Countdown 
                            seconds={60} 
                            countdownComplete={()=>{setCounted(true)}} /> seconds
                          </Text>
                      </>
                  }
                </View>
              </View>
            </>}
            
          </View>

          <View>
            <FormButton
              buttonLabel={!signupComplete ? "Create your account" : "Confirm your email"}
              processing={false}
              disabled={false}
              buttonAction={() => {setSignupComplete(!signupComplete)}}
            />

            <View style={{ flexDirection: 'row', gap: 3, marginTop: 20, alignItems: 'center' }}>
              <Text style={styles.text}>Already have an account? </Text>
              <TouchableOpacity onPress={() => { router.replace('/views/auth/Signup'); }}>
                <Text style={{ color: colors.burntSienna, fontFamily: 'Sora_600SemiBold' }}>
                  Log in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
