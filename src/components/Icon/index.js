import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';
import facebookIcon from '../../assets/images/facebook.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import youtubeIcon from '../../assets/images/youtube.svg';

function Icon({ type }) {
  let icon = null;
  let link = null;

  switch (type) {
    case 'instagram': {
      icon = instagramIcon;
      link = 'https://www.instagram.com/?hl=pt-br';
      break;
    }
    case 'facebook': {
      icon = facebookIcon;
      link = 'https://www.facebook.com/';
      break;
    }
    case 'youtube': {
      icon = youtubeIcon;
      link = 'https://www.youtube.com/';
      break;
    }
    default:
      icon = instagramIcon;
      link = 'https://www.instagram.com/?hl=pt-br';
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.Icon}
    >
      <img src={icon} alt={`${type} icon`} />
    </a>
  );
}

Icon.propTypes = {
  type: PropTypes.oneOf(['instagram', 'facebook', 'youtube']).isRequired,
};

export default React.memo(Icon);
