import React from 'react';
import renderer from 'react-test-renderer';
import RubberBand from './RubberBand';

it('renders with default props', () => {
	const tree = renderer.create(
		<RubberBand />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
