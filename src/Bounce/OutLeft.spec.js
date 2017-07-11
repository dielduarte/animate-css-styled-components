import React from 'react';
import renderer from 'react-test-renderer';
import BounceOutLeft from './OutLeft';

it('renders with default props', () => {
	const tree = renderer.create(
		<BounceOutLeft />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
