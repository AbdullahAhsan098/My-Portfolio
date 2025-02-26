// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.8rem 0';
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.padding = '1.2rem 0';
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Skill bars animation
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('progress-bar')) {
                entry.target.style.width = entry.target.getAttribute('data-width');
            } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        bar.setAttribute('data-width', width);
        observer.observe(bar);
    });

    // Animate service cards
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });

    // Animate experience items
    document.querySelectorAll('.exp-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        item.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
});

// Typed.js effect for hero section
const typed = new Typed('.hero-subtitle', {
    strings: ['Welcome to my portfolio', 'Frontend Developer', 'UI/UX Designer', 'WordPress Expert'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Parallax effect for hero section
document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    hero.style.backgroundPosition = `${mouseX * 50}px ${mouseY * 50}px`;
});