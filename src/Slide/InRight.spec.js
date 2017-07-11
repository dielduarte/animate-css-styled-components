import React from 'react';
import renderer from 'react-test-renderer';
import SlideInRight from './InRight';

it('renders with default props', () => {
	const tree = renderer.create(
		<SlideInRight />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
