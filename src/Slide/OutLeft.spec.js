import React from 'react';
import renderer from 'react-test-renderer';
import SlideOutLeft from './OutLeft';

it('renders with default props', () => {
	const tree = renderer.create(
		<SlideOutLeft />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
