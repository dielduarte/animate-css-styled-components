import React from 'react';
import renderer from 'react-test-renderer';
import RotateInDownLeft from './InDownLeft';

it('renders with default props', () => {
	const tree = renderer.create(
		<RotateInDownLeft />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
