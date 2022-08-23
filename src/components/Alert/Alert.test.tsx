import { render, screen } from '@testing-library/react';
import Alert from './Alert';

describe('Alert component', () => {
	it('should render alert component', () => {
		render(<Alert variant='success' message='success alert' />);

		expect(screen.getByTestId('alert')).toBeDefined();
	});
});
