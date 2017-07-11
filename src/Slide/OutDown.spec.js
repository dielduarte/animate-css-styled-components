import React from 'react';
import renderer from 'react-test-renderer';
import SlideOutDown from './OutDown';

it('renders with default props', () => {
	const tree = renderer.create(
		<SlideOutDown />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
