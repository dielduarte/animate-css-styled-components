import React from 'react';
import renderer from 'react-test-renderer';
import FadeInLeft from './InLeft';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeInLeft />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
