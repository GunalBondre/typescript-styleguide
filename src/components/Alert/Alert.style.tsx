import styled from 'styled-components';
import { AlertProps } from './Alert.types';

import { theme } from '../../themes/theme';

export const AlertWrapper = styled.div<AlertProps>`
	display: flex;
	background-color: ${(props): any =>
		props.bgColor ? props.bgColor : theme.Alert[props.variant].bgColor};
	padding: 10px 20px;
	color: ${(props) => theme.Alert[props.variant].textColor};
	border-radius: ${(props) =>
		props.custom_radius ? props.custom_radius : 5}px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const MessageIconWrapper = styled.div``;
export const ButtonWrapper = styled.div`
	button {
		background-color: transparent;
		padding: 5px 10px;
		outline: none;
		border-radius: 5px;
	}
`;
