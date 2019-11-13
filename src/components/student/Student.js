import React from 'react';
import PropTypes from 'prop-types';
import styles from './student.css';

const Student = ({ id, name, pending, missing, selectStudent, handleStudentSelect }) => {
  return (
    <li className={styles.student} onClick={handleStudentSelect}>
      <button onClick={() => selectStudent({ id, pending, name })}>
        <h2>{name}</h2>
        <span className={styles.missing}>{missing.length}</span>
        <span className={styles.pending} >{pending.length}</span>
      </button>
    </li>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  pending: PropTypes.array.isRequired,
  missing: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  selectStudent: PropTypes.func.isRequired,
  handleStudentSelect: PropTypes.func.isRequired
};

export default Student;
