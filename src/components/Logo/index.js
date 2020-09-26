import React from 'react';
import styles from './styles.module.css';
import logo from '../../assets/images/logo.svg';

function Logo() {
  return (
    <h1 className={styles.Logo}>
      <img src={logo} alt="Teste WEB" />
    </h1>
  );
}

export default React.memo(Logo);
