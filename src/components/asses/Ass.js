import React from 'react';
import PropTypes from 'prop-types';
import styles from './ass.css';
import { Link } from 'react-router-dom';

function Ass({ ass }) {
  return (
    <li className={styles.ass}>
      {ass.gradeUrl ? 
        <a href={ass.gradeUrl} target="_blank" rel="noopener noreferrer" >{ass.assignmentName}</a> : 
        <Link to="/ass"   >{ass.assignmentName}</Link>}
    </li>
  );
}

Ass.propTypes = {
  ass: PropTypes.object
};

export default Ass;
