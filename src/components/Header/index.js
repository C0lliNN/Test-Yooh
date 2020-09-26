import React from 'react';
import styles from './styles.module.css';
import menuIcon from '../../assets/images/menu.svg';
import Logo from '../Logo';
import Icon from '../Icon';
import CallToAction from '../CallToAction';

function Header() {
  return (
    <header>
      <nav className={styles.Navbar}>
        <div>
          <div className={styles.LeftContainer}>
            <button type="button" className={styles.MenuIcon}>
              <img src={menuIcon} alt="" />
            </button>
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
    </header>
  );
}

export default React.memo(Header);
