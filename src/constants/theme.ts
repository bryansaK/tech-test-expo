import { Platform } from 'react-native';

/** Fond principal de l'app */
export const background = '#FFF8F0';

/** Surface élevée (cards, modals) */
export const surface = '#FFFBF7';

/** Bleu pop */
export const bluePop = '#29B6F6';

/** Vert pop */
export const greenPop = '#00E676';

/** Style arrondi */
export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

/** Palette fixe - app toujours en blanc */
export const Colors = {
  foreground: '#2D2D2D',
  foregroundMuted: '#6B6B6B',
  background,
  surface,
  accentBlue: bluePop,
  accentGreen: greenPop,
  tint: bluePop,
  icon: '#6B6B6B',
  tabIconDefault: '#6B6B6B',
  tabIconSelected: bluePop,
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
