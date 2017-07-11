import React from 'react';
import renderer from 'react-test-renderer';
import RotateInDownRight from './InDownRight';

it('renders with default props', () => {
	const tree = renderer.create(
		<RotateInDownRight />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
