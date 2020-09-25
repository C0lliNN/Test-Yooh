import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

export default function CallToAction({ onClick }) {
  return (
    <button type="button" className={styles.CallToAction} onClick={onClick}>
      Call to Action
    </button>
  );
}

CallToAction.propTypes = {
  onClick: PropTypes.func,
};

CallToAction.defaultProps = {
  onClick: () => {},
};
