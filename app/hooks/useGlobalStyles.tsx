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
    screen: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? colors.night : colors.whiteSmoke
    },
    userScreen: {
      paddingHorizontal: 20,
      paddingVertical: 40,
      flex: 1, 
      justifyContent: 'flex-start', 
      // alignItems: 'flex-start',
      // backgroundColor: 'red',
      backgroundColor: theme === 'dark' ? colors.night : colors.whiteSmoke
    }
  });
};
