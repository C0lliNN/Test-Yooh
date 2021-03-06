import PropTypes from 'prop-types';
import React from 'react';
import { capitalize } from '../../../utility';
import styles from './styles.module.css';

export default function Pokemon({ name, photo }) {
  const nameCapitalized = capitalize(name);
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
