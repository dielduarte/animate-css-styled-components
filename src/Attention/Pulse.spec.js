import React from 'react';
import renderer from 'react-test-renderer';
import Pulse from './Pulse';

it('renders with default props', () => {
	const tree = renderer.create(
		<Pulse />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
