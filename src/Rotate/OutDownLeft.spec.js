import React from 'react';
import renderer from 'react-test-renderer';
import RotateOutDownLeft from './OutDownLeft';

it('renders with default props', () => {
	const tree = renderer.create(
		<RotateOutDownLeft />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
