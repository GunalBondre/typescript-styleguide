import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Component Button:', () => {
	it('should render the button component', () => {
		const { container } = render(<Button variant='primary' />);

		expect(screen.getByTestId('button-test')).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	it('should render the button with width prop', () => {
		render(<Button variant='primary' width='350px' />);

		expect(screen.getByTestId('button-test')).toHaveStyle('width:350px');
	});

	it('should render the button with custom border radius ', () => {
		render(<Button variant='primary' customRadius='20px' />);

		expect(screen.getByTestId('button-test')).toHaveStyle('border-radius:20px');
	});

	it('should render the button with custom font size and color ', () => {
		render(<Button variant='primary' fontSize='18px' color='red' />);

		expect(screen.getByTestId('button-test')).toHaveStyle('font-size:18px');
		expect(screen.getByTestId('button-test')).toHaveStyle('color:red');
	});
});
