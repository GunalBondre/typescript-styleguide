import React from 'react';
import PropTypes from 'prop-types';
import { AccordionWrapper } from './Accordion.style';
import AccordionItem from './children/AccordionItem';
import AccordionHeading from './children/AccordionHeading';
import AccordionDescription from './children/AccordionDescription';
import { useState } from 'react';

const Accordion = ({ children, alwaysOpen, multiple, ...restProps }) => {
	const [active, setActive] = useState(null);

	return (
		<div>
			<AccordionWrapper
				alwaysOpen={alwaysOpen}
				children={children}
				multiple={multiple}
				{...restProps}
			>
				{React.Children.map(children, (child, index) => {
					return React.cloneElement(child, {
						index,
						active,
						setActive,
						multiple,
					});
				})}
			</AccordionWrapper>
		</div>
	);
};

Accordion.Item = AccordionItem;
Accordion.Heading = AccordionHeading;
Accordion.Description = AccordionDescription;

Accordion.propTypes = {
	/**
	 * Children denotes accordion childrens
	 */
	children: PropTypes.node,
	/**
	 * always opem denotes accordion open or not
	 */
	alwaysOpen: PropTypes.bool,
};

export default Accordion;
