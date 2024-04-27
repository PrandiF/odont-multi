import "./Footer.scss";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import FooterResponsive from "./FooterResponsive";

const Footer = () => {
  return (
    <div className="footer-back">
      <div className="designed">
        <div className="footer-desktop">
          <div className="footIzq">
            <div className="nav-footer">
              <a href="">
                <h6>
                  <FaFacebook />
                </h6>
              </a>
              <a href="">
                <h6>
                  <FaInstagram />
                </h6>
              </a>
              <a href="">
                <div className="gmail">
                  <h6>
                    <ion-icon name="mail-outline"></ion-icon>
                  </h6>
                  <h6>odontologia@gmail.com</h6>
                </div>
              </a>
              <a href="">
                <div className="phone-container">
                  <div className="svgPhone">
                    <h6>
                      <FaPhone />
                    </h6>
                  </div>
                  <h6> +54 2923 000000</h6>
                </div>
              </a>
            </div>
          </div>
          {/* <img src="./favicon.ico" alt="img2" className="logo-footer"></img> */}
          <div className="footDer">
            <div className="nav-footer">
              {/* <a data-scroll="SOBREMI" href="#SOBREMI">
                <h6>SACAR TURNO</h6>
              </a> */}
              <a data-scroll="SACARTURNO" href="#SACARTURNO">
                <h6>CONSULTA</h6>
              </a>
              <a data-scroll="SACARTURNO" href="#SACARTURNO">
                <h6>SERVICIOS</h6>
              </a>
              <a data-scroll="CLIENTES" href="#CLIENTES">
                <h6>CLIENTES</h6>
              </a>
              <a data-scroll="UBICACION" href="#UBICACION">
                <h6>UBICACION</h6>
              </a>
            </div>
          </div>
        </div>
        <p className="designedBy">
          designed by <span>SeptemDev Studio</span>
        </p>
      </div>
      <FooterResponsive />
    </div>
  );
};

export default Footer;
