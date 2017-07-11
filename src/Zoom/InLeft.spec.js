import React from 'react';
import renderer from 'react-test-renderer';
import ZoomInLeft from './InLeft';

it('renders with default props', () => {
	const tree = renderer.create(
		<ZoomInLeft />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
