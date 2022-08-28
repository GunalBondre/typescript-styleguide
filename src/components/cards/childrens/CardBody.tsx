import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { CardBodyContiner } from '../Card.style';
import { CardProps } from '../Card.types';

const CardBody: FC<CardProps> = (props): JSX.Element => {
	const { textColor, padding, children, ...rest } = props;
	return (
		<CardBodyContiner textColor={textColor} padding={padding} {...rest}>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, { textColor } as CardProps);
				}
			})}
		</CardBodyContiner>
	);
};

CardBody.propTypes = {
	textColor: PropTypes.string,
};

export default CardBody;
