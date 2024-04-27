import "./ModalCl.scss";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { InlineWidget } from "react-calendly";

const ModalCalendly = ({url}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  url = url.toString();

  return (
    <div className="modal-calendly">
      <button onClick={handleShow} className="verMas">
        SELECCIONAR
      </button>
      <Modal
        style={{ background: "transparent" }}
        show={show}
        onHide={handleClose}
        onClick={handleClose}
        className="modalFlex"
        size="xl"
      >
        <Modal.Body className="calendlyCard">
          <InlineWidget
            styles={{ width: "100vw", height: "100vh" }}
            url={url}
          />
        </Modal.Body>
        <button onClick={handleClose} className="buttonBack">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M20 11H7.41l3.29-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0 0 1.42l5 5a1 1 0 0 0 1.42-1.42L7.41 13H20a1 1 0 0 0 0-2z" />
          </svg>
          VOLVER
        </button>
        <button onClick={handleClose} className="buttonInicio">
          <span>
            INICIO
          </span>
        </button>
      </Modal>
    </div>
  );
};

export default ModalCalendly;
