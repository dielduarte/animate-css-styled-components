import React from 'react';
import renderer from 'react-test-renderer';
import FadeInUpBig from './InUpBig';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeInUpBig />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
