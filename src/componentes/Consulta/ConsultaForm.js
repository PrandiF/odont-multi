import React, { useState } from "react";
import "./consulta.scss";
import "../HomePage/HomePage.scss";
// import emailjs from "@emailjs/browser";
// import Alert from "react-bootstrap/Alert";
import { IoMdArrowRoundBack } from "react-icons/io";

function ConsultaForm() {
  const [formData, setFormData] = useState({
    user_fullName: "",
    user_phone: "",
    user_email: "",
    message: "",
    service: "",
  });
  // const [mailSent, setMailSent] = useState(false);

  const handleBackButton = () => {
    window.history.back();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_r3afnih", "template_bdjok4l", form.current, {
  //       publicKey: "9kRGZGhqg18Wok6_4",
  //     })
  //     .then(
  //       () => {
  //         console.log("Mensaje enviado!");
  //         setTimeout(() => {
  //           setMailSent(true);
  //           setFormData({
  //             user_fullName: "",
  //             user_phone: "",
  //             user_email: "",
  //             message: "",
  //           });
  //         }, 2000);
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //         setMailSent(false);
  //         setFormData({
  //           user_fullName: "",
  //           user_phone: "",
  //           user_email: "",
  //           message: "",
  //         });
  //       }
  //     );
  // };
  return (
    <div className="container">
      <button className="backButton" onClick={handleBackButton}>
        <IoMdArrowRoundBack /> Volver
      </button>

      {/* <form className="form-container" onSubmit="" ref={form}> */}
      <form className="form-container" onSubmit="">
        <input
          type="text"
          placeholder="Nombre Completo"
          onChange={handleChange}
          name="user_fullName"
          value={formData.user_name}
        />
        <input
          type="text"
          placeholder="Servicio"
          onChange={handleChange}
          name="user_service"
          value={formData.service}
        />
        <input
          type="text"
          placeholder="Telefono"
          onChange={handleChange}
          name="user_phone"
          value={formData.user_phone}
        />

        <input
          type="email"
          placeholder="Mail"
          onChange={handleChange}
          name="user_email"
          value={formData.user_email}
        />
        <textarea
          placeholder="Dejame tu consulta..."
          onChange={handleChange}
          name="message"
          value={formData.message}
        />
        {/* <button type="submit" className="sendButton"> */}
        <button className="sendButton">Consultar con un especialista</button>
        {/* {mailSent ? (
          <Alert variant="success">Mensaje enviado con éxito</Alert>
        ) : (
          ""
        )} */}
      </form>
    </div>
  );
}

export default ConsultaForm;
