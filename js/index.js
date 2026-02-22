// Basic reveal for heading and paragraph
ScrollReveal().reveal('.reveal', {
    distance: '40px',
    duration: 1200,
    easing: 'ease-out',
    origin: 'bottom'
});

// Image 1
ScrollReveal().reveal('img:nth-of-type(1)', {
    distance: '60px',
    duration: 1500,
    origin: 'left',
    delay: 200
});

// Image 2
ScrollReveal().reveal('img:nth-of-type(2)', {
    distance: '60px',
    duration: 1500,
    origin: 'right',
    delay: 300
});

// Image 3
ScrollReveal().reveal('img:nth-of-type(3)', {
    distance: '80px',
    duration: 1600,
    origin: 'bottom',
    delay: 400
});

// Image 4
ScrollReveal().reveal('img:nth-of-type(4)', {
    distance: '80px',
    duration: 1600,
    origin: 'top',
    delay: 500
});

// Image 5
ScrollReveal().reveal('img:nth-of-type(5)', {
    distance: '100px',
    duration: 1800,
    origin: 'left',
    delay: 600,
    rotate: { x: 0, y: 20, z: 0 }
});

