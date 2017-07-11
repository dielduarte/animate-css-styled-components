import React from 'react';
import renderer from 'react-test-renderer';
import Jello from './Jello';

it('renders with default props', () => {
	const tree = renderer.create(
		<Jello />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
