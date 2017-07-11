import React from 'react';
import renderer from 'react-test-renderer';
import ZoomOutUp from './OutUp';

it('renders with default props', () => {
	const tree = renderer.create(
		<ZoomOutUp />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
