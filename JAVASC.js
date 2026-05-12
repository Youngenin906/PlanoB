let currentIndex = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.card-item');
    const container = document.querySelector('.carousel-container');
    
    if (!track || cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const gap = 20; 
    const step = cardWidth + gap;

    // Atualiza o índice
    currentIndex += direction;

    /**
     * Lógica para retornar ao início no 4º card:
     * No JS, os índices começam em 0. 
     * 1º card = 0, 2º = 1, 3º = 2, 4º = 3.
     * Se o currentIndex chegar a 4, ele volta para 0.
     */
    if (currentIndex >= 2) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = 2; // Volta para o 4º card se for para trás do primeiro
    }

    const offset = -currentIndex * step;
    track.style.transform = `translateX(${offset}px)`;
}

// Efeito de Scroll no Header
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    if(window.scrollY > 50) {
        header.classList.add('rolagem');
    } else {
        header.classList.remove('rolagem');
    }
});