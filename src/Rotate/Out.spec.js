import React from 'react';
import renderer from 'react-test-renderer';
import RotateOut from './Out';

it('renders with default props', () => {
	const tree = renderer.create(
		<RotateOut />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
