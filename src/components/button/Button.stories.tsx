import { Meta, Story } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
	title: 'Design System/Components/Button',
	component: Button,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const primaryButton = Template.bind({});

primaryButton.args = {
	variant: 'primary',
	children: 'Primary Button',
};

export const secondaryButton = Template.bind({});

secondaryButton.args = {
	variant: 'secondary',
	children: 'secondary Button',
};

export const successButton = Template.bind({});

successButton.args = {
	variant: 'success',
	children: 'success Button',
};

export const infoButton = Template.bind({});

infoButton.args = {
	variant: 'info',
	children: 'Info Button',
	width: '300px',
};

// Danger button
export const DangerButton = Template.bind({});

DangerButton.args = {
	variant: 'danger',
	children: 'Danger Button',
	noBorder: true,
};

export const LightButton = Template.bind({});

LightButton.args = {
	variant: 'light',
	children: 'Light Button',
	customRadius: '20px',
	width: '200px',
	height: '50px',
	fontSize: '22px',
	color: 'red',
};

export const LinkButton = Template.bind({});

LinkButton.args = {
	variant: 'link',
	children: 'Link Button',
};

export const DisabledButton = Template.bind({});

DisabledButton.args = {
	variant: 'primary',
	children: 'Disabled Button',
	disabled: true,
};
