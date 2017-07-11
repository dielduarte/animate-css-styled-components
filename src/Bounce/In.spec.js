import React from 'react';
import renderer from 'react-test-renderer';
import BounceIn from './In';

it('renders with default props', () => {
	const tree = renderer.create(
		<BounceIn />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
