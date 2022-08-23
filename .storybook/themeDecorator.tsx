import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/themes/theme';

const ThemeConfig = (storyFn: any) => (
	<ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default ThemeConfig;
