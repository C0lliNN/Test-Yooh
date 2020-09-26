import PropTypes from 'prop-types';
import React from 'react';
import Pokemon from './Pokemon';
import styles from './styles.module.css';

export default function PokemonsList({ pokemons }) {
  return (
    <div className={styles.PokemonsList}>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.name} name={pokemon.name} photo={pokemon.photo} />
      ))}
    </div>
  );
}

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
