import React from 'react';
import renderer from 'react-test-renderer';
import FlipInY from './InY';

it('renders with default props', () => {
	const tree = renderer.create(
		<FlipInY />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
