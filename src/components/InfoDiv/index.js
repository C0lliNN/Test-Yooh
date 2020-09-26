import React from 'react';
import styles from './styles.module.css';
import CallToAction from '../CallToAction';
import pikachu from '../../assets/images/pikachu.png';
import pokebola from '../../assets/images/pokerbola.png';

function InfoDiv() {
  return (
    <div className={styles.InfoDiv}>
      <h3>Teste Frontend</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a lacus,
        aliquam mattis est enim, molestie diam. Consequat blandit nec, venenatis
        dignissim suspendisse in facilisi molestie duis. Tempor sed quis
        phasellus arcu, posuere. Elementum ut tellus nisi, nunc ac etiam ut
        lectus porta. Et morbi enim vestibulum sodales sed ullamcorper dapibus
        accumsan. Faucibus pharetra, et at orci, vel blandit odio. Volutpat urna
        fusce quisque libero pellentesque in. Augue tempor vitae ullamcorper
        bibendum.
      </p>
      <p>
        Quis facilisi nulla id est natoque sed ut consectetur. Id eleifend eros
        ullamcorper et. Diam, ultrices pellentesque urna, integer a lectus. Sit
        sollicitudin ac egestas amet netus. Elit vitae dolor cursus cursus.
      </p>
      <div className={styles.ButtonContainer}>
        <CallToAction />
      </div>
      <div className={styles.ImagesContainer}>
        <img src={pokebola} alt="Pokebola" className={styles.Pokebola} />
        <img src={pikachu} alt="Pikachu" />
      </div>
    </div>
  );
}

export default React.memo(InfoDiv);
