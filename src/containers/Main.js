import React, { Component } from 'react';
import { getAllStudentsV2, getFreshies } from '../services/getGrades';
import Students from '../components/student/Students';
import Asses from '../components/asses/Asses';
import styles from './main.css';
import scorpion from '../../assets/scorpion.png';
import ApiForm from '../components/form/ApiForm';
import { studentDeets } from '../utils/studentDeets';

class Main extends Component {
  state = {
    students: [],
    studentAsses: {},
    studentLoading: false,
    apiKey: false,
    err: false,
    tas: false,
    filterTa: false,
    selectedStudent: false
  };

  handleChange = ({ target }) => {
    if(target.name === 'filterTa') {
      this.removeSelectedStudent();
      this.setState({ 
        [target.name]: target.value,
      });
    }
    else {
      this.setState({ [target.name]: target.value });
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ 
      students: [],
      studentLoading: true,
      err: false,
      tas: false,
      filterTa: false,
      selectStudent: false
    });
    getAllStudentsV2(this.state.apiKey)
      .then(res => {
        const studentsDetails = studentDeets(res);
        this.setState({ 
          studentLoading: false, 
          students: studentsDetails.students,
          studentAsses: studentsDetails.studentPendingAsses,
          tas: [...new Set(res.map(i => i.sectionNames).flat())]
        });
      })
      .catch(err => this.setState({ 
        err,
        studentLoading: false
      }));
  }

  removeSelectedStudent() {
    this.setState({ selectStudent: false });
    const selected = document.querySelector(`.${styles.selected}`);
    if(selected) selected.className = selected.className.replace(styles.selected, '').replace(' ', '');
  }

  handleStudentSelect = (id, e) => {
    this.removeSelectedStudent();
    this.setState({ selectStudent: id });
    e.currentTarget.className = `${e.currentTarget.className} ${styles.selected}`;
  }

  getFreshData = () => {
    document.querySelector('#student-select').selectedIndex = 0;
    document.querySelector('#api-input').value = null;

    this.setState({
      studentLoading: true,
      students: [],
      filterTa: false,
      err: false,
      selectStudent: false
    });

    getFreshies(this.state.apiKey)
      .then(students => this.setState({ 
        students,
        studentLoading: false,
        tas: [...new Set(students.map(i => i.sectionNames).flat())]
      }))
      .catch(err => this.setState({ 
        err,
        studentLoading: false,
      }));
  }

  render() {

    return (
      <>
        <ApiForm 
          tas={this.state.tas} 
          handleChange={this.handleChange} 
          handleFormSubmit={this.handleFormSubmit} 
          getFreshData={this.getFreshData} 
        />

        {this.state.err && <h2>Could not fetch</h2>}
        {this.state.studentLoading && 
          <section className={styles.scorpLoader}>
            <img src={scorpion} />
          </section>
        }

        {!this.state.studentLoading && 
          <section className={styles.bigGuy}>
            <Students 
              filterTa={this.state.filterTa} 
              students={this.state.students} 
              handleStudentSelect={this.handleStudentSelect}
            />

            {this.state.selectStudent && 
              <Asses asses={this.state.studentAsses[this.state.selectStudent]}
              />}
          </section>
        }
      </>
    );
  
  }
}

export default Main;



