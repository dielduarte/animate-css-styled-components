import React from 'react';
import renderer from 'react-test-renderer';
import ZoomOutRight from './OutRight';

it('renders with default props', () => {
	const tree = renderer.create(
		<ZoomOutRight />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
