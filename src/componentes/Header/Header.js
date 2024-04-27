import { useState } from "react";
import "./Header.scss";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import HeaderResponsive from "./HeaderResponsive";

const Header = () => {
  const { innerWidth } = window;
  const sections = document.querySelectorAll("section"),
    navLinks = document.querySelectorAll("nav a");
  const resetLinks = () =>
    navLinks.forEach((link) => link.classList.remove("active"));
  const handleScroll = () => {
    const { pageYoffset } = window;
    sections.forEach((section) => {
      const { id, offsetTop, clientHeight } = section;
      const offset = offsetTop - 1;

      if (pageYoffset >= offset && pageYoffset < offset + clientHeight) {
        resetLinks();
        navLinks.forEach((link) => {
          if (link.dataset.scroll === id) {
            link.classList.add("active");
          }
        });
      }
    });
  };
  document.addEventListener("scroll", handleScroll);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (innerWidth >= 990) {
      const previous = scrollY.getPrevious();
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-120%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="header"
      >
        <div className="nav">
          <div className="leftN">
            <a data-scroll="SOBREMI" href="/#SOBREMI" className="active">
              <h6>SACAR TURNO</h6>
            </a>
            <a data-scroll="SACARTURNO" href="/consulta">
              <h6>CONSULTA</h6>
            </a>
          </div>
          <a data-scroll="CLIENTES" href="/">
            <h6>INICIO</h6>
          </a>
          <div className="rightN">
            {" "}
            <a data-scroll="SERVICIOS" href="/#SERVICIOS">
              <h6>SERVICIOS</h6>
            </a>
            <a data-scroll="UBICACION" href="/#UBICACION">
              <h6>UBICACION</h6>
            </a>
          </div>
        </div>
      </motion.div>
      <div className="responsiveHeader">
        <HeaderResponsive />
      </div>
    </>
  );
};

export default Header;
