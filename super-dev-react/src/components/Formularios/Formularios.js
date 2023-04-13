import React from 'react';
import PropTypes from 'prop-types';
import styles from './Formularios.module.css';

const Formularios = ({userData, handleChangeData}) => (
  <div className={styles.Formularios}>
    <p>En este espacio puedes registrarte e inciar debates.
    Cómo por ejemplo; ¿Eres team React o team Angular?</p>
    <form>
    <fieldset>
      <legend>Nombre</legend>
      <input name='name' defaultValue={userData.name} onChange={handleChangeData} placeholder='Ingresa tu nombre'></input>
    </fieldset>
    
    <fieldset>
      <legend>Email</legend>
      <input name='email' defaultValue={userData.email} onChange={handleChangeData} placeholder='Ingresa tu email'></input>
    </fieldset>
    <fieldset>
      <legend>Foto</legend>
      <input name='photo' defaultValue={userData.photo} onChange={handleChangeData} placeholder='Ingresa un link con tu foto'></input>
    </fieldset>
    <fieldset>
      <legend>Comentario:</legend>
      <input name='comment' defaultValue={userData.comment} onChange={handleChangeData} placeholder='Cuentanos tus inquietudes'></input>
    </fieldset>
  </form>
  </div>
);

Formularios.propTypes = {};

Formularios.defaultProps = {};

export default Formularios;
