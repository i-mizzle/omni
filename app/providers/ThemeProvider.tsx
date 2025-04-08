// providers/ThemeProvider.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: 'light' | 'dark';
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  mode: 'system',
  setMode: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme(); // 'light' | 'dark' | null
  const [mode, setModeState] = useState<ThemeMode>('system');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const applyTheme = (newMode: ThemeMode, systemTheme?: 'light' | 'dark' | null) => {
    const resolvedTheme =
      newMode === 'system' ? (systemTheme === 'dark' ? 'dark' : 'light') : newMode;
    setTheme(resolvedTheme);
  };

  const setMode = async (newMode: ThemeMode) => {
    await AsyncStorage.setItem('themeMode', newMode);
    setModeState(newMode);
    applyTheme(newMode, systemColorScheme);
  };

  useEffect(() => {
    const loadTheme = async () => {
      const storedMode = (await AsyncStorage.getItem('themeMode')) as ThemeMode | null;
      const initialMode = storedMode || 'system';
      setModeState(initialMode);
      applyTheme(initialMode, systemColorScheme);
    };
    loadTheme();
  }, []);

  // Re-apply theme if system theme changes and mode is 'system'
  useEffect(() => {
    if (mode === 'system') {
      applyTheme('system', systemColorScheme);
    }
  }, [systemColorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
