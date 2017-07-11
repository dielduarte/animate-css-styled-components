import React from 'react';
import renderer from 'react-test-renderer';
import FadeOut from './Out';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeOut />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
