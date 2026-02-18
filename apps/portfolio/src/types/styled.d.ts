import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';
    background: string;
    cardBackground: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    primary: string;
    secondary: string;
    accent: string;
    border: string;
    skillTag: string;
    skillText: string;
  }
}
