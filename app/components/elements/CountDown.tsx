import { useTheme } from '@/app/providers/ThemeProvider';
import { colors } from '@/static/colors';
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface CountdownProps {
  seconds: number;
  countdownComplete: () => void;
  className?: string; // Optional className for styling, can be used with styles object
}

const Countdown: React.FC<CountdownProps> = ({ seconds, countdownComplete }) => {
  const [countDown, setCountDown] = useState(seconds);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (countDown > 0) {
      interval = setInterval(() => {
        setCountDown((prevCount) => prevCount - 1);
      }, 1000);
    }

    if (countDown === 0) {
      countdownComplete();
    }

    // Cleanup on unmount or when countdown reaches 0
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [countDown, countdownComplete]);

  const {theme} = useTheme()

  const styles = StyleSheet.create({
    container: {
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    text: {
      fontSize: 16,
      marginLeft: 4,
      marginBottom: -8,
      fontFamily: 'SpaceMono-Bold',
      color: theme === 'dark' ? colors.burntSienna : colors.eerieBlack
    },
    customStyle: {
      // custom style placeholder
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {countDown}
      </Text>
    </View>
  );
};

export default Countdown;
