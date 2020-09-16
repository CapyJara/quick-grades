import React from 'react';
import PropTypes from 'prop-types';
import {
  FaCheck,
  FaTimes,
  FaQuestion,
  FaRegFile,
  FaMinusCircle,
  FaPlusCircle,
  FaSchlix,
  FaExternalLinkAlt
} from 'react-icons/fa';
import styles from './GitHubSubmission.css';

const MergeableState = ({ mergeableState }) => (
  <>
    {
      mergeableState === 'clean'
        ? <FaCheck className={styles.check} />
        : mergeableState === 'unstable' ? <FaTimes className={styles.times} /> : <FaQuestion />
    }
  </>
);

const GitHubSubmission = ({ url, commits, additions, deletions, files, mergeableState }) => (
  <section className={styles.GitHubSubmission}>
    <a target="_blank" rel="noopener noreferrer" href={url}>GitHub <FaExternalLinkAlt /></a>
    <MergeableState mergeableState={mergeableState} />
    <span><FaSchlix />{commits}</span>
    <span><FaPlusCircle />{additions}</span>
    <span><FaMinusCircle />{deletions}</span>
    <span><FaRegFile />{files}</span>
  </section>
);

GitHubSubmission.propTypes = {
  url: PropTypes.string.isRequired,
  commits: PropTypes.number.isRequired,
  additions: PropTypes.number.isRequired,
  deletions: PropTypes.number.isRequired,
  files: PropTypes.number.isRequired,
  mergeableState: PropTypes.string.isRequired
};

export default GitHubSubmission;
