import React from 'react';
import renderer from 'react-test-renderer';
import RotateIn from './In';

it('renders with default props', () => {
	const tree = renderer.create(
		<RotateIn />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
