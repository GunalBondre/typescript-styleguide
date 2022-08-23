export interface AlertProps {
	variant: string;
	message: string;
	title?: string;
	custom_radius?: string;
	action_button?: string;
	bgColor?: string;
	textColor?: string;
	customWidth?: string;
	children?: any;
	props?: JSX.Element;
}

interface AlertInterface {
	SUCCESS: string;
	WARNING: string;
	ERROR: string;
	GENERAL: string;
}

export const AlertTypes: AlertInterface = {
	SUCCESS: 'success',
	WARNING: 'warning',
	ERROR: 'error',
	GENERAL: 'general',
};
