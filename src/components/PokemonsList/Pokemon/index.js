import PropTypes from 'prop-types';
import React from 'react';
import { capitalize } from '../../../utility';
import styles from './styles.module.css';

export default function Pokemon({ name, photo }) {
  return (
    <article className={styles.Pokemon}>
      <h4>{capitalize(name)}</h4>
      <div>
        <img src={photo} alt={name} />
      </div>
    </article>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
