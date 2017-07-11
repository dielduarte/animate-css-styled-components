import React from 'react';
import renderer from 'react-test-renderer';
import SlideOutRight from './OutRight';

it('renders with default props', () => {
	const tree = renderer.create(
		<SlideOutRight />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
