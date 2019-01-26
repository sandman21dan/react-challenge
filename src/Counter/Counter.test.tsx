import * as React from 'react';

import { shallow } from 'enzyme';
import Counter from './';

it('renders as expected', () => {
  const component = shallow(<Counter />);

  expect(component).toMatchSnapshot();
});
