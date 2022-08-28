import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Typography from './Typography';

test('should render Typography component', () => {
	render(<Typography />);

	expect(screen.getByTestId('typography')).toBeInTheDocument();
});

test('should render H1 component', () => {
	render(<Typography variant={'h1'} />);

	expect(screen.getByTestId('typography')).toHaveStyle('font-size:32px');
});

test('should render H2 component', () => {
	render(<Typography variant={'h2'} />);

	expect(screen.getByTestId('typography')).toHaveStyle('font-size:26px');
});

test('should render H3 component', () => {
	render(<Typography variant={'h3'} />);

	expect(screen.getByTestId('typography')).toHaveStyle('font-size:22px');
});

test('should render H4 component', () => {
	render(<Typography variant={'h4'} />);

	expect(screen.getByTestId('typography')).toHaveStyle('font-size:18px');
});

test('should render H5 component', () => {
	render(<Typography variant={'h5'} />);

	expect(screen.getByTestId('typography')).toHaveStyle('font-size:14px');
});

test('should render H6 component', () => {
	render(<Typography variant={'h6'} />);

	expect(screen.getByTestId('typography')).toHaveStyle('font-size:12px');
});

test('should render paragraph component', () => {
	render(<Typography variant={'paragraph'} />);

	expect(screen.getByTestId('typography')).toHaveStyle('font-size:18px');
});

test('should render paragraph component with custome size,weight,color', () => {
	render(
		<Typography
			variant={'paragraph'}
			fontColor='blue'
			fontWeight={`bold`}
			fontSize='30px'
		/>
	);

	expect(screen.getByTestId('typography')).toHaveStyle('font-size:30px');
	expect(screen.getByTestId('typography')).toHaveStyle('font-weight:bold');
	expect(screen.getByTestId('typography')).toHaveStyle('color:blue');
});
