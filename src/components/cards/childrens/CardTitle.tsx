import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { CardTitleContiner } from '../Card.style';
import { CardProps } from '../Card.types';

const CardTitle: FC<CardProps> = ({ children }) => {
	return <CardTitleContiner>{children}</CardTitleContiner>;
};

export default CardTitle;
