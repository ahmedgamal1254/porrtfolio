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

    // Mobile menu logic
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Scroll Spy for Mobile Bottom Navigation
    const spySections = document.querySelectorAll('section[id]');
    const mobileNavItems = document.querySelectorAll('.mobile-bottom-nav .mobile-nav-item');
    
    if (mobileNavItems.length > 0 && spySections.length > 0) {
        const scrollSpy = () => {
            let currentSectionId = '';
            // We want to detect the section occupying the top 1/3 of the viewport
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            spySections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            // Special case: if scrolled to the absolute bottom of the page, activate the last section (Contact)
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 20) {
                currentSectionId = 'contact';
            }

            mobileNavItems.forEach(item => {
                const href = item.getAttribute('href');
                if (href === `#${currentSectionId}`) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', scrollSpy);
        scrollSpy(); // Run once on load
    }
});