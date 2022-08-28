import styled from 'styled-components';
import { buttonGroupProp } from './Buttongroup.types';

export const ButtonWrapper = styled.div<buttonGroupProp>`
	max-width: ${(props) => (props.customWidth ? props.customWidth : '250')}px;
	display: flex;
	justify-content: space-between;
	button {
		border-radius: 0px;
		min-width: 0;
		padding: 10px;
		margin: 0;
		background-color: ${(props) => (props.bgColor ? props.bgColor : 'gray')};
		color: ${(props) => (props.textColor ? props.textColor : 'white')};
		&:first-child {
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
		}
		&:last-child {
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
		}
	}
`;
