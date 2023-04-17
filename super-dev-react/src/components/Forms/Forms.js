import React, {useEffect, useState} from 'react';
import styles from './Forms.module.css';
import { useForm } from 'react-hook-form';
import { ApiJson } from '../../store/events/action';
import {useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Forms = () => {
  const {register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvents] = useState({});

  const onAdding = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('id,data', data.id)
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('date', data.date);
    formData.append('description', data.description);

    console.log(formData);
    ApiJson.patch(`/events/${id}`, data).then((respuesta) => {
      console.log('la respuesta que recibo', respuesta);
    });
    navigate('/events/');

  };

  useEffect(() =>  {
    const getEventsId = async () => {
      const respuesta = await axios.get(`http://localhost:3000/events/${id}`);
      setEvents(respuesta.data.event);
    }
    console.log(setEvents);
    getEventsId();
  },[]);

  return (
   
  <div className={styles.Forms}>
      <p>Si ves algo que no esta bien, puedes modificarlo, sabemos que no somos perfectas y una ayuda siempre viene bien. Gracias por tu aportación.
      </p>
    <div className='editEvent'>
    <h1> Edita el evento </h1>
    <form onSubmit={handleSubmit(onAdding)}>
      <div className='fichaForm1'>
        <label htmlFor='name'> Nombre Evento:</label>
        <input
            className='input'
            type='text'
            id='name'
            {...register('name', { required: true })}/>
            <label htmlFor='date'> Fecha: </label>
          <input
            type='text'
            id='date'
            {...register('date', { required: true })}/>
            </div>
            
      <div className='fichaform2'>
        <label htmlFor='description'> Descripción: </label>
          <textarea
            id='description'
            name='description'
            rows='4'
            cols='50'
            {...register('description', { required: true })}>
          </textarea>
      </div>

      <div className='fichaForm3'>
        <label htmlFor='image'> Elegir Archivos:</label>
          <input
            type='text'
            id='image'
            multiple
            {...register('image', { required: false })}/>
      </div>

        <button type='submit'> Editar Evento</button>

    </form>
  </div>

  </div>
 
  )
};



export default Forms;
