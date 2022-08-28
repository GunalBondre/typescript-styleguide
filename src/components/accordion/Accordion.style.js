import styled, { css } from 'styled-components';

export const AccordionWrapper = styled.div`
	width: auto;
	max-width: 500px;
	border: 1px solid gray;
	border-radius: 5px;
`;
export const AccordionItemWrapper = styled.div`
	width: auto;
	border-bottom: 1px solid gray;
	cursor: pointer;
	&:last-child {
		border-bottom: none;
	}
`;
export const AccordionDescriptionWrapper = styled.div`
	${(props) => {
		if (props.isActive) {
			return css`
				padding: 10px 20px;
			`;
		}
		return ``;
	}}
`;
export const AccordionHeadingWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
	transition: all 1s ease;
	${(props) => {
		if (props.isActive) {
			return css`
				background-color: aliceblue;
				border-radius: 5px;
			`;
		}
		return ``;
	}}
`;
export const HeadingWrapper = styled.div``;
export const HeadingIconWrapper = styled.div`
	transition: all 1s ease;
`;
