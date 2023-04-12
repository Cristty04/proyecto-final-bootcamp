import React from 'react';
import Chatbot from 'react-simple-chatbot';
import {Container} from "react-bootstrap"



const ChatbotComponent = () => {
    const steps=[
        {
            id:"greet",
            message:" ¡Bienvenido a Superdev la revista que te va a mantener actualizado!",
            trigger:'Ask Name'
        },
        {
            id:"Ask Name",
            message:"Dime, ¿Cómo te llamas?",
            trigger:"waiting1"
        },
        {
            id:"waiting1",
            user:true,
            trigger:"Name"
        },
        {
            id:"Name",
            message:"Hola {previousValue}, Porfavor indica que quieres hacer",
            trigger:"issues"
        },
        {
            id:"issues",
            options:[
                { value:"artículos", label:"Quiero ver artículos", trigger:"articulos" },
                { value:"eventos", label:"Quiero ver eventos", trigger:"eventos" },
                { value:"música", label:"Me apetece escuchar música", trigger:"musica" },
                { value:"horoscopo", label:"Quiero ver mi horoscopo", trigger:"horoscopo" },
                { value:"loging", label:"Quiero hacer log in", trigger:"login" },
                { value:"contactar", label:"Quiero comentaros algo", trigger:"contactar" },
        ],
        },
        {
            id: 'articulos',
            message:" ...recopilando notícias...",
            end: true
        },
        {
            id: 'eventos',
            message:"...abriendo la agenda...",
            end: true
        },
        {
            id: 'musica',
            message:"...buscando en Spoti...",
            end: true
        },
        {
            id: 'horoscopo',
            message:"...consultando los astros...",
            end: true
        },
        {
            id: 'login',
            message:"...preparando la dark zone...¡No tengas miedo!",
            end: true
        },
        {
            id: 'contactar',
            message:"...sentados, con papel, boli y la tila... ¡Cúentame!",
            end: true
        },
    ]
  return (
   <>
    <Container floated= "right">
        <Chatbot steps={steps}/>
    </Container>
   </>
  )
}

export default ChatbotComponent
