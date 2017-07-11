import React from 'react';
import renderer from 'react-test-renderer';
import FadeInLeftBig from './InLeftBig';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeInLeftBig />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
