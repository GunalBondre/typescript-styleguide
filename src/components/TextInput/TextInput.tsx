import React, { FC, useState, useEffect, useCallback } from 'react';
import {
	InputLabelWrapper,
	InputWrapper,
	LabelWrapper,
} from './TextInput.style';
import { TextInputProps } from './TextInput.types';

import useDebounce from '../hooks/useDebounce';

const TextInput: FC<TextInputProps> = ({
	variant,
	label,
	placeholder,
	width,
	height,
	borderColor,
	borderRadius,
	padding,
	fontSize,
	textColor,
	bgColor,
	labelPosition,
	maxWidth,
	disabled,
	type,
	onChange,
	name,
	...rest
}) => {
	const [isActive, setIsActive] = useState(false);
	const [value, setValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	const debouncedChangeHandler = useCallback(
		useDebounce(handleChange, 1000),
		[]
	);

	useEffect(() => {
		if (value !== '') {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [value]);

	return (
		<InputLabelWrapper>
			<LabelWrapper variant={variant} className={isActive ? 'active' : ''}>
				{!placeholder && label}
			</LabelWrapper>
			<InputWrapper
				variant={variant}
				placeholder={placeholder}
				width={width}
				height={height}
				borderColor={borderColor}
				borderRadius={borderRadius}
				padding={padding}
				fontSize={fontSize}
				textColor={textColor}
				bgColor={bgColor}
				labelPosition={labelPosition}
				maxWidth={maxWidth}
				disabled={disabled}
				onChange={debouncedChangeHandler}
				isActive={isActive}
				type={type}
				{...rest}
			/>
		</InputLabelWrapper>
	);
};

export default TextInput;
