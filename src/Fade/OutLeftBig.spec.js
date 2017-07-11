import React from 'react';
import renderer from 'react-test-renderer';
import FadeOutLeftBig from './OutLeftBig';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeOutLeftBig />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
