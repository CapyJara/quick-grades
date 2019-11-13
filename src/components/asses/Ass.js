import React from 'react';
import PropTypes from 'prop-types';

function Ass({ ass }) {
  return (
    <li>
      <a href={ass.url} target="_blank" rel="noopener noreferrer" >{ass.name}</a>
    </li>
  );
}

Ass.propTypes = {
  ass: PropTypes.obj
};

export default Ass;
