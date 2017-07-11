import React from 'react';
import renderer from 'react-test-renderer';
import FadeOutRightBig from './OutRightBig';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeOutRightBig />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
