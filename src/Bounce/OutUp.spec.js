import React from 'react';
import renderer from 'react-test-renderer';
import BounceOutUp from './OutUp';

it('renders with default props', () => {
	const tree = renderer.create(
		<BounceOutUp />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
