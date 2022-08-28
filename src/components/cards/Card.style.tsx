import styled from 'styled-components';
import { Palette } from '../../themes/palette';
import { CardProps } from './Card.types';

export const CardWrapper = styled.div<CardProps>`
	width: ${(props) => (props.width ? props.width : 300)}px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 10)}px;
	overflow: hidden;
`;
export const CardHeaderContiner = styled.div<CardProps>`
	background-color: ${Palette.lightGrey};
	padding: 15px;
`;
export const Cardimage = styled.div<CardProps>`
	width: 100%;
`;
export const CardBodyImageWrapper = styled.div<CardProps>``;
export const CardBodyContiner = styled.div<CardProps>`
	padding: ${(props) => (props.padding ? props.padding : 15)}px;
	button {
		border-radius: 5px;
	}
`;
export const CardTitleContiner = styled.div`
	text-transform: capitalize;
`;
export const CardTextContiner = styled.div<CardProps>`
	padding: 10px 0;
`;

export const CardLinkContainer = styled.a``;
