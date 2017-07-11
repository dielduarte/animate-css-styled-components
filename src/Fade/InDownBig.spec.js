import React from 'react';
import renderer from 'react-test-renderer';
import FadeInDownBig from './InDownBig';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeInDownBig />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
