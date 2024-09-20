document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los datos del formulario
    const formData = new FormData(this);

    // Hacer la solicitud POST
    fetch('http://localhost/repositorio/formulario', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en el registro');
        }
        return response.text(); // O .json() si esperas un JSON
    })
    .then(data => {
        // Suponiendo que el servidor devuelve un mensaje de éxito
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show(); // Mostrar el modal
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al registrar. Inténtalo de nuevo.');
    });
});
