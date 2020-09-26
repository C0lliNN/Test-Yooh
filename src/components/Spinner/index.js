import React from 'react';
import styles from './styles.module.css';

function Spinner() {
  return <div className={styles.Spinner}>Loading...</div>;
}

export default React.memo(Spinner);
