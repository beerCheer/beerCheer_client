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
  primary: '#FFC600',
  'primary-light': '#fdf4da',
  'primary-dark': '#b39e00',
  secondary: '#009fff',
  'secondary-light': '#e3f0fe',
  'secondary-dark': '#006fb3',
  tertiary: '#ff007b',
  'tertiary-light': '#fce1eb',
  option: '#bfc5d2',
  'bg-color': '#F8F7F5',
  text: '#2e384d',
  'text-sub': '#8798a',
};

const theme: Theme = {
  color: {
    primary: color.primary,
    'primary-light': color['primary-light'],
    'primary-dark': color['primary-dark'],
    secondary: color.secondary,
    'secondary-dark': color['secondary-dark'],
    'secondary-light': color['secondary-light'],
    tertiary: color.tertiary,
    'tertiary-light': color['tertiary-light'],
    text: color.text,
    'text-sub': color['text-sub'],
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
