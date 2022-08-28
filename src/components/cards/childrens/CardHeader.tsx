import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { CardHeaderContiner } from '../Card.style';
import { CardProps } from '../Card.types';

const CardHeader: FC<CardProps> = ({ bgColor, children, ...rest }) => {
	return (
		<CardHeaderContiner bgColor={bgColor} {...rest}>
			{children}
		</CardHeaderContiner>
	);
};

export default CardHeader;
