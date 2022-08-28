import React, { FC } from 'react';
import PropTypes, { string } from 'prop-types';
import { CardBodyImageWrapper, CardWrapper } from './Card.style';
import CardBody from './childrens/CardBody';
import CardImage from './childrens/CardImage';
import CardHeader from './childrens/CardHeader';
import CardTitle from './childrens/CardTitle';
import CardText from './childrens/CardText';
import CardLinks from './childrens/CardLinks';
import { CardProps } from './Card.types';

const Card: FC<CardProps> = ({
	bg,
	borderColor,
	textColor,
	borderRadius,
	children,
	width,
	...rest
}) => {
	return (
		<CardWrapper
			bg={bg}
			borderColor={borderColor}
			textColor={textColor}
			width={width}
			borderRadius={borderRadius}
			{...rest}
		>
			<CardBodyImageWrapper
				bg={bg}
				borderColor={borderColor}
				textColor={textColor}
			>
				{React.Children.map(children, (child) => {
					if (React.isValidElement(child)) {
						return React.cloneElement(child, { textColor } as CardProps);
					}
				})}
			</CardBodyImageWrapper>
		</CardWrapper>
	);
};
export default Object.assign(Card, {
	Body: CardBody,
	Image: CardImage,
	Header: CardHeader,
	Text: CardText,
	Title: CardTitle,
	Link: CardLinks,
});

Card.propTypes = {
	bg: PropTypes.string,
};

// export default Card;
