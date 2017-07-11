import React from 'react';
import renderer from 'react-test-renderer';
import FadeInDown from './InDown';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeInDown />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
