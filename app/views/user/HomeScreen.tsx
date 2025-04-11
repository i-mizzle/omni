import HomeBalanceCard from '@/app/components/partials/home/HomeBalanceCard'
import HomeHeaderBar from '@/app/components/partials/home/HomeHeaderBar'
import { useGlobalStyles } from '@/app/hooks/useGlobalStyles'
import { useTheme } from '@/app/providers/ThemeProvider'
import { colors } from '@/static/colors'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
    const globalStyles = useGlobalStyles()
    const { theme } = useTheme()
    const styles = StyleSheet.create({
       
    })
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={globalStyles.userScreen}
        >
            <HomeHeaderBar />
            <ScrollView
                contentContainerStyle={{ 
                    flexGrow: 1, 
                    justifyContent: 'flex-start', 
                    width: '100%'
                }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                style={{ flex: 1 }} // Ensure ScrollView grows to fill the available space
            >
                <View style={{width: '100%'}}>
                    <HomeBalanceCard />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default HomeScreen