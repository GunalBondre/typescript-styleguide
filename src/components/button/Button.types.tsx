export interface ButtonProps {
	variant: string;
	color?: string;
	size?: string;
	children?: React.ReactNode;
	borderRadius?: string;
	noBorder?: boolean;
	width?: string;
	height?: string;
	iconName?: string;
	iconColor?: string;
	fontSize?: string;
	disabled?: boolean;
	props?: JSX.Element;
	customRadius?: string;
}
