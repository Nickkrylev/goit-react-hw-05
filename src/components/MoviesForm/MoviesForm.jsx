import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviesForm.module.css';

export const MoviesForm = ({ onFormSubmit }) => {
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={onFormSubmit}>
        <input className={styles.input} type="text" name="searchInput" />
        <button className={styles.button} type="submit">Search</button>
      </form>
    </div>
  );
};

MoviesForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
