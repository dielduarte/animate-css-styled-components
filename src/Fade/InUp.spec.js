import React from 'react';
import renderer from 'react-test-renderer';
import FadeInUp from './InUp';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeInUp />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
