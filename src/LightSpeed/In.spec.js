import React from 'react';
import renderer from 'react-test-renderer';
import LightSpeedIn from './In';

it('renders with default props', () => {
	const tree = renderer.create(
		<LightSpeedIn />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
