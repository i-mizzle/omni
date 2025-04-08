import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckIcon from './icons/CheckIcon';
import { useTheme } from '@/app/providers/ThemeProvider';
import { colors } from '@/static/colors';

interface MeterProps {
  password: string;
}

const PasswordMeter: React.FC<MeterProps> = ({ password }) => {
  const [checks, setChecks] = useState({
    lowercase: false,
    uppercase: false,
    special: false,
    number: false,
    minEightChars: false,
  });

  useEffect(() => {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasMinEightChars = password.length >= 8;

    setChecks({
      lowercase: hasLowercase,
      uppercase: hasUppercase,
      special: hasSpecial,
      number: hasNumber,
      minEightChars: hasMinEightChars,
    });
  }, [password]);

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
    },
    title: {
      color: theme === 'dark' ? colors.silver : '#6B7280', // Tailwind's text-gray-500 equivalent
      marginBottom: 20,
      fontSize: 14,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: 15,
    },
    checkCircle: {
      width: 25,
      height: 25,
      borderRadius: 999,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkCirclePassed: {
      backgroundColor: '#16A34A', // Tailwind's bg-green-600
    },
    checkCircleDefault: {
      backgroundColor: theme === 'dark' ? colors.eerieBlack : colors.silver, // Tailwind's bg-gray-100
    },
    checkText: {
      fontSize: 12,
      fontWeight: '500',
      fontFamily: 'Sora_400Regular'

    },
    textPassed: {
      color: theme === 'dark' ? colors.whiteSmoke : '#111827', // gunmetal-black / text-gray-900
    },
    textDefault: {
      color: '#9CA3AF', // Tailwind's text-gray-400
    },
  });

  const renderItem = (label: string, passed: boolean) => (
    <View style={styles.item}>
      <View style={[styles.checkCircle, passed ? styles.checkCirclePassed : styles.checkCircleDefault]}>
        {passed && <CheckIcon width={16} height={16} color="#FFF" />}
      </View>
      <Text style={[styles.checkText, passed ? styles.textPassed : styles.textDefault]}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>A good password should:</Text>
      {renderItem('Contain a lowercase character', checks.lowercase)}
      {renderItem('Contain an uppercase character', checks.uppercase)}
      {renderItem('Contain a special character (eg: !@#$%^&*)', checks.special)}
      {renderItem('Contain a number', checks.number)}
      {renderItem('Be a minimum of eight characters long', checks.minEightChars)}
    </View>
  );
};
  

export default PasswordMeter;
