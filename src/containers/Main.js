import React, { Component } from 'react';
import { getAllStudents, getAsses } from '../services/getGrades';
import Students from '../components/student/Students';
import Asses from '../components/asses/Asses';
import styles from './main.css';
import loading from '../../assets/loading.gif';

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

  handleStudentSelect(e) {
    const selected = document.querySelector(`.${styles.selected}`);
    if(selected) selected.className = selected.className.replace(styles.selected, '').replace(' ', '');
    e.currentTarget.className = `${e.currentTarget.className} ${styles.selected}`;
  }

  render() {
    if(this.state.studentLoading) {
      return (
        <section className={styles.loading}>
          <img src={loading} />
        </section>
      );
    }
    return (
      <section className={styles.bigGuy}>
        { !this.state.studentLoading && <Students students={this.state.students} selectStudent={this.handleClick} handleStudentSelect={this.handleStudentSelect}/>}
        {!this.state.assLoading && <Asses asses={this.state.studentAsses}/>}
      </section>
    );
  }
}

export default Main;
