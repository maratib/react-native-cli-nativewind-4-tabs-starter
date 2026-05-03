import type { AppColorScheme } from '../store/themeStore';

/**
 * Single source of truth for primary brand surfaces (header, status bar)
 * and accents (tabs, links). Header uses deeper tones so white labels pass contrast.
 */
export const brand = {
  headerBackground: {
    light: '#0284c7',
    dark: '#075985',
  },
  onPrimary: '#ffffff',
  accentOnSurface: {
    light: '#0284c7',
    dark: '#38bdf8',
  },
} as const;

export function headerBackgroundColor(scheme: AppColorScheme): string {
  return scheme === 'dark' ? brand.headerBackground.dark : brand.headerBackground.light;
}

export function accentOnSurfaceColor(scheme: AppColorScheme): string {
  return scheme === 'dark' ? brand.accentOnSurface.dark : brand.accentOnSurface.light;
}
