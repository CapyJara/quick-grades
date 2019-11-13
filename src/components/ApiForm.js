import React from 'react';
import PropTypes from 'prop-types';

const ApiForm = ({ handleChange, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input name="apiKey" type="text" placeholder='Enter your api key' onChange={handleChange} />
      <button>Enter key</button>
    </form>
  );
};

ApiForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ApiForm;
