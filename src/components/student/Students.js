import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';
import styles from './students.css';

const Students = ({ students }) => {
  const studentItems = students.sort((a, b) => (b.pendingSubmissions.length - a.pendingSubmissions.length)).map((student, i) => {
    return (
      <Student key={i} name={student.name} pending={student.pendingSubmissions.length} missing={student.missingSubmissions.length} />
    );
  });

  return (
    <ul className={styles.students}>
      {studentItems}
    </ul>
  );
};

Students.propTypes = {
  students: PropTypes.array.isRequired
};

export default Students;
