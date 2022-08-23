import { render, screen } from '@testing-library/react';
import Box from './Box';

test('renders Box component', () => {
	render(<Box />);
	expect(screen.getByTestId('box')).toBeDefined();
});

test('renders Box component with maxWidth prop', () => {
	render(<Box mxWidth='350' />);
	expect(screen.getByTestId('box')).toHaveStyle('max-width:350px');
});

test('renders Box component with bgColor prop', () => {
	render(<Box bgColor='red' />);
	expect(screen.getByTestId('box')).toHaveStyle('background-color:red');
});
