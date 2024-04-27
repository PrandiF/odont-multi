import React from 'react'
import "../../App.scss";
import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';
import SobreMi from '../SobreMi/SobreMi';
import SacarTurno from '../SacarTurno/SacarTurno';
import Ubicacion from '../Ubicacion/Ubicacion';
import Header from '../Header/Header';
import Servicios from '../servicios/Servicios';

function Inicio() {
  return (
    <div className="App">
    <Header />
    <HomePage />
    <SobreMi />
    {/* <SacarTurno /> */}
    <Servicios />
    {/* <Clientes /> */}
    <div>
      <Ubicacion />
      <Footer />
    </div>
  </div>
  )
}

export default Inicio