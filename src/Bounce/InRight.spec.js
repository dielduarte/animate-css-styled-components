import React from 'react';
import renderer from 'react-test-renderer';
import BounceInRight from './InRight';

it('renders with default props', () => {
	const tree = renderer.create(
		<BounceInRight />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
