import React from 'react';
import AssetsHolder from '../components/AssetsHolder';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Component', () => {
  test('renders', () => {
    const li = shallow(<AssetsHolder />);
    expect(li).toMatchSnapshot();
  });
});
