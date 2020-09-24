import React from 'react';
import styles from './styles.module.css';
import menuIcon from '../../assets/images/menu.svg';
import Logo from '../Logo';
import Icon from '../Icon';

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.LeftContainer}>
        <img src={menuIcon} alt="" className={styles.MenuIcon} />
        <Logo />
      </div>
      <div className={styles.RightContainer}>
        <Icon type="facebook" />
        <Icon type="instagram" />
        <Icon type="youtube" />
      </div>
    </nav>
  );
}
