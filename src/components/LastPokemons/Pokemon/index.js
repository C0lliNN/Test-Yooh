import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

export default function Pokemon({ name, photo }) {
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <li className={styles.Pokemon}>
      <img src={photo} alt={nameCapitalized} />
      <h5>{nameCapitalized}</h5>
    </li>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
