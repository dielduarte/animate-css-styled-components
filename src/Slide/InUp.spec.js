import React from 'react';
import renderer from 'react-test-renderer';
import SlideInUp from './InUp';

it('renders with default props', () => {
	const tree = renderer.create(
		<SlideInUp />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
