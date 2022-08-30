import { AlertTypes } from '../components/Alert/Alert.types';
import { Palette } from './palette';

// eslint-disable-next-line import/no-anonymous-default-export
export const theme = {
	common: {
		bgColor: 'grey',
		errorColor: 'red',
		successColor: 'green',
		warningColor: 'orange',
	},

	Alert: {
		[AlertTypes.SUCCESS]: {
			bgColor: Palette.green200,
			textColor: Palette.black,
		},
		[AlertTypes.WARNING]: {
			bgColor: Palette.orange,
			textColor: Palette.black,
		},
		[AlertTypes.ERROR]: {
			bgColor: Palette.red,
			textColor: Palette.white,
		},
		[AlertTypes.GENERAL]: {
			bgColor: Palette.black,
			textColor: Palette.white,
		},
	},

	Input: {
		background: 'transparent',
		borderColor: Palette.gray100,
		color: Palette.black,
	},
	Label: {
		color: Palette.gray100,
		activeLabel: Palette.gray,
	},
};
