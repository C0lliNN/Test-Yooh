import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

export default function ErrorMessage({ message }) {
  return (
    <div className={styles.ErrorMessage}>
      <p>
        Algo deu errado: <span>{message}</span>
      </p>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
