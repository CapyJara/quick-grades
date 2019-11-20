import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../src/containers/Main';

describe('Main component', () => {
  it('renders Main', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
