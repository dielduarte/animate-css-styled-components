import React from 'react';
import renderer from 'react-test-renderer';
import BounceInLeft from './InLeft';

it('renders with default props', () => {
	const tree = renderer.create(
		<BounceInLeft />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
