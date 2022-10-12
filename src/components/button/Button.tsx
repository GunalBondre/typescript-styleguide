import React, { FC } from 'react';
import { ButtonContainer } from './Button.style';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({
	variant,
	color,
	size,
	children,
	borderRadius,
	noBorder,
	width,
	height,
	iconName,
	iconColor,
	fontSize,
	disabled,
	...props
}) => {
	return (
		<ButtonContainer
			variant={variant}
			color={color}
			width={width}
			height={height}
			customRadius={borderRadius}
			noBorder={noBorder}
			size={size}
			fontSize={fontSize}
			disabled={disabled}
			data-testid='button-test'
			{...props}
		>
			{children}
		</ButtonContainer>
	);
};

export default Button;
