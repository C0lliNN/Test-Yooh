import React from 'react';
import PokemonsCarousel from '../PokemonsCarousel';
import styles from './styles.module.css';

export default function SecondSection() {
  return (
    <section className={styles.SecondSection}>
      <PokemonsCarousel />
      <div>Info SEction</div>
    </section>
  );
}
