import React from 'react';
import renderer from 'react-test-renderer';
import FadeInRight from './InRight';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeInRight />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
