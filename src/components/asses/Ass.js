import React from 'react';
import PropTypes from 'prop-types';
import styles from './ass.css';
import { Link } from 'react-router-dom';
import GitHubSubmission from './GitHubSubmission';

function Ass({ ass }) {
  return (
    <div className={styles.ass}>
      {ass.gradeUrl ?
        <a href={ass.gradeUrl} target="_blank" rel="noopener noreferrer" >{ass.assignmentName}</a> :
        <Link to="/ass" target="_blank" rel="noopener noreferrer" >{ass.assignmentName}</Link>}
      {ass.pr && <GitHubSubmission {...ass.pr} url={ass.url} />}
    </div>
  );
}

Ass.propTypes = {
  ass: PropTypes.object
};

export default Ass;
