// Configurar la fecha del festival
const festivalDate = new Date('2025-09-15T20:00:00'); // Fecha ficticia, ajustar según la fecha real

// Función para actualizar el contador
function updateCountdown() {
    const now = new Date().getTime();
    const distance = festivalDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Actualizar el contador cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Ejecutar la función inicialmente
updateCountdown();

// Ejemplo de bandas (estos datos deberían actualizarse según el lineup real)
const posterPath = 'cartel diseño instagram  final.png';

// Solo se muestra una tarjeta con el cartel oficial
const bands = [
    {
        name: 'Cartel oficial',
        image: posterPath,
        alt: 'Cartel del festival',
        description: 'Edición 2025'
    }
];

// Función para crear las tarjetas de las bandas
function createBandCards() {
    const lineupContainer = document.querySelector('.lineup-container');
    if (!lineupContainer) return;

    // Limpiar contenedor para evitar duplicados
    lineupContainer.innerHTML = '';

    bands.forEach(band => {
        const bandCard = document.createElement('div');
        bandCard.className = 'band-card';
        bandCard.innerHTML = `
            <img src="${band.image}" alt="${band.alt}">
            <h3>${band.name}</h3>
            <p>${band.description}</p>
        `;
        lineupContainer.appendChild(bandCard);
    });
}

// Establecer el año actual en el footer
function setFooterYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Ejecutar funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    createBandCards();
    setFooterYear();

    const scrollBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
