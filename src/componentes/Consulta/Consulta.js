import React from "react";
import ConsultaForm from "./ConsultaForm";
import whatsapp from "../../assets/Whatsapp.webp";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Consulta() {
  return (
    <div>
      <div id="HOME">
        <div className="div-img">
          <Header />
          <img src="./odontFondo3.jpeg" alt="imgS" className="imgS" />
          <img
            src="./odontFondoMobile.jpeg"
            alt="imgS"
            className="imgResponsive"
          />
        </div>
        <a
          href="https://wa.me/XXXXXXXXXX"
          className="whatsapp"
          target="e_blank"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <ConsultaForm />
      </div>
      <Footer />
    </div>
  );
}

export default Consulta;
