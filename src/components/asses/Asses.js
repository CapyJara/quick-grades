import React from 'react';
import PropTypes from 'prop-types';
import Ass from './Ass';

function Asses({ asses }) {
  return  (
    <ul>
      {asses.map((ass, i) => {
        return (<Ass key={i} ass={ass} />);
      })}
    </ul>
  );
}

Asses.propTypes = {
  asses: PropTypes.array.isRequired
};

export default Asses;
