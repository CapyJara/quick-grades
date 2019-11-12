import React from 'react';
import PropTypes from 'prop-types';
import styles from './student.css';

const Student = ({ name, pending, missing }) => {
  return (
    <li className={styles.student}>
      <h2>{name}</h2>
      <button className={styles.missing}>{missing}</button>
      <button className={styles.pending}>{pending}</button>
    </li>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  pending: PropTypes.number.isRequired,
  missing: PropTypes.number.isRequired
};

export default Student;
