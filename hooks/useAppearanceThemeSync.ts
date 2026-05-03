import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { useThemeStore } from '../store/themeStore';

/** Keeps the theme store aligned with React Native `Appearance` (system or `setColorScheme`). */
export function useAppearanceThemeSync() {
  const syncFromAppearance = useThemeStore((s) => s.syncFromAppearance);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(syncFromAppearance);
    return () => subscription.remove();
  }, [syncFromAppearance]);
}
