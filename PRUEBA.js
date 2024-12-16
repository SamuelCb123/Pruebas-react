alert("¡Hola, mundo! Este es un mensaje de alerta.");

"use strict"; 
import React from "http://esm.sh/react@18.2.0";//importar react y reactdom
import ReactDOM from "http://esm.sh/react-dom@18.2.0/client"; 

const appDOMelement = document.getElementById('app');
const root = ReactDOM.createRoot(appDOMelement);//creamos un un root para renderizar algo en este caso un mensaje
const button = React.createElement('button',null,'Me gusta')//para crear un elemento los tres parametros serian el elemento,propiedades y lo que hay dentro del elemento
root.render(button);
