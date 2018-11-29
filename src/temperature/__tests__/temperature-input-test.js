import React from 'react';
import renderer from 'react-test-renderer';

import { TemperatureInput } from '../temperature-input';

it('renders correctly', () => {
    const tree = renderer
      .create(<TemperatureInput temperature={1010}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});