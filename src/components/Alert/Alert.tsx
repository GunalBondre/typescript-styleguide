/* eslint-disable react/jsx-no-comment-textnodes */
import React, { FC } from 'react';
import { AlertWrapper, ButtonWrapper, MessageIconWrapper } from './Alert.style';
import { AlertProps } from './Alert.types';

const Alert: FC<AlertProps> = (props): JSX.Element => {
	const {
		variant,
		message,
		title,
		custom_radius,
		bgColor,
		customWidth,
		action_button,
		textColor,
		action_button_text,
		...restProps
	} = props;
	return (
		<AlertWrapper
			variant={variant}
			message={message}
			title={title}
			customWidth={customWidth}
			bgColor={bgColor}
			custom_radius={custom_radius}
			action_button={action_button}
			textColor={textColor}
			action_button_text={action_button_text}
			data-testid='alert'
			{...restProps}
		>
			<MessageIconWrapper>{message}</MessageIconWrapper>
			{action_button && action_button_text && (
				<ButtonWrapper>
					<button>{action_button_text}</button>
				</ButtonWrapper>
			)}
		</AlertWrapper>
	);
};

export default Alert;
