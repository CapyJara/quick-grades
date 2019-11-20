import React from 'react';
import { shallow } from 'enzyme';
import Ass from '../../src/components/asses/Ass';

describe('App component', () => {
  it('renders App', () => {
    const ass = {
      gradeUrl: 'http',
      assignmentName: 'todo'
    };
    const wrapper = shallow(<Ass ass={ass} />);
    expect(wrapper).toMatchSnapshot();
  });
});
