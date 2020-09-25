import React from 'react';
import Arrow from '../Arrow';
import styles from './styles.module.css';
import heroImage from '../../assets/images/hero-banner__image.png';
import CallToAction from '../CallToAction';
import useActiveIndex from '../../hooks/use-active-index';

// This constant is defined outside of the React component
// to prevent the unnecessary work of declaring it in each render cycle
const data = [
  {
    title: 'De frontend',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, euismod at egestas sapien porttitor dui. ',
    backgroundColor: '#F3BE00',
  },
  {
    title: 'Outro Banner',
    text:
      'Ait amet, consectetur adipiscing elit. Amet, euismod at egestas sapien porttitor dui. ',
    backgroundColor: '#00A8D2',
  },
];

export default function MainCarousel() {
  // prettier-ignore
  const { active, incrementActiveIndex, decrementActiveIndex } = useActiveIndex(data);

  return (
    <section className={styles.MainCarousel}>
      {data.map((item, index) => {
        const classes = [styles.Article];

        if (active < index) {
          classes.push(styles.HideRight);
        }
        if (active > index) {
          classes.push(styles.HideLeft);
        }

        return (
          <article
            key={item.title}
            className={classes.join(' ')}
            style={{ backgroundColor: item.backgroundColor }}
          >
            <div className={styles.InfoContainer}>
              <h3>Faça seu Teste</h3>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <CallToAction />
            </div>

            <img src={heroImage} alt="Charizard" className={styles.HeroImage} />
          </article>
        );
      })}
      <div className={styles.LeftArrow}>
        <Arrow direction="left" onClick={decrementActiveIndex} />
      </div>
      <div className={styles.RightArrow}>
        <Arrow direction="right" onClick={incrementActiveIndex} />
      </div>
    </section>
  );
}
