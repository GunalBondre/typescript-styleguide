import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from './TextInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Design System/Components/TextInput',
	component: TextInput,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);

export const Outlined = Template.bind({});

Outlined.args = {
	variant: 'outlined',
	placeholder: 'Outlined variant',
};

export const Standard = Template.bind({});

Standard.args = {
	variant: 'standard',
	label: 'standard variant',
};

export const BasicWithLabel = Template.bind({});

BasicWithLabel.args = {
	variant: 'outlined',
	label: 'outlined',
};

export const CustomBorderColor = Template.bind({});

CustomBorderColor.args = {
	variant: 'outlined',
	label: 'custom border property',
	borderColor: 'red',
	borderRadius: '10',
};

export const CustomFontSize = Template.bind({});

CustomFontSize.args = {
	variant: 'outlined',
	label: 'custom font property',
	fontSize: '22',
	textColor: 'red',
};
