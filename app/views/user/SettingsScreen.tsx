import HeaderBar from '@/app/components/partials/HeaderBar'
import { useGlobalStyles } from '@/app/hooks/useGlobalStyles'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'

const SettingsScreen = () => {
    const globalStyles = useGlobalStyles()
        
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={globalStyles.userScreen}
        >
            <HeaderBar viewTitle='Settings' />
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                style={{ flex: 1 }} // Ensure ScrollView grows to fill the available space
            >
                <Text>Settings screen</Text>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SettingsScreen