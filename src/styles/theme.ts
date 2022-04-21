export const size = {
  medium: '768px',
  small: '480px',
};

export const font = {
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

const theme = {
  mq: {
    laptop: `@media only screen and (min-width: ${size.medium})`,
    tablet: `@media only screen and (min-width: ${size.small})`,
  },
  'font-3xl': font.size['xl-3'],
  'font-2xl': font.size['xl-2'],
  'font-xl': font.size.xl,
  'font-lg': font.size.lg,
  'font-md': font.size.md,
  'font-sm': font.size.sm,
  'font-xs': font.size.sm,
  'font-light': font.weight.light,
  'font-regular': font.weight.regular,
  'font-medium': font.weight.medium,
  'font-semibold': font.weight.semibold,
  'font-bold': font.weight.bold,
};

export default theme;
