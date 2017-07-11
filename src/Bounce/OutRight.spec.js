import React from 'react';
import renderer from 'react-test-renderer';
import BounceOutRight from './OutRight';

it('renders with default props', () => {
	const tree = renderer.create(
		<BounceOutRight />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
