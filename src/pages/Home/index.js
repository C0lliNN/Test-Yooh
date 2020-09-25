import React from 'react';
import LastPokemons from '../../components/LastPokemons';
import MainCarousel from '../../components/MainCarousel';
import Navbar from '../../components/Navbar';
import SecondSection from '../../components/SecondSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <MainCarousel />
      <LastPokemons />
      <SecondSection />
    </main>
  );
}
