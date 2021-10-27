import { render } from '@testing-library/react';
import { Placeholder } from './List';

test('renders placeholder component', () => {
	const { getByText } = render(Placeholder);

	const linkElement = getByText(/Your code goes here/i);

	expect(linkElement).toBeInTheDocument();
});
