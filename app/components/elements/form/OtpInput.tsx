import { useTheme } from '@/app/providers/ThemeProvider';
import { colors } from '@/static/colors';
import React, { useRef, useState } from 'react';
import { TextInput, View, StyleSheet, Text, TextInputProps } from 'react-native';

interface OTPInputProps {
  length: number;
  onChange: (value: string) => void;
  hasError?: boolean;
  invalid?: boolean;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onChange, hasError, invalid }) => {

  const {theme} = useTheme()

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      backgroundColor: theme === 'dark' ? colors.outerSpace : colors.silver,
      textAlign: 'center',
      height: 55,
      width: 50,
      fontSize: 24,
      borderWidth: 1,
      margin: 5,
      borderRadius: 5,
      fontFamily: 'SpaceMono-Bold',
      color: theme === 'dark' ? colors.burntSienna : colors.delftBlue
    },
    defaultInput: {
      borderColor: theme === 'dark' ? colors.outerSpace: colors.silver,
    },
    errorInput: {
      borderColor: 'red',
    },
  });

//   const inputsRef = useRef<TextInput[]>([]);

  const [otpValues, setOtpValues] = useState<string[]>(new Array(length).fill(''));
  const inputsRef = useRef<(TextInput | null)[]>(new Array(length).fill(null));

  const handleChange = (text: string, index: number) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;

    // Update the OTP state
    setOtpValues(newOtpValues);
    onChange(newOtpValues.join(''));

    // Move to next input if value is entered
    if (text && index < length - 1) {
      focusNextInput(index);
    }

    // Move to previous input if value is deleted
    if (!text && index > 0) {
      focusPreviousInput(index);
    }
  };

  const focusNextInput = (index: number) => {
    if (inputsRef.current[index + 1]) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const focusPreviousInput = (index: number) => {
    if (inputsRef.current[index - 1]) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const renderInputs = () => {
    const inputArr = new Array(length).fill('');

    return inputArr.map((_, index) => (
      <TextInput
        key={index}
        maxLength={1}
        style={[
          styles.input,
          hasError ? styles.errorInput : styles.defaultInput,
        ]}
        onChangeText={(text) => handleChange(text, index)}
        value={otpValues[index]} // Bind value directly to state
        placeholder="*"
        keyboardType="number-pad"
        returnKeyType="done"
        ref={(ref) => (inputsRef.current[index] = ref)} // Set the ref for each input
      />
    ));
  };

  return <View style={styles.container}>{renderInputs()}</View>;
};

export default OTPInput;
