import React from 'react';
import renderer from 'react-test-renderer';
import Flash from './Flash';

it('renders with default props', () => {
	const tree = renderer.create(
		<Flash />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
