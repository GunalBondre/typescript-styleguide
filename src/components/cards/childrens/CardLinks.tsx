import React, { FC } from 'react';
import { CardLinkContainer } from '../Card.style';
import { CardProps } from '../Card.types';

const CardLinks: FC<CardProps> = ({ children, href }) => {
	return <CardLinkContainer href={href}>{children}</CardLinkContainer>;
};

export default CardLinks;
