import React from 'react';
import renderer from 'react-test-renderer';
import Tada from './Tada';

it('renders with default props', () => {
	const tree = renderer.create(
		<Tada />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
