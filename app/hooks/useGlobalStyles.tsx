// hooks/useGlobalStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '../providers/ThemeProvider';
import { colors } from '@/static/colors';

export const useGlobalStyles = () => {
  const { theme } = useTheme()
  

  return StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: theme === 'dark' ? colors.night : colors.whiteSmoke,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    title: {
        fontFamily: 'Sora_700Bold',
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: -2,
        color: theme === 'dark' ? colors.whiteSmoke : colors.night,
    },
    subTitle: {
        fontFamily: 'Sora_400Regular',
        fontSize: 16,
        lineHeight: 24,
        color: theme === 'dark' ? colors.silver : colors.delftBlue,
    },
  });
};
