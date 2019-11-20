import React from 'react';
import { shallow } from 'enzyme';
import Asses from '../../src/components/asses/Asses';

describe('App component', () => {
  it('renders App', () => {
    const asses = [
      {
        gradeUrl: 'http',
        assignmentName: 'todo'
      },
      {
        gradeUrl: 'http',
        assignmentName: 'todo'
      },
      {
        gradeUrl: 'http',
        assignmentName: 'todo'
      }
    ];
    const wrapper = shallow(<Asses asses={asses} />);
    expect(wrapper).toMatchSnapshot();
  });
});
