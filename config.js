// Manual Scrollspy logic
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link-custom');

    // Scrollspy
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Project Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        projectModal.addEventListener('show.bs.modal', event => {
            const card = event.relatedTarget;
            
            // Get data from attributes
            const title = card.getAttribute('data-title');
            const image = card.getAttribute('data-image');
            const description = card.getAttribute('data-desc');
            
            // Populate Modal
            projectModal.querySelector('#modalTitle').textContent = title;
            projectModal.querySelector('#modalImg').src = image;
            projectModal.querySelector('#modalDesc').textContent = description;
        });
    }
});

// Parallax Glow Effect
document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    const glow1 = document.getElementById('hero-glow-1');
    const glow2 = document.getElementById('hero-glow-2');
    
    // Parallax logic: 
    // Higher decimals = faster movement. 
    // Negative values move the opposite direction.
    if (glow1) {
        glow1.style.marginTop = (scrollY * 0.2) + 'px';
    }
    
    if (glow2) {
        // This moves the bottom-right glow slightly upwards as you scroll down
        glow2.style.marginBottom = (scrollY * 0.15) + 'px';
        glow2.style.marginRight = (scrollY * 0.05) + 'px';
    }
});

// Set current year in footer
document.getElementById("year").innerHTML = new Date().getFullYear();


// Back to Top Logic
const backToTopBtn = document.getElementById("btn-back-to-top");

window.addEventListener("scroll", () => {
    // Show button when scrolled down 400px
    if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// Smooth scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});