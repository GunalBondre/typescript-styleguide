import styled from 'styled-components';
import { BoxProps } from './Box.types';

export const BoxWrapper = styled.div<BoxProps>`
	width: 100%;
	background-color: ${(props) => (props.bgColor ? props.bgColor : 'red')};
	max-width: ${(props) => (props.mxWidth ? props.mxWidth : 500)}px;
	padding: 10px 20px;
	color: ${(props) => (props.textColor ? props.textColor : '#fff')};
	height: ${(props) => (props.customHeight ? props.customHeight : 'auto')}px;
`;
