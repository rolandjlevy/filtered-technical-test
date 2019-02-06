import React from 'react';
import Asset from '../components/Asset';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Component', () => {
  test('renders', () => {
    const li = shallow(<Asset />);
    expect(li).toMatchSnapshot();
  });
});
