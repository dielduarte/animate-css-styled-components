import React from 'react';
import renderer from 'react-test-renderer';
import FlipOutX from './OutX';

it('renders with default props', () => {
	const tree = renderer.create(
		<FlipOutX />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
