import React from 'react';
import PropTypes from 'prop-types';
import styles from './student.css';

const Student = ({ id, name, pending, missing, selectStudent }) => {
  return (
    <li className={styles.student}>
      <h2>{name}</h2>
      <button className={styles.missing}>{missing}</button>
      <button className={styles.pending} onClick={() => selectStudent(id)}>{pending}</button>
    </li>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  pending: PropTypes.number.isRequired,
  missing: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  selectStudent: PropTypes.func.isRequired,
};

export default Student;
