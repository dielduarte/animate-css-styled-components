import React from 'react';
import renderer from 'react-test-renderer';
import Hinge from './Hinge';

it('renders with default props', () => {
	const tree = renderer.create(
		<Hinge />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
