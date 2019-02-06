import React from 'react';
import SidebarButton from './SidebarButton';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Component', () => {
  test('renders', () => {
    const li = shallow(<SidebarButton />);
    expect(li).toMatchSnapshot();
  });
});
