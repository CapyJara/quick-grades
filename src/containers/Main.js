import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import studentList from '../../data/students.json';
import Students from '../components/student/Students.js';
import studentAsses from '../../data/john-pending.json';

class Main extends PureComponent {
  state = {
    students: studentList,
    studentAsses: studentAsses
  };

  render() {

    return (
      <>
        <Students students={this.state.students} />
      </>
    );
  }
}

export default Main;
