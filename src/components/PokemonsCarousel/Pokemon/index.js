import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

export default function Pokemon({ name, photo, className }) {
  const classes = [className, styles.Pokemon];
  return (
    <article className={classes.join(' ')}>
      <img src={photo} alt={name} />
    </article>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Pokemon.defaultProps = {
  className: '',
};
