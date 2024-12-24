// Función para mover el scroll de las imágenes automáticamente
let scrollContainer = document.querySelector('.image-scroll');
let scrollAmount = 0;
const scrollStep = 1330; // Cuánto se mueve el scroll cada vez (en píxeles)
const intervalTime = 5000; // Tiempo entre desplazamientos (en milisegundos)

function autoScroll() {
    if (scrollAmount >= (scrollContainer.scrollWidth - window.innerWidth)) {
        // Si hemos llegado al final, volvemos al inicio
        scrollAmount = 0;
    } else {
        scrollAmount += scrollStep;
    }

    scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
}

// Inicia el desplazamiento automático
setInterval(autoScroll, intervalTime);


function sendToWhatsApp(event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Construir el mensaje de WhatsApp
    const message = `Hola, quiero unirme al grupo juvenil.\n\n` +
                    `*Nombre completo:* ${name}\n` +
                    `*Fecha de nacimiento:* ${dob}\n` +
                    `*Celular:* ${phone}\n` +
                    `*Dirección:* ${address}`;

    // Número de WhatsApp al que se enviará el mensaje
    const whatsappNumber = '59167922809'; // Reemplaza con el número de WhatsApp (incluye el código de país, sin el '+')

    // Crear la URL de WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirigir al usuario a WhatsApp
    window.open(whatsappURL, '_blank');
}


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
});