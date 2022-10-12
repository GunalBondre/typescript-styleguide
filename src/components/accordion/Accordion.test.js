import { render, screen } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion component:', () => {
	it('should render the accordion component', () => {
		const { container } = render(
			<Accordion>
				<Accordion.Item key={1}>
					<Accordion.Heading>Accordion 1</Accordion.Heading>
					<Accordion.Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					</Accordion.Description>
				</Accordion.Item>
			</Accordion>
		);

		expect(container).toMatchSnapshot();
		expect(screen.getByTestId('accordion')).toBeInTheDocument();
	});
});
