import styled, { css } from 'styled-components';
import { TextInputProps, LabelProps } from './TextInput.types';
import { Palette } from '../../themes/palette';
import { bodyTextSize } from '../../themes/common';
import { theme } from '../../themes/theme';

const PADDING = 10;
const BORDER_RADIUS = 5;

export const InputWrapper = styled.input<TextInputProps>`
	padding: ${(props) => (props.padding ? props.padding : PADDING)}px;
	width: ${(props) => (props.width ? props.width : 100)}%;
	height: ${(props) => (props.height ? props.height : 40)}px;
	min-width: 350px;
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : BORDER_RADIUS}px;
	outline: none;
	background-color: ${(props) =>
		props.bgColor ? props.bgColor : 'transparent'};
	font-size: ${(props) => (props.fontSize ? props.fontSize : bodyTextSize)}px;
	border-color: ${(props) =>
		props.borderColor ? props.borderColor : theme.Input.borderColor};
	max-width: ${(props) => (props.maxWidth ? props.maxWidth : 450)}px;
	color: ${(props) => (props.textColor ? props.textColor : theme.Input.color)};
	transition: all 0.5s ease;
	&::placeholder {
		color: ${theme.Label.color};
	}
	&:focus-within {
		border-color: ${Palette.teal};
	}
	&:hover {
		border-color: ${Palette.teal};
	}
	${(props) => {
		let borderColor = props.borderColor;

		if (props.variant === 'standard') {
			return css`
				border: none;
				border-bottom: 2px solid
					${borderColor ? borderColor : theme.Input.borderColor};
				border-radius: 0;
				padding: 0;
			`;
		}
		if (props.variant === 'outlined') {
			return css`
				border: 2px solid ${borderColor ? borderColor : theme.Input.borderColor};
			`;
		}
	}}
`;

export const LabelWrapper = styled.label<LabelProps>`
	position: absolute;
	top: 50%;
	transform: translateY(-50%) scale(1);
	left: ${(props) => (props.variant === 'standard' ? 0 : 10)}px;
	transform-origin: top left;
	transition: all 0.2s ease-out;
	font-size: 20px;
	padding: 0 5px;
	color: ${theme.Label.color};
	z-index: -1;
	&.active {
		top: -10px;
		transform: translateY(10px);
		transform: scale(0.85);
		background-color: ${Palette.white};
		color: ${theme.Label.activeLabel};
		z-index: 1;
	}
`;

export const InputLabelWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 350px;
	&:focus-within {
		label {
			top: -10px;
			transform: translateY(10px);
			transform: scale(0.85);
			background-color: ${Palette.white};
			color: ${theme.Label.activeLabel};
			z-index: 1;
		}
	}
`;
