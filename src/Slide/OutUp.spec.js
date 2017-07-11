import React from 'react';
import renderer from 'react-test-renderer';
import SlideOutUp from './OutUp';

it('renders with default props', () => {
	const tree = renderer.create(
		<SlideOutUp />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
