import React from 'react';
import renderer from 'react-test-renderer';
import Flip from './index';

it('renders with default props', () => {
	const tree = renderer.create(
		<Flip />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
