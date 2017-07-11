import React from 'react';
import renderer from 'react-test-renderer';
import Wobble from './Wobble';

it('renders with default props', () => {
	const tree = renderer.create(
		<Wobble />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
