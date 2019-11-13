import React from 'react';
import PropTypes from 'prop-types';
import styles from './apiForm.css';

const ApiForm = ({ handleChange, handleFormSubmit, getFreshData }) => {
  return (
    <section className={styles.apiForm}>
      <form onSubmit={handleFormSubmit} >
        <input name="apiKey" type="text" placeholder='Enter your api key' onChange={handleChange} />
        <button>Enter key</button>
      </form>
      <button onClick={getFreshData}>Get Fresh Data</button>
    </section>
  );
};

ApiForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  getFreshData: PropTypes.func.isRequired
};

export default ApiForm;
