// import React from 'react';

// import { addDecorator } from '@storybook/react';

// import { ThemeConfig } from './themeDecorator';

// // Global Styles ==============================
// addDecorator((story) => (
// 	<>
// 		<div>{story()}</div>
// 	</>
// ));

// // Emotion Theme Provider =====================
// addDecorator(ThemeConfig);

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
