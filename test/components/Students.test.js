import React from 'react';
import { shallow } from 'enzyme';
import Students from '../../src/components/student/Students';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Students
      filterTa={'jared'}
      handleStudentSelect={jest.fn()}
      students={[]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
