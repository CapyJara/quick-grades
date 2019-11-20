import React from 'react';
import { shallow } from 'enzyme';
import Student from '../../src/components/student/Student';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Student 
      id={'12345'}
      name={'mike'}
      pending={4}
      missing={2}
      handleStudentSelect={jest.fn()} 
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
