import "./servicios.scss"
import Reveal from "../Reveal";
import ModalCalendly from "../ModalCl/ModalCalendly";
import { servicios } from "./dataServicios";
import React, { useState } from "react";


const Servicios = () => {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = (index) => {
    setIsHovered(index);
  };

  const handleConsultButton = () => {
    window.location.href = '/consulta';
  }

  return (
    <section id="SERVICIOS">
      <img src="./background3.jpeg" alt="imgS" className="imgBackground" />
      <div className="textH2">
        <Reveal>
          <h2>- SERVICIOS -</h2>
        </Reveal>
      </div>
      <div className="cards">
        {servicios.map((servicio, index) => (
          // <div onMouseEnter={() => handleCardSelect(index)} onMouseLeave={() => handleCardSelect(null)} className={`${cardSelect === null ? 'cardVisible' : cardSelect === index ? 'cardVisible' : 'cardHidden'}`} key={index}>
          <div
            className={`${
              isHovered === null
                ? "cardVisible"
                : isHovered === index
                ? "cardVisible"
                : "cardHidden"
            }`}
            key={index}
          >
            <img
              src={servicio.foto}
              alt={servicio.nombre}
              className="imgBackCard"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(null)}
            />
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(null)}
              className={`${
                isHovered === index ? "infoHoverVisible" : "infoHoverHidden"
              }`}
            >
              <div className="serviceDescription"><p>{servicio.descripcion}</p></div>
              <h3 className="hairdresserName">{servicio.nombre}</h3>
              {/* <ModalCalendly url={servicio.url} /> */}
              <button className="select" onClick={handleConsultButton}>Realizar Consulta</button>
            </div>
            {/* <div className="infoMobile">
              <h3 className="hairdresserName">{peluquero.nombre}</h3>
              <ModalCalendly url={peluquero.url} />
            </div> */}
          </div>
        ))}
      </div>

      <div className="cardsMobile">
        {servicios.map((servicioMobile, index)=> (
          <div className="mobileCard" key={index}>
            <img
              src={servicioMobile.fotoHorizontal}
              alt={servicioMobile.nombre}
              className="imgBackCard"
            />
            <div className="infoMobile">
              <h3 className="hairdresserName">{servicioMobile.nombre}</h3>
              {/* <ModalCalendly url={servicioMobile.url} /> */}
              <button className="select" onClick={handleConsultButton}>Consulta</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;