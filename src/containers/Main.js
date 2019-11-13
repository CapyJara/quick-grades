import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import studentAsses from '../../data/john-pending.json';
import { getAllStudents, getAsses } from '../services/getGrades';
import Students from '../components/student/Students';


class Main extends PureComponent {
  state = {
    students: [],
    studentAsses: null,
    studentLoading: true,
    assLoading: false
  };

  componentDidMount() {
    getAllStudents().then(students => this.setState({ students }))
      .then(() => this.setState({ studentLoading: false }));
  }

  handleClick = (id) => {
    this.setState({ assLoading: true });
    getAsses(id)
      .then(asses => this.setState(state => ({ ...state, studentAsses: asses })))
      .then(() => this.setState({ assLoading: true }));
  }

  render() {

    return (
      <>
        { !this.state.studentLoading && <Students students={this.state.students} selectStudent={this.handleClick}/>}
      </>
    );
  }
}

export default Main;
