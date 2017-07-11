import React from 'react';
import renderer from 'react-test-renderer';
import RotateOutUpLeft from './OutUpLeft';

it('renders with default props', () => {
	const tree = renderer.create(
		<RotateOutUpLeft />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
