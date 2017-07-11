import React from 'react';
import renderer from 'react-test-renderer';
import Bounce from './index';

it('renders with default props', () => {
	const tree = renderer.create(
		<Bounce />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
