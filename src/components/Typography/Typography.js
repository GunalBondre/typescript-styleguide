import React from 'react';
import PropTypes from 'prop-types';
import { TextWrapper } from './Typography.style';

const Typography = ({
	variant,
	fontSize,
	fontColor,
	fontWeight,
	children,
	...restProps
}) => {
	return (
		<div>
			<TextWrapper
				variant={variant}
				fontSize={fontSize}
				fontColor={fontColor}
				fontWeight={fontWeight}
				children={children}
				data-testid='typography'
				{...restProps}
			>
				{children}
			</TextWrapper>
		</div>
	);
};

Typography.propTypes = {
	/**
	 * decides the Typography variant
	 */
	variant: PropTypes.string,
	/**
	 * decides the Typography font size
	 */
	fontSize: PropTypes.number,

	/**
	 * decides the Typography font color
	 */
	fontColor: PropTypes.string,

	/**
	 * decides the Typography font color
	 */
	fontWeight: PropTypes.number,
};

Typography.defaultProps = {
	variant: null,
	fontSize: null,
	fontColor: null,
	fontWeight: null,
};

export default Typography;
