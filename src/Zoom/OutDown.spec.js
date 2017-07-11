import React from 'react';
import renderer from 'react-test-renderer';
import ZoomOutDown from './OutDown';

it('renders with default props', () => {
	const tree = renderer.create(
		<ZoomOutDown />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
