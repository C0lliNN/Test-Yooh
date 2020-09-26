import React, { useState, useEffect } from 'react';
import InfoDiv from '../InfoDiv';
import PokemonsCarousel from '../PokemonsCarousel';
import PokemonsList from '../PokemonsList';
import styles from './styles.module.css';
import api from '../../services/api';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';

const data = ['pikachu', 'ivysaur', 'bulbasaur', 'charizard'];

export default function SecondSection() {
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

  useEffect(() => {
    fetchPokemons();
  }, []);

  let content = null;

  if (isLoading) {
    content = <Spinner />;
  } else if (pokemons && pokemons.length) {
    content = (
      <>
        {/* PokemonsCarousel will be visible if width < 1366.
         Otherwise, PokemonsList will be visible */}

        <PokemonsCarousel pokemons={pokemons} />
        <PokemonsList pokemons={pokemons} />
      </>
    );
  } else if (error) {
    content = <ErrorMessage message={error.message} />;
  }

  return (
    <section className={styles.SecondSection}>
      {content}
      <InfoDiv />
    </section>
  );
}
