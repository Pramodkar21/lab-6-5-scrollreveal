document.addEventListener("DOMContentLoaded", function () {

    window.sr = ScrollReveal({ reset: false });

    // Image 1 — slide from left
    sr.reveal('.reveal1', {
        duration: 800,
        distance: '60px',
        origin: 'left'
    });

    // Image 2 — slide from right
    sr.reveal('.reveal2', {
        duration: 800,
        distance: '60px',
        origin: 'right'
    });

    // Image 3 — rise from bottom
    sr.reveal('.reveal3', {
        duration: 800,
        distance: '60px',
        origin: 'bottom'
    });

    // Image 4 — rotate
    sr.reveal('.reveal4', {
        duration: 1000,
        rotate: { x: 0, y: 0, z: 45 }
    });

    // Image 5 — scale
    sr.reveal('.reveal5', {
        duration: 800,
        scale: 0.85
    });

});
