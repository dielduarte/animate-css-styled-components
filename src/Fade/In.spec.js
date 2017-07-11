import React from 'react';
import renderer from 'react-test-renderer';
import FadeIn from './In';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeIn />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
