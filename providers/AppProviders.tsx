import type { ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAppearanceThemeSync } from '../hooks/useAppearanceThemeSync';
import { useThemeStore } from '../store/themeStore';
import { headerBackgroundColor } from '../theme/brand';

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  useAppearanceThemeSync();
  const resolvedScheme = useThemeStore((s) => s.resolvedScheme);
  const statusBarBg = headerBackgroundColor(resolvedScheme);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={statusBarBg}
        translucent={false}
      />
      {children}
    </SafeAreaProvider>
  );
}
