import React from 'react';
import renderer from 'react-test-renderer';
import ZoomOut from './Out';

it('renders with default props', () => {
	const tree = renderer.create(
		<ZoomOut />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
