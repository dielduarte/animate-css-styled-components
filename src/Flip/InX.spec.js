import React from 'react';
import renderer from 'react-test-renderer';
import FlipInX from './InX';

it('renders with default props', () => {
	const tree = renderer.create(
		<FlipInX />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
