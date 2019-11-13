import React, { Component } from 'react';
import { getAllStudents, getAsses } from '../services/getGrades';
import Students from '../components/student/Students';
import Asses from '../components/asses/Asses';
import styles from './main.css';
import loading from '../../assets/loading.gif';
import scorpion from '../../assets/scorpion.png';
import ApiForm from '../components/ApiForm';

class Main extends Component {
  state = {
    students: [],
    studentAsses: null,
    studentLoading: false,
    assLoading: false,
    apiKey: null
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ studentLoading: true });
    getAllStudents(this.state.apiKey)
      .then(students => this.setState({ students }))
      .then(() => this.setState({ studentLoading: false }));
  }

  handleClick = (kido) => {
    this.setState({ 
      assLoading: true,
      studentAsses: null
    });
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
      <>
        <ApiForm handleChange={this.handleChange} handleFormSubmit={this.handleFormSubmit}/>
        {this.state.apiKey && <section className={styles.bigGuy}>
          {!this.state.studentLoading && <Students students={this.state.students} selectStudent={this.handleClick} handleStudentSelect={this.handleStudentSelect}/>}
          {this.state.studentAsses && <Asses asses={this.state.studentAsses}/>}
          {this.state.assLoading && <div className={styles.scorpLoader}><img src={scorpion} /></div>}
        </section>}
      </>
    );
  }
}

export default Main;
