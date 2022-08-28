import React from 'react';
import PropTypes from 'prop-types';
import {
	AccordionHeadingWrapper,
	HeadingIconWrapper,
	HeadingWrapper,
} from '../Accordion.style';

import { FaPlus, FaMinus } from 'react-icons/fa';
const AccordionHeading = ({
	children,
	open,
	setOpen,
	active,
	setActive,
	index,
	isActive,
}) => {
	const handleClick = (e) => {
		setOpen(!open);
		setActive(active === index ? null : index);
	};
	return (
		<AccordionHeadingWrapper
			open={open}
			isActive={isActive}
			onClick={handleClick}
		>
			<HeadingWrapper>{children}</HeadingWrapper>
			<HeadingIconWrapper>
				{isActive ? <FaMinus /> : <FaPlus />}
			</HeadingIconWrapper>
		</AccordionHeadingWrapper>
	);
};

AccordionHeading.propTypes = {
	/**
	 * Children denotes accordion childrens
	 */
	children: PropTypes.node,
};

export default AccordionHeading;
