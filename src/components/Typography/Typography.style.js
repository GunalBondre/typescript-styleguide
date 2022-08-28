import styled, { css } from 'styled-components';
import { TypeVarient } from './Typography.constant';

export const TextWrapper = styled.h2`
	font-size: 18px;
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'bold')};
	color: ${(props) => (props.fontColor ? props.fontColor : 'black')};

	${(props) => {
		if (props.variant === TypeVarient.H1) {
			return css`
				font-size: ${props.fontSize ? props.fontSize : '32px'};
			`;
		}

		if (props.variant === TypeVarient.H2) {
			return css`
				font-size: ${props.fontSize ? props.fontSize : '26px'};
			`;
		}
		if (props.variant === TypeVarient.H3) {
			return css`
				font-size: ${props.fontSize ? props.fontSize : '22px'};
			`;
		}
		if (props.variant === TypeVarient.H4) {
			return css`
				font-size: ${props.fontSize ? props.fontSize : '18px'};
			`;
		}
		if (props.variant === TypeVarient.H5) {
			return css`
				font-size: ${props.fontSize ? props.fontSize : '14px'};
			`;
		}
		if (props.variant === TypeVarient.H6) {
			return css`
				font-size: ${props.fontSize ? props.fontSize : '12px'};
			`;
		}
		if (props.variant === TypeVarient.PARA) {
			return css`
				font-size: ${props.fontSize ? props.fontSize : '18px'};
				font-weight: ${props.fontWeight ? props.fontWeight : 'normal'};
			`;
		}
	}}
`;
