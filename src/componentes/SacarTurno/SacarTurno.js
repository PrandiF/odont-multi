import "./SacarTurno.scss";
import Reveal from "../Reveal";
import ModalCalendly from "../ModalCl/ModalCalendly";
import { odontologos } from "./dataOdontologos";
import { useState } from "react";

const SacarTurno = () => {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = (index) => {
    setIsHovered(index);
  };

  return (
    <section id="SACARTURNO">
      <img src="./BackgroundRustic.jpg" alt="imgS" className="imgBackground" />
      <div className="textH2">
        <Reveal>
          <h2>- SACAR TURNO -</h2>
        </Reveal>
      </div>
      <div className="cards">
        {odontologos.map((odontologo, index) => (
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
              src={odontologo.foto}
              alt={odontologo.nombre}
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
              <h3 className="hairdresserName">{odontologo.nombre}</h3>
              <ModalCalendly url={odontologo.url} />
            </div>
            {/* <div className="infoMobile">
              <h3 className="hairdresserName">{peluquero.nombre}</h3>
              <ModalCalendly url={peluquero.url} />
            </div> */}
          </div>
        ))}
      </div>

      <div className="cardsMobile">
        {odontologos.map((odontologoMobile, index)=> (
          <div className="mobileCard" key={index}>
            <img
              src={odontologoMobile.fotoHorizontal}
              alt={odontologoMobile.nombre}
              className="imgBackCard"
            />
            <div className="infoMobile">
              <h3 className="hairdresserName">{odontologoMobile.nombre}</h3>
              <ModalCalendly url={odontologoMobile.url} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SacarTurno;
