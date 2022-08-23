import { FC } from 'react';
import { BoxWrapper } from './Box.styles';
import { BoxProps } from './Box.types';

const Box: FC<BoxProps> = ({
	children,
	bgColor,
	customHeight,
	mxWidth,
	textColor,
	customRadius,
}) => {
	return (
		<BoxWrapper
			bgColor={bgColor}
			customHeight={customHeight}
			mxWidth={mxWidth}
			data-testid='box'
			textColor={textColor}
			customRadius={customRadius}
		>
			{children}
		</BoxWrapper>
	);
};
export default Box;
