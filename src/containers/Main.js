import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { getAllStudents, getAsses } from '../services/getGrades';
import Students from '../components/student/Students';
import Asses from '../components/asses/Asses';
import styles from './main.css';


class Main extends Component {
  state = {
    students: [],
    studentAsses: null,
    studentLoading: true,
    assLoading: true
  };

  componentDidMount() {
    getAllStudents().then(students => this.setState({ students }))
      .then(() => this.setState({ studentLoading: false }));
  }

  handleClick = (kido) => {
    this.setState({ assLoading: true });
    getAsses(kido)
      .then(asses => this.setState(state => ({ ...state, studentAsses: asses })))
      .then(() => this.setState({ assLoading: false }));
  }

  render() {

    return (
      <section className={styles.bigGuy}>
        { !this.state.studentLoading && <Students students={this.state.students} selectStudent={this.handleClick}/>}
        {!this.state.assLoading && <Asses asses={this.state.studentAsses}/>}
      </section>
    );
  }
}

export default Main;
