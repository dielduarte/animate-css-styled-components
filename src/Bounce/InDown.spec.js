import React from 'react';
import renderer from 'react-test-renderer';
import BounceInDown from './InDown';

it('renders with default props', () => {
	const tree = renderer.create(
		<BounceInDown />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
