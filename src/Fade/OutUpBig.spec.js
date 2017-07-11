import React from 'react';
import renderer from 'react-test-renderer';
import FadeOutUpBig from './OutUpBig';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeOutUpBig />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
