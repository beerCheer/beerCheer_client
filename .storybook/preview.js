import { Global, ThemeProvider } from '@emotion/react';
import global from '../src/styles/global';
import theme from '../src/styles/theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
