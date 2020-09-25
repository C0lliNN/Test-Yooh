import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

export default function Pokemon({ name, photo }) {
  return (
    <li className={styles.Pokemon}>
      <img src={photo} alt={name} />
      <h5>{name}</h5>
    </li>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
