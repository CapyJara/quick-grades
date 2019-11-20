import React from 'react';
import { shallow } from 'enzyme';
import ApiForm from '../../src/components/form/ApiForm';

describe('ApiForm component', () => {
  it('renders ApiForm', () => {
    const wrapper = shallow(<ApiForm 
      tas={[]} 
      handleChange={jest.fn()}
      handleFormSubmit={jest.fn()}
      getFreshData={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
