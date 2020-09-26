import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import api from '../../services/api';
import Pokemon from './Pokemon';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';

export default function LastPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchPokemonsData() {
    setIsLoading(true);
    try {
      const firstResponse = await api.get('/pokemon?limit=20?offset=20');

      /* Picking the last 6 items. Some of the first 14 are the same
       * as the PokemonsCarousel Component. So, I did in this way to no repeat pokemons
       * in the page */

      /* It is necessary to make other requests because the request above
       * does not return the pokemon photo */

      const requests = firstResponse.data.results
        .filter((_, index) => index > 13)
        .map((result) => api.get(`/pokemon/${result.name}`)); // return an array of axios request

      const responses = await Promise.all(requests);
      const pokemonsList = responses.map((r) => ({
        name: r.data.name,
        photo: r.data.sprites.other['official-artwork'].front_default,
      }));

      setPokemons(pokemonsList);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemonsData();
  }, []);

  let content = null;

  if (isLoading) {
    content = <Spinner />;
  } else if (pokemons && pokemons.length) {
    content = (
      <ul>
        {pokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.name}
            photo={pokemon.photo}
            name={pokemon.name}
          />
        ))}
      </ul>
    );
  } else if (error) {
    content = <ErrorMessage message={error.message} />;
  }

  return (
    <section className={styles.LastPokemons}>
      <h3>Últimos Pokemons</h3>
      {content}
    </section>
  );
}
