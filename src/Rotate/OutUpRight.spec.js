import React from 'react';
import renderer from 'react-test-renderer';
import RotateOutUpRight from './OutUpRight';

it('renders with default props', () => {
	const tree = renderer.create(
		<RotateOutUpRight />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
