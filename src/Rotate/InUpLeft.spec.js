import React from 'react';
import renderer from 'react-test-renderer';
import RotateInUpLeft from './InUpLeft';

it('renders with default props', () => {
	const tree = renderer.create(
		<RotateInUpLeft />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
