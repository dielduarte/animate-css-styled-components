import React from 'react';
import renderer from 'react-test-renderer';
import FadeOutDown from './OutDown';

it('renders with default props', () => {
	const tree = renderer.create(
		<FadeOutDown />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
