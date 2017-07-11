import React from 'react';
import renderer from 'react-test-renderer';
import RollOut from './RollOut';

it('renders with default props', () => {
	const tree = renderer.create(
		<RollOut />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
