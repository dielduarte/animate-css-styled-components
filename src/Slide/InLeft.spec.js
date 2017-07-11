import React from 'react';
import renderer from 'react-test-renderer';
import SlideInLeft from './InLeft';

it('renders with default props', () => {
	const tree = renderer.create(
		<SlideInLeft />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
