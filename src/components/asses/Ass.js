import React from 'react';
import PropTypes from 'prop-types';
import styles from './ass.css';

function Ass({ ass }) {
  return (
    <li className={styles.ass}>
      <a href={ass.gradeUrl} target="_blank" rel="noopener noreferrer" >{ass.assignmentName}</a>
    </li>
  );
}

Ass.propTypes = {
  ass: PropTypes.object
};

export default Ass;
