import { useTheme } from '@/app/providers/ThemeProvider';
import { colors } from '@/static/colors';
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface FormButtonProps {
  buttonLabel: string;
  disabled?: boolean;
  buttonAction: () => void;
  processing: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({ buttonLabel, buttonAction, disabled, processing }) => {
    const { theme } = useTheme();

    const styles = StyleSheet.create({
        button: {
            width: '100%',
            paddingVertical: 18,
            paddingHorizontal: 24,
            borderRadius: 8,
            backgroundColor: theme === 'dark' ? colors.burntSienna : colors.night, // locum-black
            alignItems: 'center',
            justifyContent: 'center',
        },
        disabledButton: {
          backgroundColor: '#555555',
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontFamily: 'Sora_600SemiBold',
            // fontFamily: 'SpaceMono-Bold',
            letterSpacing: -1
        },
    });
    
    return (
        <TouchableOpacity
            style={[styles.button, (disabled || processing) && styles.disabledButton]}
            onPress={buttonAction}
            disabled={processing || disabled}
            activeOpacity={0.9}
        >
        {processing ? (
            <ActivityIndicator color="#fff" />
        ) : (
            <Text style={styles.buttonText}>{buttonLabel}</Text>
        )}
        </TouchableOpacity>
    );
};


export default FormButton;

