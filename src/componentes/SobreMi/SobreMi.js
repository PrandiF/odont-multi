import "./SobreMi.scss";
import React from "react";
import Reveal from "../Reveal";

const SobreMi = () => {
  return (
    <section id="SOBREMI">
      <div className="fix">
        <div className="cardSM">
          <h2>- NOSOTROS -</h2>
          <div>
            <Reveal>
              <p>
                En nombre de todo nuestro equipo, es un placer darles la más
                cordial bienvenida. En nuestra clínica, nos comprometemos a
                proporcionarles una atención odontológica de la más alta calidad
                en un ambiente cálido y acogedor.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Con una amplia experiencia y un enfoque centrado en el bienestar
                y la comodidad de nuestros pacientes, estamos aquí para
                ayudarles a alcanzar y mantener una salud bucal óptima. Desde
                limpiezas y tratamientos preventivos hasta procedimientos más
                avanzados, nuestro equipo altamente capacitado está aquí para
                brindarles el mejor cuidado posible.
              </p>
            </Reveal>
            <div className="pDisplay">
              <Reveal>
                <p>
                  Valoramos la confianza que depositan en nosotros al elegir
                  nuestra clínica para sus necesidades dentales, y nos
                  comprometemos a superar sus expectativas en cada visita.
                  ¡Estamos emocionados de acompañarles en su viaje hacia una
                  sonrisa saludable y radiante!
                </p>
              </Reveal>
              <p>
                No duden en comunicarse con nosotros si tienen alguna pregunta o
                inquietud. ¡Bienvenidos a nuestra familia dental!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
