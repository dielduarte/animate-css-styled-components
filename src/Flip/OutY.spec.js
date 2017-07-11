import React from 'react';
import renderer from 'react-test-renderer';
import FlipOutY from './OutY';

it('renders with default props', () => {
	const tree = renderer.create(
		<FlipOutY />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
