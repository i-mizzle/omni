import { Slot, Stack } from "expo-router";
import React from "react";
import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const { theme } = useTheme();

  // return <View style={{ flex: 1, backgroundColor: theme === 'dark' ? '#000' : '#fff' }}>
  //     <StatusBar style={theme === 'dark' ? 'light' : 'dark'} backgroundColor={theme === 'dark' ? '#000' : '#fff'} />
  //     <Stack 
  //     screenOptions={{ 
  //       headerShown: false, 
  //       contentStyle: {
  //         backgroundColor: theme === 'dark' ? '#000' : '#fff',
  //       }, 
  //     }} 
  //   />
  // </View>
  return (
    <ThemeProvider>
      {/* <Slot /> */}
      <View style={{ flex: 1, backgroundColor: theme === 'dark' ? '#000' : '#fff' }}>
        <StatusBar 
          style={theme === 'dark' ? 'light' : 'dark'} 
          backgroundColor={theme === 'dark' ? '#000' : '#fff'} 
        />
        <Stack 
          screenOptions={{ 
            headerShown: false, 
            contentStyle: {
              backgroundColor: theme === 'dark' ? '#000' : '#fff',
            }, 
            animation: 'fade',
          }} 
        />
      </View>
    </ThemeProvider>
  );
}
