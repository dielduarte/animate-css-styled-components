import React from 'react';
import renderer from 'react-test-renderer';
import LightSpeedOut from './Out';

it('renders with default props', () => {
	const tree = renderer.create(
		<LightSpeedOut />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
