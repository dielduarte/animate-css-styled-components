import React from 'react';
import renderer from 'react-test-renderer';
import BounceInUp from './InUp';

it('renders with default props', () => {
	const tree = renderer.create(
		<BounceInUp />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
