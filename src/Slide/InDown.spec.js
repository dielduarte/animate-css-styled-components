import React from 'react';
import renderer from 'react-test-renderer';
import SlideInDown from './InDown';

it('renders with default props', () => {
	const tree = renderer.create(
		<SlideInDown />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
