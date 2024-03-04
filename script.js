function mostrarInformacion(nombre, descripcion) {
    // Actualiza el contenido en la sección de información del perfume
    document.getElementById('nombrePerfume').innerText = `Nombre: ${nombre}`;
    document.getElementById('descripcionPerfume').innerText = `Descripción: ${descripcion}`;

    // Desplaza la página hacia la sección de información del perfume
    window.location.href = '#informacion';
}
