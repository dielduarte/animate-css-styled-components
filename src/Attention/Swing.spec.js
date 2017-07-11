import React from 'react';
import renderer from 'react-test-renderer';
import Swing from './Swing';

it('renders with default props', () => {
	const tree = renderer.create(
		<Swing />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
