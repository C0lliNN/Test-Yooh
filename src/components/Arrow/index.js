import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';
import arrowLeft from '../../assets/images/arrow-left.svg';
import arrowRight from '../../assets/images/arrow-right.svg';

function Arrow({ direction, onClick }) {
  let icon = null;

  switch (direction) {
    case 'left': {
      icon = arrowLeft;
      break;
    }
    default:
      icon = arrowRight;
  }

  return (
    <button type="button" onClick={onClick} className={styles.Arrow}>
      <img src={icon} alt={`${direction} arrow`} />
    </button>
  );
}

Arrow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(Arrow);
