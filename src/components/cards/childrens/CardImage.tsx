import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Cardimage } from '../Card.style';
import { CardProps } from '../Card.types';

const CardImage: FC<CardProps> = ({ position, children, ...rest }) => {
	return (
		<Cardimage position={position} {...rest}>
			{children}
		</Cardimage>
	);
};

export default CardImage;
