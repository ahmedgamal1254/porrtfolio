document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Run once on load

    // Header scroll effect
    const header = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Contact Form to WhatsApp logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const project = document.getElementById('project-type').value;
            const goals = document.getElementById('goals').value;

            const whatsappMessage = `Hello Ahmed, I'm ${name} (${email}). %0A%0A*Project Type:* ${project} %0A*My Goals:* ${goals}`;
            const whatsappUrl = `https://wa.me/201091536978?text=${whatsappMessage}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }

    // Mobile menu (placeholder if needed)
    // For now, keeping it simple as per the "minimal" design
});