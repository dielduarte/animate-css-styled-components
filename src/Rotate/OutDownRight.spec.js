import React from 'react';
import renderer from 'react-test-renderer';
import RotateOutDownRight from './OutDownRight';

it('renders with default props', () => {
	const tree = renderer.create(
		<RotateOutDownRight />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
