import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';
import styles from './students.css';

const Students = ({ filterTa, students, selectStudent, handleStudentSelect }) => {
  const studentItems = students
    .sort((a, b) => (b.pendingSubmissions.length - a.pendingSubmissions.length))
    .filter(i => {
      if(filterTa) return i.section.includes(filterTa);
      return i;
    })
    .map((student, i) => {
      return (
        <Student 
          key={i} 
          id={student.id}
          name={student.name} 
          pending={student.pendingSubmissions} 
          missing={student.missingSubmissions}
          selectStudent={selectStudent} 
          handleStudentSelect={handleStudentSelect}
        />
      );
    });

  return (
    <ul className={styles.students}>
      {studentItems}
    </ul>
  );
};

Students.propTypes = {
  students: PropTypes.array.isRequired,
  selectStudent: PropTypes.func.isRequired,
  handleStudentSelect: PropTypes.func.isRequired,
  filterTa: PropTypes.string
};

export default Students;
