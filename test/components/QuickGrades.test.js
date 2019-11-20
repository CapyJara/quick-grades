import React from 'react';
import { shallow } from 'enzyme';
import QuickGrades from '../../src/components/pages/QuickGrades';

describe('QuickGrades component', () => {
  it('renders QuickGrades', () => {
    const wrapper = shallow(<QuickGrades />);
    expect(wrapper).toMatchSnapshot();
  });
});
