import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AccordionItemWrapper } from '../Accordion.style';

const AccordionItem = ({
	children,
	alwaysOpen,
	index,
	active,
	setActive,
	multiple,
}) => {
	const [open, setOpen] = useState(false);
	const current = active === index;
	const isActive = multiple ? open : current;
	useEffect(() => {
		if (alwaysOpen && multiple) {
			setOpen(true);
		}
	}, [alwaysOpen, multiple, setActive]);

	return (
		<AccordionItemWrapper
			key={index}
			alwaysOpen={alwaysOpen}
			className={active ? `active` : ''}
			multiple={multiple}
		>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					open,
					setOpen,
					active,
					setActive,
					index,
					isActive,
					multiple,
				});
			})}
		</AccordionItemWrapper>
	);
};

AccordionItem.propTypes = {
	/**
	 * Children denotes accordion childrens
	 */
	children: PropTypes.node,
};

export default AccordionItem;
