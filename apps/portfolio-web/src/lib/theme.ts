import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  mode: 'light',
  background: '#f8f9fa',
  cardBackground: '#ffffff',
  text: '#1a1a1a',
  textSecondary: '#4f4f4f',
  textMuted: '#828282',
  primary: '#b05b6b',
  secondary: '#eaac8b',
  accent: '#e56b6f',
  border: 'rgba(0, 0, 0, 0.05)',
  skillTag: '#f1f3f5',
  skillText: '#4f4f4f',
};

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  background: '#0b0e14',
  cardBackground: '#161b22',
  text: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.6)',
  textMuted: '#828282',
  primary: '#b05b6b',
  secondary: '#eaac8b',
  accent: '#e56b6f',
  border: 'rgba(255, 255, 255, 0.05)',
  skillTag: '#2d1b24',
  skillText: '#e0e0e0',
};
