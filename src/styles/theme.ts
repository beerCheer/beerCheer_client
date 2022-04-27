import { Theme } from '@emotion/react';

const size = {
  large: '768px',
  medium: '480px',
};

const font = {
  size: {
    'xl-3': '32px',
    'xl-2': '24px',
    xl: '20px',
    lg: '18px',
    md: '16px',
    sm: '14px',
    xs: '12px',
  },
  weight: {
    light: 200,
    regular: 300,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

const color = {
  primary: '#FF9900',
  secondary: '#294D81',
  tertiary: '#F0E5CF',
  option: '#C8C6C6',
  'bg-color': '#F8F7F5',
};

const theme: Theme = {
  color: {
    primary: color.primary,
    secondary: color.secondary,
    tertiary: color.tertiary,
    option: color.option,
    'bg-color': color['bg-color'],
  },
  mq: {
    tablet: `@media only screen and (max-width: ${size.large})`,
    phone: `@media only screen and (max-width: ${size.medium})`,
  },
  'font-3xl': font.size['xl-3'],
  'font-2xl': font.size['xl-2'],
  'font-xl': font.size.xl,
  'font-lg': font.size.lg,
  'font-md': font.size.md,
  'font-sm': font.size.sm,
  'font-xs': font.size.xs,
  'font-light': font.weight.light,
  'font-regular': font.weight.regular,
  'font-medium': font.weight.medium,
  'font-semibold': font.weight.semibold,
  'font-bold': font.weight.bold,
};

export default theme;
