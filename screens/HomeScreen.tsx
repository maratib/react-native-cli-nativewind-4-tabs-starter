import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { type ThemePreference, useThemeStore } from '../store/themeStore';

function preferenceDescription(preference: ThemePreference): string {
  switch (preference) {
    case 'system':
      return 'Following system';
    case 'light':
      return 'Light (manual)';
    case 'dark':
      return 'Dark (manual)';
  }
}

function nextThemeButtonTitle(preference: ThemePreference): string {
  switch (preference) {
    case 'system':
      return 'Use light mode';
    case 'light':
      return 'Use dark mode';
    case 'dark':
      return 'Use system default';
  }
}

export function HomeScreen() {
  const preference = useThemeStore((s) => s.preference);
  const resolvedScheme = useThemeStore((s) => s.resolvedScheme);
  const cyclePreference = useThemeStore((s) => s.cyclePreference);

  return (
    <View className="flex-1 items-center justify-center bg-white px-6 dark:bg-slate-950">
      <Text className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-slate-50">
        Welcome to NativeWind!
      </Text>
      <Text className="mb-2 text-center text-sm text-slate-600 dark:text-slate-400">
        {preferenceDescription(preference)}
      </Text>
      <Text className="mb-6 text-center text-xs text-slate-500 dark:text-slate-500">
        Now: {resolvedScheme}
      </Text>
      <Button onPress={cyclePreference} title={nextThemeButtonTitle(preference)} />
    </View>
  );
}
