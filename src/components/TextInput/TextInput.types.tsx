import React from 'react';

export interface TextInputProps {
	variant: string;
	placeholder?: string;
	label?: string;
	children?: React.ReactNode;
	width?: string;
	height?: string;
	borderRadius?: string;
	padding?: string;
	borderColor?: string;
	fontSize?: string;
	textColor?: string;
	bgColor?: string;
	labelPosition?: string;
	maxWidth?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isActive?: boolean;
	name?: string;
}

export interface LabelProps {
	label?: string;
	isActive?: boolean;
	variant: string;
}
