import React from 'react';
import styles from './styles.module.css';
import Logo from '../Logo';
import Icon from '../Icon';
import logoYooh from '../../assets/images/logo-yooh.svg';
import emailIcon from '../../assets/images/email.svg';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <div className={styles.FirstRow}>
          <div className={styles.SocialMedia}>
            <div className={styles.Email}>
              <img src={emailIcon} alt="Email" />
              <p>email@testeweb.com</p>
            </div>
            <div className={styles.Icons}>
              <Icon type="facebook" />
              <Icon type="instagram" />
              <Icon type="youtube" />
            </div>
          </div>
          <div className={styles.Logo}>
            <Logo />
          </div>
        </div>
        <div className={styles.SecondRow}>
          <p>2020 © Todos os direitos reservados.</p>
          <div className={styles.Author}>
            <p>Desenvolvido por</p>
            <img src={logoYooh} alt="Yooh" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
