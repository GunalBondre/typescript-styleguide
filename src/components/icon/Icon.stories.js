import Icon from './Icon';

export default {
	title: 'Design System/Components/Icon',
	component: Icon,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Icon {...args} />;

export const warningIcon = Template.bind({});
warningIcon.args = {
	name: 'warning',
};

export const errorIcon = Template.bind({});
errorIcon.args = {
	name: 'error',
	size: '48',
	color: 'red',
};
