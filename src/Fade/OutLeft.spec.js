import React from 'react';
import renderer from 'react-test-renderer';
import FadeOutLeft from './OutLeft';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeOutLeft />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
