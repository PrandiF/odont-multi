import React from "react";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

function FooterResponsive() {
  return (
    <div className="footer-responsive">
      {/* <img src="./favicon.ico" alt="img2" className="logo-footer"></img> */}
      <div className="footIzq">
        <div className="nav-footer">
          <div className="redesContainer">
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
          </div>
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
    </div>
  );
}

export default FooterResponsive;
