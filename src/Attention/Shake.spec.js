import React from 'react';
import renderer from 'react-test-renderer';
import Shake from './Shake';

it('renders with default props', () => {
	const tree = renderer.create(
		<Shake />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
