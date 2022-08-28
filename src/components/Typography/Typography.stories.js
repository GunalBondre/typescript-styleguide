import Typography from './Typography';

export default {
	title: 'Design System/Components/Typography',
	component: Typography,
};

const Template = (args) => <Typography {...args}>Hello World!</Typography>;

export const H1 = Template.bind({});

H1.args = {
	variant: 'h1',
};

export const H2 = Template.bind({});

H2.args = {
	variant: 'h2',
};

export const H3 = Template.bind({});

H3.args = {
	variant: 'h3',
};
export const H4 = Template.bind({});

H4.args = {
	variant: 'h4',
};
export const H5 = Template.bind({});

H5.args = {
	variant: 'h5',
};
export const H6 = Template.bind({});

H6.args = {
	variant: 'h6',
};

export const Paragraph = Template.bind({});

Paragraph.args = {
	variant: 'paragraph',
};

export const ColorParagraph = Template.bind({});

ColorParagraph.args = {
	variant: 'paragraph',
	fontSize: '30px',
	fontWeight: 'bold',
	fontColor: 'green',
};
