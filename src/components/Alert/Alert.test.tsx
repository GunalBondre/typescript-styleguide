import { render, screen } from '@testing-library/react';
import Alert from './Alert';

describe('Alert component', () => {
	it('should render success alert component', () => {
		render(<Alert variant='success' message='success alert' />);

		expect(screen.getByTestId('alert')).toBeDefined();
	});
	it('should render error alert component', () => {
		render(<Alert variant='error' message='error alert' />);

		expect(screen.getByTestId('alert')).toBeDefined();
	});
	it('should render warning alert component', () => {
		render(<Alert variant='warning' message='warning alert' />);

		expect(screen.getByTestId('alert')).toBeDefined();
	});
	it('should render general alert component', () => {
		render(<Alert variant='general' message='general alert' />);

		expect(screen.getByTestId('alert')).toBeDefined();
	});
	it('should render alert component with button and text', () => {
		render(
			<Alert
				variant='general'
				message='general alert'
				action_button
				action_button_text='click Me'
			/>
		);

		expect(screen.getByTestId('alert')).toBeDefined();
	});
});
