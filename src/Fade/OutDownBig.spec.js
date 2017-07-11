import React from 'react';
import renderer from 'react-test-renderer';
import FadeOutDownBig from './OutDownBig';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeOutDownBig />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
