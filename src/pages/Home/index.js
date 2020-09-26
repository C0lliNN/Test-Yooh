import React from 'react';
import Footer from '../../components/Footer';
import LastPokemons from '../../components/LastPokemons';
import MainCarousel from '../../components/MainCarousel';
import Header from '../../components/Header';
import SecondSection from '../../components/SecondSection';

export default function Home() {
  return (
    <main>
      <Header />
      <MainCarousel />
      <LastPokemons />
      <SecondSection />
      <Footer />
    </main>
  );
}
