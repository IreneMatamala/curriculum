// FADE-IN AL HACER SCROLL
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// BOTÓN BACK TO TOP DINÁMICO
const backToTop = document.createElement('div');
backToTop.id = 'backToTop';
backToTop.textContent = '↑';
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
