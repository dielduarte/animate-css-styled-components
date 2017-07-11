import React from 'react';
import renderer from 'react-test-renderer';
import RotateInUpRight from './InUpRight';

it('renders with default props', () => {
	const tree = renderer.create(
		<RotateInUpRight />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
