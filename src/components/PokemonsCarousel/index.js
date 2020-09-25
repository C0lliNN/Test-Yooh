import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';
import Pokemon from './Pokemon';
import styles from './styles.module.css';
import Arrow from '../../components/Arrow';
import useActiveIndex from '../../hooks/use-active-index';

const data = ['pikachu', 'ivysaur', 'bulbasaur', 'charizard'];

export default function PokemonsCarousel() {
  const {
    active,
    setActive,
    incrementActiveIndex,
    decrementActiveIndex,
  } = useActiveIndex(data);

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchPokemons() {
    setIsLoading(true);
    try {
      const requests = data.map((pokemon) => api.get(`/pokemon/${pokemon}`));
      const responses = await Promise.all(requests);

      const fetchedPokemons = responses.map((res) => ({
        name: res.data.name,
        photo: res.data.sprites.other['official-artwork'].front_default,
      }));

      setPokemons(fetchedPokemons);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  let content = null;

  if (isLoading) {
    content = <Spinner />;
  } else if (pokemons && pokemons.length) {
    content = pokemons.map((pokemon, index) => {
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
    });
  } else if (error) {
    content = <ErrorMessage message={error.message} />;
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  let nameCapitalized = null;

  if (pokemons && pokemons.length) {
    nameCapitalized =
      pokemons[active].name.charAt(0).toUpperCase() +
      pokemons[active].name.slice(1);
  }

  return (
    <div className={styles.PokemonsCarousel}>
      {pokemons && pokemons.length && <h5>{nameCapitalized}</h5>}
      <div className={styles.Carousel}>
        <div className={styles.Pokemons}>{content}</div>
        <div className={styles.LeftArrow}>
          <Arrow direction="left" onClick={decrementActiveIndex} />
        </div>
        <div className={styles.RightArrow}>
          <Arrow direction="right" onClick={incrementActiveIndex} />
        </div>
      </div>
      <div className={styles.Circles}>
        {data.map((_, index) => {
          const classes = [styles.Circle];

          if (index === active) {
            classes.push(styles.ActiveCircle);
          }
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={classes.join(' ')}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
