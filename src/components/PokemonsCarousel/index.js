import PropTypes from 'prop-types';
import React from 'react';
import Pokemon from './Pokemon';
import styles from './styles.module.css';
import Arrow from '../Arrow';
import useActiveIndex from '../../hooks/use-active-index';
import { capitalize } from '../../utility';

export default function PokemonsCarousel({ pokemons }) {
  const {
    active,
    setActive,
    incrementActiveIndex,
    decrementActiveIndex,
  } = useActiveIndex(pokemons);

  let nameCapitalized = null;

  if (pokemons && pokemons.length) {
    nameCapitalized = capitalize(pokemons[active].name);
  }

  return (
    <div className={styles.PokemonsCarousel}>
      <h5>{nameCapitalized}</h5>
      <div className={styles.Carousel}>
        <div className={styles.Pokemons}>
          {pokemons.map((pokemon, index) => {
            let className = null;

            if (index < active) {
              className = styles.HideLeft;
            }

            if (index > active) {
              className = styles.HideRight;
            }

            return (
              <Pokemon
                key={pokemon.name}
                name={pokemon.name}
                photo={pokemon.photo}
                className={className}
              />
            );
          })}
        </div>
        <div className={styles.LeftArrow}>
          <Arrow direction="left" onClick={decrementActiveIndex} />
        </div>
        <div className={styles.RightArrow}>
          <Arrow direction="right" onClick={incrementActiveIndex} />
        </div>
      </div>
      <div className={styles.Circles}>
        {pokemons.map((pokemon, index) => {
          const classes = [styles.Circle];

          if (index === active) {
            classes.push(styles.ActiveCircle);
          }
          return (
            <button
              type="button"
              key={pokemon.name}
              onClick={() => setActive(index)}
              className={classes.join(' ')}
            />
          );
        })}
      </div>
    </div>
  );
}

PokemonsCarousel.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
