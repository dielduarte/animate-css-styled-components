import React from 'react';
import renderer from 'react-test-renderer';
import FadeOutUp from './OutUp';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeOutUp />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
