import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';
import styles from './students.css';

const Students = ({ students, selectStudent }) => {
  const studentItems = students
    .sort((a, b) => (b.pendingSubmissions.length - a.pendingSubmissions.length))
    .map((student, i) => {
      return (
        <Student 
          key={i} 
          id={student.id}
          name={student.name} 
          pending={student.pendingSubmissions.length} 
          missing={student.missingSubmissions.length}
          selectStudent={selectStudent} 
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
};

export default Students;
