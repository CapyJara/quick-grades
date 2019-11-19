import React from 'react';
import PropTypes from 'prop-types';
import styles from './student.css';

const Student = ({ id, name, pending, missing, handleStudentSelect }) => {
  return (
    <li className={styles.student} >
      <button onClick={(event) => handleStudentSelect(id, event)}>
        <h2>{name}</h2>
        <span className={styles.missing}>{missing}</span>
        <span className={styles.pending} >{pending}</span>
      </button>
    </li>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  pending: PropTypes.number.isRequired,
  missing: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  handleStudentSelect: PropTypes.func.isRequired
};

export default Student;
