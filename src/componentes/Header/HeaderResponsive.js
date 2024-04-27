import "./HeaderResponsive.scss";
import OffcanvasExample from "./OffCanvas";

const HeaderResponsive = () => {
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
  return (
    <div className="headerRes">
        <OffcanvasExample />
    </div>
  );
};

export default HeaderResponsive;
