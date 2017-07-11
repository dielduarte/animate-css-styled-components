import React from 'react';
import renderer from 'react-test-renderer';
import FadeInRightBig from './InRightBig';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeInRightBig />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
