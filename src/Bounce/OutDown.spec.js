import React from 'react';
import renderer from 'react-test-renderer';
import BounceOutDown from './OutDown';

it('renders with default props', () => {
	const tree = renderer.create(
		<BounceOutDown />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
