import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import EyeIcon from '../icons/EyeIcon';
import EyeOffIcon from '../icons/EyeOffIcon';
import PasswordMeter from '../PasswordMeter';
import { colors } from '@/static/colors';
import { useTheme } from '@/app/providers/ThemeProvider';

interface PasswordFieldProps {
  requiredField: boolean;
  inputLabel: string;
  inputPlaceholder: string;
  fieldId?: string;
  inputType: string;
  hasError: boolean;
  returnFieldValue: (value: string) => void;
  preloadValue: string;
  disabled: boolean;
  showPasswordMeter: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  requiredField,
  inputLabel,
  fieldId,
  inputPlaceholder,
  hasError,
  returnFieldValue,
  preloadValue,
  disabled,
  showPasswordMeter,
}) => {
  const [fieldValue, setFieldValue] = useState(preloadValue);
  const [hiddenInput, setHiddenInput] = useState(true);

  const toggleHiddenInput = () => {
    setHiddenInput(!hiddenInput);
  };

  const setValue = (value: string) => {
    setFieldValue(value);
    returnFieldValue(value);
  };

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    label: {
      fontFamily: 'Sora_600SemiBold',
      fontSize: 13,
      // fontWeight: '500',
      marginBottom: 6,
      color: theme === 'dark' ? colors.silver : '#6B7280', // gray-500
    },
    labelError: {
      color: '#DC2626', // red-600
    },
    required: {
      color: '#DC2626', // red-600
    },
    inputWrapper: {
      position: 'relative',
      justifyContent: 'center',
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
      backgroundColor: theme === 'dark' ? colors.eerieBlack : '#E5E7EB',
      borderColor: 'transparent',     // gray-400
    },
    inputError: {
      borderColor: '#DC2626', // red-600
    },
    inputDisabled: {
        backgroundColor: theme === 'dark' ? colors.night : colors.whiteSmoke,
    },
    iconWrapper: {
      position: 'absolute',
      right: 12,
      top: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.label, hasError && styles.labelError]}>
        {requiredField && <Text style={styles.required}>*</Text>} {inputLabel}
      </Text>

      <View style={styles.inputWrapper}>
        <TextInput
          id={fieldId}
          style={[
            styles.input,
            hasError ? styles.inputError : styles.inputDefault,
            disabled && styles.inputDisabled
          ]}
          onChangeText={setValue}
          value={fieldValue}
          placeholder={inputPlaceholder}
          placeholderTextColor="#6B7280" // gray-500
          secureTextEntry={hiddenInput}
          editable={!disabled}
        />

        <TouchableOpacity style={styles.iconWrapper} onPress={toggleHiddenInput}>
          {hiddenInput ? (
            <EyeIcon width={20} height={20} color="#4B5563" /> // gray-600
          ) : (
            <EyeOffIcon width={20} height={20} color="#4B5563" />
          )}
        </TouchableOpacity>
      </View>

      {showPasswordMeter && <PasswordMeter password={fieldValue} />}
    </View>
  );
};


export default PasswordField;
