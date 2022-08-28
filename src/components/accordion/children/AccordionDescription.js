import React from 'react';
import PropTypes from 'prop-types';
import { AccordionDescriptionWrapper } from '../Accordion.style';

const AccordionDescription = ({ children, open, isActive, multiple }) => {
	console.log('description', isActive);
	return (
		<AccordionDescriptionWrapper
			open={open}
			isActive={isActive}
			multiple={multiple}
		>
			{isActive && <div>{children}</div>}
		</AccordionDescriptionWrapper>
	);
};

AccordionDescription.propTypes = {
	/**
	 * Children denotes accordion childrens
	 */
	children: PropTypes.node,
};

export default AccordionDescription;
