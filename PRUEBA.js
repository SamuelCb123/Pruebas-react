

"use strict"; 
import React from "http://esm.sh/react@18.2.0";//importar react y reactdom
import ReactDOM from "http://esm.sh/react-dom@18.2.0/client"; 

const appDOMelement = document.getElementById('app');
const root = ReactDOM.createRoot(appDOMelement);//creamos un un root para renderizar algo en este caso un mensaje
const button = React.createElement('button',{"data-id":123},'Button1')//para crear un elemento los tres parametros serian el elemento,propiedades y lo que hay dentro del elemento
//ahora mismo al button estar recibiendo una propiedad que es la dataid, tambien podria ser una classname
const button2 = React.createElement('button',{"data-id":456},'Button2')
const button3= React.createElement('button',{"data-id":789},'Button3')   
//para renderizar mas de un elemento a la vez creamos un cuarto que sera un div este tendra dentro un array
const div= React.createElement(React.Fragment,null,[button,button2,button3])
root.render(div);//renderizamos el div.Pero si no queremos renderizar un div podemos optar por esta opcion