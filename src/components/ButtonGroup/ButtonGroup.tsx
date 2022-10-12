import { FC } from 'react';
import { ButtonWrapper } from './ButtonGroup.style';
import { buttonGroupProp } from './Buttongroup.types';

const ButtonGroup: FC<buttonGroupProp> = (props): JSX.Element => {
	const { children, bgColor, textColor, customWidth, ...rest } = props;
	return (
		<ButtonWrapper
			bgColor={bgColor}
			textColor={textColor}
			customWidth={customWidth}
			{...rest}
		>
			{children}
		</ButtonWrapper>
	);
};

export default ButtonGroup;
