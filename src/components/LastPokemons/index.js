import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Pokemon from './Pokemon';
import styles from './styles.module.css';

export default function LastPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchPokemonsData() {
    setIsLoading(true);
    try {
      const firstResponse = await api.get('/pokemon?limit=6');
      // prettier-ignore
      const requests = firstResponse.data.results.map((result) => api.get(`/pokemon/${result.name}`));

      const results = await Promise.all(requests);
      const pokemonsList = results.map((r) => ({
        name: r.data.name,
        photo: r.data.sprites.other['official-artwork'].front_default,
      }));

      setPokemons(pokemonsList);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemonsData();
  }, []);

  let content = null;

  if (isLoading) {
    content = <div>loading...</div>;
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
    content = <div>Error</div>;
  }

  return (
    <section className={styles.LastPokemons}>
      <h3>Últimos Pokemons</h3>
      {content}
    </section>
  );
}
