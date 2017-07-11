import React from 'react';
import renderer from 'react-test-renderer';
import FadeOutRight from './OutRight';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeOutRight />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
