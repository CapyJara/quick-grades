import React from 'react';
import { shallow } from 'enzyme';
import TestAss from '../../src/components/pages/TestAss';

describe('TestAss component', () => {
  it('renders TestAss', () => {
    const wrapper = shallow(<TestAss />);
    expect(wrapper).toMatchSnapshot();
  });
});
