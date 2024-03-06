document.addEventListener("DOMContentLoaded", function() {
    // Obtén el botón por su ID
    var mostrarInformacionBtn = document.getElementById("mostrarInformacionBtn");

    // Agrega un evento de clic al botón
    mostrarInformacionBtn.addEventListener("click", function() {
        // Llama a la función para mostrar información y desplazar la página
        mostrarInformacion();
    });

    // Función para mostrar información y desplazar la página
    function mostrarInformacion() {
        // Obtén los elementos de información del perfume por sus IDs
        var nombrePerfume = document.getElementById('nombrePerfume');
        var descripcionPerfume = document.getElementById('descripcionPerfume');
        var generoPerfume = document.getElementById('generoPerfume');

        // Actualiza el contenido en la sección de información del perfume
        nombrePerfume.innerText = 'Nombre: Zarafet';
        descripcionPerfume.innerText = 'Descripción: perfume con una esencia que experimenta lo dulce y lo ácido. Hecho a base de mandarina y limón.';
        generoPerfume.innerText = 'Género: unisex.';

        // Desplaza la página hacia la sección de información del perfume
        window.location.href = '#informacion';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Obtén el formulario por su ID
    var formularioContacto = document.getElementById("formularioContacto");

    // Agrega un evento de envío al formulario
    formularioContacto.addEventListener("submit", function(event) {
        // Evita que el formulario se envíe de forma predeterminada
        event.preventDefault();

        // Valida el formulario antes de enviar
        if (validarFormulario()) {
            // En este punto, podrías enviar los datos del formulario a un servidor o realizar otras acciones necesarias
            alert("Formulario enviado correctamente");
        }
    });

    // Función para validar el formulario
    function validarFormulario() {
        // Obtén los valores de los campos del formulario
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;

        // Realiza la lógica de validación aquí
        if (!nombre || !email || !mensaje) {
            alert("Por favor, completa todos los campos del formulario.");
            return false;
        }

        // Puedes agregar más lógica de validación según tus necesidades

        return true; // El formulario es válido
    }
});
