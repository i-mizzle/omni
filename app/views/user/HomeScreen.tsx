import HomeHeaderBar from '@/app/components/partials/HomeHeaderBar'
import { useGlobalStyles } from '@/app/hooks/useGlobalStyles'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'

const HomeScreen = () => {
    const globalStyles = useGlobalStyles()
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={globalStyles.userScreen}
        >
            <HomeHeaderBar />
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                style={{ flex: 1 }} // Ensure ScrollView grows to fill the available space
            >
                <Text>Home screen</Text>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default HomeScreen