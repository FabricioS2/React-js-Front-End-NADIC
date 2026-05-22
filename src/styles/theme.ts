export const theme = {
  bg: '#0a0a14',
  bg2: '#0f0f1e',
  neonPink: '#ff5eff',
  neonCyan: '#00f0ff',
  neonYellow: '#ffe030',
  neonGreen: '#3cff3c',
  neonRed: '#ff3040',
  neonOrange: '#ff8c30',
  gold: '#ffd700',
  silver: '#c0c0c0',
  bronze: '#cd7f32',
  pixelBorderColor: '#3a2a5a',
  text: '#e0d8f0',
  cardBg: '#111128',
  inputBg: '#0d0d20',
  fontPixel: "'Press Start 2P', cursive",
  fontMono: "'VT323', 'Courier New', monospace",
} as const;

export type ThemeType = typeof theme;