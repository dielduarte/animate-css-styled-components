import React from 'react';
import renderer from 'react-test-renderer';
import ZoomOutLeft from './OutLeft';

it('renders with default props', () => {
	const tree = renderer.create(
		<ZoomOutLeft />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
