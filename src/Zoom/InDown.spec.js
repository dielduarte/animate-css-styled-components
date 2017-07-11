import React from 'react';
import renderer from 'react-test-renderer';
import ZoomInDown from './InDown';

it('renders with default props', () => {
	const tree = renderer.create(
		<ZoomInDown />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
