"use strict";
const buttons = document.querySelectorAll('button'); // Recuperamos todos los botones con querySelectorAll

// Iteramos sobre cada botón y añadimos el evento
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Recuperamos la id del atributo
        const id = button.getAttribute('data-id'); // Corregido getAtribute -> getAttribute
        if (button.classList.contains('liked')) {
            button.classList.remove('liked');
            button.innerText = 'Me gusta';
        } else {
            button.classList.add('liked');
            button.innerText = 'Quitar';
        }
    });
});
