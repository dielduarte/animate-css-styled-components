import React from 'react';
import renderer from 'react-test-renderer';
import ZoomInUp from './InUp';

it('renders with default props', () => {
	const tree = renderer.create(
		<ZoomInUp />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
