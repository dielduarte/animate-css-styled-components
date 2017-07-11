import React from 'react';
import renderer from 'react-test-renderer';
import RollIn from './RollIn';

it('renders with default props', () => {
	const tree = renderer.create(
		<RollIn />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
