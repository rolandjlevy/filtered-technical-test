import React from 'react';
import App from '../components/App';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Component', () => {
  test('renders', () => {
    const div = shallow(<App />);
    expect(div).toMatchSnapshot();
  });
});