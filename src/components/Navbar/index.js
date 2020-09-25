import React from 'react';
import styles from './styles.module.css';
import menuIcon from '../../assets/images/menu.svg';
import Logo from '../Logo';
import Icon from '../Icon';
import CallToAction from '../CallToAction';

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div>
        <div className={styles.LeftContainer}>
          <img src={menuIcon} alt="" className={styles.MenuIcon} />
          <Logo />
        </div>
        <div className={styles.RightContainer}>
          <div className={styles.ButtonContainer}>
            <CallToAction />
          </div>
          <Icon type="facebook" />
          <Icon type="instagram" />
          <Icon type="youtube" />
        </div>
      </div>
    </nav>
  );
}
