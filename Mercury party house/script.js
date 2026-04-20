document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Add basic logic to show/hide menu if CSS is adapted or just use a simple transition
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = '#0F0F0F';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid #D4AF37';
        }
    });

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // WhatsApp Form Submission
    const form = document.querySelector('.booking-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('sender-phone').value;
        const event = document.getElementById('event').value;
        const date = document.getElementById('date').value;

        const message = `Hello Mercury Party House, I would like to enquire about a booking:%0A%0A` +
            `*Name:* ${name}%0A` +
            `*Phone:* ${phone}%0A` +
            `*Event Type:* ${event}%0A` +
            `*Date:* ${date}%0A%0A` +
            `Please let me know the availability and pricing.`;

        const whatsappNumber = '918971726371';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(whatsappURL, '_blank');
        form.reset();
    });

    // Scroll Fade-in Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .service-card, .gallery-item, .about-text, .about-image').forEach(el => {
        el.classList.add('fade-on-scroll');
        observer.observe(el);
    });
});
