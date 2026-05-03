import { Appearance } from 'react-native';
import { create } from 'zustand';

/** User choice; `system` follows the OS (default). */
export type ThemePreference = 'system' | 'light' | 'dark';

/** Resolved light/dark for UI (StatusBar, copy) and matches NativeWind after `Appearance` updates. */
export type AppColorScheme = 'light' | 'dark';

type ThemeStore = {
  preference: ThemePreference;
  resolvedScheme: AppColorScheme;
  setPreference: (preference: ThemePreference) => void;
  cyclePreference: () => void;
  syncFromAppearance: (preferences: { colorScheme: string | null | undefined }) => void;
};

const resolveScheme = (value: string | null | undefined): AppColorScheme =>
  value === 'dark' ? 'dark' : 'light';

function applyNativeAppearance(preference: ThemePreference) {
  if (preference === 'system') {
    Appearance.setColorScheme('unspecified');
  } else {
    Appearance.setColorScheme(preference);
  }
}

const preferenceOrder: ThemePreference[] = ['system', 'light', 'dark'];

function initialState(): Pick<ThemeStore, 'preference' | 'resolvedScheme'> {
  const preference: ThemePreference = 'system';
  applyNativeAppearance(preference);
  return {
    preference,
    resolvedScheme: resolveScheme(Appearance.getColorScheme()),
  };
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  ...initialState(),
  syncFromAppearance: ({ colorScheme }) => {
    if (get().preference !== 'system') {
      return;
    }
    set({ resolvedScheme: resolveScheme(colorScheme) });
  },
  setPreference: (preference) => {
    applyNativeAppearance(preference);
    const resolved =
      preference === 'system' ? resolveScheme(Appearance.getColorScheme()) : preference;
    set({ preference, resolvedScheme: resolved });
  },
  cyclePreference: () => {
    const current = get().preference;
    const idx = preferenceOrder.indexOf(current);
    const next = preferenceOrder[idx === -1 ? 0 : (idx + 1) % preferenceOrder.length];
    get().setPreference(next);
  },
}));
