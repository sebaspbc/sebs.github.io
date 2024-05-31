document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye-pupil');
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX); // Corrección aquí
        const moveX = Math.cos(angle) * 15; // Corrección aquí
        const moveY = Math.sin(angle) * 15; // Corrección aquí
        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

function presionarSi() {
    console.log("¡Has presionado Sí!");
    window.open("index2.html", "_blank");
};

document.addEventListener('DOMContentLoaded', function () {
    const botonNo = document.querySelector('.boton-no');

    botonNo.addEventListener('mouseover', presionarNo);

    function presionarNo(event) {
    const botonNo = event.target;
    const botonSi = document.querySelector('.boton-si');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const botonRect = botonNo.getBoundingClientRect();

    const minX = -botonRect.width * 15; // Ajustamos el mínimo para permitir un mayor desplazamiento hacia la izquierda
    const minY = 0;
    const maxX = containerRect.width - botonRect.width;
    const maxY = containerRect.height - botonRect.height;

    const nuevoX = Math.max(minX, Math.min(maxX, Math.random() * (maxX - minX) + minX)); // Ajustamos el cálculo para permitir un rango más amplio de valores negativos
    const nuevoY = Math.max(minY, Math.min(maxY, Math.random() * maxY));

    botonNo.style.left = nuevoX + 'px';
    botonNo.style.top = nuevoY + 'px';
}

});

document.addEventListener('DOMContentLoaded', function () {
    const botonNo = document.querySelector('.boton-no');

    ocultarBotonNoDespuesDe20Segundos();

    function ocultarBotonNoDespuesDe20Segundos() {
        setTimeout(() => {
            botonNo.style.display = 'none';
        }, 10000); 
    }
});


