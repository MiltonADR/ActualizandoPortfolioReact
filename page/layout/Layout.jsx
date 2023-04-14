import * as React from 'react';
import { AcercaDe } from '../acercaDe/AcercaDe';
import { Educacion } from '../educacion/Educacion';
import { Experiencia } from '../experiencia/Experiencia';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <AcercaDe
        nombre="Milton Duarte Reyes"
        titulo="Front End Developer Trainee"
      />
      <Experiencia />
      <Educacion />
      <Footer />
    </>
  );
};
