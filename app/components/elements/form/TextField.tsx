import { useTheme } from '@/app/providers/ThemeProvider';
import { colors } from '@/static/colors';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface TextFieldProps {
  requiredField: boolean;
  inputLabel: string;
  inputPlaceholder: string;
  fieldId?: string;
  inputType: string;
  hasError: boolean;
  returnFieldValue: (value: string) => void;
  preloadValue: string;
  disabled: boolean;
  maxLength?: number;
}

const TextField: React.FC<TextFieldProps> = ({
  requiredField,
  inputLabel,
  inputPlaceholder,
  fieldId,
  inputType,
  hasError,
  returnFieldValue,
  preloadValue,
  disabled,
  maxLength
}) => {
  const { theme } = useTheme();
  const [fieldValue, setFieldValue] = useState<string>(preloadValue);

  useEffect(() => {
    setFieldValue(preloadValue);
  }, [preloadValue]);

  const setValue = (value: string) => {
    setFieldValue(value);
    returnFieldValue(value);
  };

  const styles = StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    label: {
      fontFamily: 'Sora_600SemiBold',
      fontSize: 13,
      // fontWeight: '500',
      marginBottom: 6,
      color: theme === 'dark' ? colors.silver : '#6B7280',
    },
    labelError: {
      color: '#DC2626', // red-600
    },
    required: {
      color: '#DC2626', // red-600
    },
    input: {
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 18,
      paddingHorizontal: 18,
      fontSize: 14,
      fontFamily: 'Sora_400Regular',
      color: theme === 'dark' ? colors.whiteSmoke : colors.night
    },
    inputDefault: {
      backgroundColor: theme === 'dark' ? colors.eerieBlack : '#E5E7EB', // gray-100
      borderColor: 'transparent',     // gray-400
    },
    inputError: {
      borderColor: '#DC2626', // red-600
    },
    inputDisabled: {
      backgroundColor: theme === 'dark' ? colors.night : colors.whiteSmoke, // gray-200
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.label, hasError && styles.labelError]}>
        {requiredField && <Text style={styles.required}>*</Text>} {inputLabel}
      </Text>

      <TextInput
        id={fieldId}
        style={[
          styles.input,
          hasError ? styles.inputError : styles.inputDefault,
          disabled && styles.inputDisabled
        ]}
        onChangeText={setValue}
        value={fieldValue}
        editable={!disabled}
        placeholder={inputPlaceholder}
        maxLength={maxLength}
        keyboardType={inputType === 'number' ? 'numeric' : 'default'}
        placeholderTextColor="#6B7280" // Tailwind gray-500
      />
    </View>
  );
};

export default TextField;
