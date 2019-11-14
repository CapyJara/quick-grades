import React from 'react';
import PropTypes from 'prop-types';
import styles from './apiForm.css';

const ApiForm = ({ tas, handleChange, handleFormSubmit, getFreshData }) => {
  return (
    <section className={styles.apiForm}>
      <div>
        <form onSubmit={handleFormSubmit} >
          <input name="apiKey" type="text" placeholder='Enter your api key' onChange={handleChange} />
          <button>Enter key</button>
        </form>
        <div className={styles.filter}>
          {tas && 
          <>
            <p>Filter By TA</p>
            <select name='filterTa' onChange={handleChange}>
              <option></option>
              {tas.map(i => <option key={i}>{i}</option>)}
            </select>
          </>}
        </div>
      </div>
      <button onClick={getFreshData}>Get Fresh Data</button>
    </section>
  );
};

ApiForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  getFreshData: PropTypes.func.isRequired,
  tas: PropTypes.oneOfType([PropTypes.bool, PropTypes.array])
};

export default ApiForm;
