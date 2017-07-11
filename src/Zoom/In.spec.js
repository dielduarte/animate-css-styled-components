import React from 'react';
import renderer from 'react-test-renderer';
import ZoomIn from './In';

it('renders with default props', () => {
	const tree = renderer.create(
		<ZoomIn />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
