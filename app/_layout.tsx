import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-reanimated';

import { background } from '@/constants/theme';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background,
    card: background,
  },
};

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider value={AppTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="events/[id]"
          options={{ title: 'Détails', headerBackTitle: 'Retour' }}
        />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
        <StatusBar style="dark" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
