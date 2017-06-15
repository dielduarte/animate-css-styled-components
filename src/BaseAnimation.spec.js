import React from 'react';
import renderer from 'react-test-renderer';
import  BaseAnimation from './BaseAnimation';

it('renders with default props', () => {
	const tree = renderer.create(
		<BaseAnimation />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
