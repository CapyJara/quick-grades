import React from 'react';
import PropTypes from 'prop-types';
import Ass from './Ass';
import styles from './asses.css';

function Asses({ asses }) {
  return  (
    <div className={styles.assBoard}>
      <h2>Submitted but not yet graded</h2>
      <ul>
        {asses.map((ass, i) => {
          return (<Ass key={i} ass={ass} />);
        })}
      </ul>
    </div>
  );
}

Asses.propTypes = {
  asses: PropTypes.oneOfType([PropTypes.bool, PropTypes.array])
};

export default Asses;
