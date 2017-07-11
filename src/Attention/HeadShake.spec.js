import React from 'react';
import renderer from 'react-test-renderer';
import HeadShake from './HeadShake';

it('renders with default props', () => {
	const tree = renderer.create(
		<HeadShake />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
