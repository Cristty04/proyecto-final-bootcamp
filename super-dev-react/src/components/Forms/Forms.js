import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import styles from "./Forms.module.css";
import EventsComponent from "../EventsComponent/EventsComponent";
import { Link } from "react-router-dom";
import { ApiJson } from "../../store/events/action";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Forms = () => {
  // Aqui vamos a Editar y Eliminar Eventos
  const { events } = useContext(EventsComponent);
  const { ApiJson } = useContext(ApiJson);
  const [filter, setFilter] = useState("");
  const [filteredEvents, setfilteredEvents] = useState([]);
  useEffect(() => {
    setfilteredEvents([...events]);
  }, [events]);

  const deleteEvent = (id, name) => {
    console.log({ id });
    Swal.fire({
      title: "¿Estas seguro?",
      text: `Vamos a borrar el evento ${name} y esta acción no es reversible`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        ApiJson.delete(`/events/${id}`).then((respuesta) => {});
        Swal.fire(
          `¡${name} ha sido borrado!`,
          "El evento ya ha pasó a la historia.",
          "ok",
          window.location.reload(false)
        );
      }
    });
  };

  return (
    <div className={styles.Forms}>
      Forms "Eliminar Eventos" Component
      <p
        className="linkEvento"
        onClick={(ev) => deleteEvent(`${event._id}`, `${event.name}`)}
      >
        Borrar
      </p>
    </div>
  );
};

Forms.propTypes = {};

Forms.defaultProps = {};

export default Forms;
