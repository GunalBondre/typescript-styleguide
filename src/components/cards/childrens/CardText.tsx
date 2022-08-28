import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { CardTextContiner } from '../Card.style';
import { CardProps } from '../Card.types';

const CardText: FC<CardProps> = ({ textColor, children, ...rest }) => {
	return (
		<CardTextContiner textColor={textColor} {...rest}>
			{children}
		</CardTextContiner>
	);
};

CardText.propTypes = {
	textColor: PropTypes.string,
};

export default CardText;
