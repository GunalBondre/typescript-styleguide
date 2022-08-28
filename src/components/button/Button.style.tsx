import styled, { css } from 'styled-components';
import { ButtonType } from './Button.constant';
import { ButtonProps } from './Button.types';

export const ButtonContainer = styled.button<ButtonProps>`
	width: 100%;
	max-width: ${(props) => (props.width ? props.width : '250px')};
	min-width: 150px;
	padding: 10px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	outline: none;
	transition: all 0.5s ease;
	font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
	color: ${(props) => (props.color ? props.color : 'black')};
	border-radius: ${(props) =>
		props.customRadius ? props.customRadius : '15px'};
	${(props) => {
		if (props.variant === ButtonType.PRIMARY) {
			return css`
				background-color: skyblue;
			`;
		}
		if (props.variant === ButtonType.DANGER) {
			return css`
				background-color: red;
				color: #fff;
			`;
		}
		if (
			props.variant === ButtonType.SECONDARY ||
			props.variant === ButtonType.LIGHT
		) {
			return css`
				background-color: lightgray;
			`;
		}
		if (props.variant === ButtonType.SUCCESS) {
			return css`
				background-color: green;
				color: #fff;
			`;
		}
		if (props.variant === ButtonType.WARNING) {
			return css`
				background-color: orange;
			`;
		}
		if (
			props.variant === ButtonType.INFO ||
			props.variant === ButtonType.DARK
		) {
			return css`
				background-color: black;
				color: #fff;
			`;
		}
		if (props.variant === ButtonType.LINK) {
			return css`
				background: none;
			`;
		}
	}}

	${(props) => {
		if (props.noBorder) {
			return css`
				border-radius: 0px;
			`;
		}
		if (props.height) {
			return css`
				height: ${props.height};
			`;
		}
		if (props.disabled) {
			return css`
				background-color: lightgray;
				cursor: not-allowed;
			`;
		}
	}}

  ${(props) => {
		if (!props.disabled) {
			return css`
				&:hover {
					opacity: 0.5;
				}
				&:active {
					transform: translateY(3px);
				}
				cursor: pointer;
			`;
		}
	}}
`;
