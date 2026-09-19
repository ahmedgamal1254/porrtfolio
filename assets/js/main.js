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

    // Dynamic Projects Loader from projects.json
    const loadAndRenderProjects = async () => {
        const grid = document.getElementById('projects-grid') || document.querySelector('.projects-grid');
        if (!grid) return;

        const isAr = document.documentElement.lang === 'ar' || window.location.pathname.includes('/ar/');
        const lang = isAr ? 'ar' : 'en';
        const isSubdir = isAr || window.location.pathname.includes('/ar/');
        const jsonPath = isSubdir ? '../projects.json' : 'projects.json';

        const getLocalized = (val) => {
            if (!val) return '';
            if (typeof val === 'object') {
                return val[lang] || val['en'] || Object.values(val)[0] || '';
            }
            return val;
        };

        const resolvePath = (p) => {
            if (!p) return '';
            if (p.startsWith('http://') || p.startsWith('https://') || p.startsWith('//') || p.startsWith('#') || p.startsWith('mailto:') || p.startsWith('tel:')) {
                return p;
            }
            if (isSubdir && !p.startsWith('../') && !p.startsWith('/')) {
                return '../' + p;
            }
            return p;
        };

        let projects = [];

        // 1. Try to fetch from projects.json
        try {
            const res = await fetch(`${jsonPath}?t=${Date.now()}`, { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP error ${res.status}`);
            projects = await res.json();
        } catch (err) {
            // Fallback for file:// protocol or offline usage
            if (window.PORTFOLIO_PROJECTS && Array.isArray(window.PORTFOLIO_PROJECTS)) {
                projects = window.PORTFOLIO_PROJECTS;
            } else {
                console.error('Failed to load projects:', err);
                grid.innerHTML = `<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">${isAr ? 'تعذر تحميل المشاريع حالياً.' : 'Failed to load projects.'}</p>`;
                return;
            }
        }

        if (!Array.isArray(projects) || projects.length === 0) {
            return;
        }

        const detailsBtnTextDefault = isAr ? 'عرض التفاصيل' : 'Case Study';
        const liveBtnTextDefault = isAr ? 'معاينة مباشرة' : 'Live Demo';

        const cardsHtml = projects.map(project => {
            const badge = getLocalized(project.badge);
            const title = getLocalized(project.title);
            const description = getLocalized(project.description);
            const image = resolvePath(getLocalized(project.image));
            const alt = getLocalized(project.alt) || title;
            const liveUrl = resolvePath(getLocalized(project.liveUrl));
            let detailsUrl = resolvePath(getLocalized(project.detailsUrl));
            if (isAr && detailsUrl && !detailsUrl.includes('lang=')) {
                detailsUrl += (detailsUrl.includes('?') ? '&' : '?') + 'lang=ar';
            }
            const liveBtnText = getLocalized(project.liveBtnText) || liveBtnTextDefault;
            const detailsBtnText = getLocalized(project.detailsBtnText) || detailsBtnTextDefault;
            const metric = getLocalized(project.metric);
            const year = project.year || '2025';
            const techStack = Array.isArray(project.techStack) ? project.techStack.slice(0, 3) : ['Laravel', 'MySQL'];

            // Extract clean hostname for browser mockup bar
            let cleanHostname = '';
            if (liveUrl && (liveUrl.startsWith('http') || liveUrl.startsWith('//'))) {
                try {
                    cleanHostname = new URL(liveUrl).hostname;
                } catch (e) {
                    cleanHostname = liveUrl.replace(/^https?:\/\//, '').split('/')[0];
                }
            } else {
                cleanHostname = `${project.id || 'project'}.app`;
            }

            // Tech stack pills HTML
            const techTagsHtml = techStack.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

            return `
                <div class="reveal project-card">    
                    <!-- Image with Fullscreen Slider Trigger -->
                    <div class="project-image-wrapper">
                        <a href="${image}" class="project-image-link" data-fancybox="gallery-${project.id}" data-caption="${title}" aria-label="${title}">
                            <img src="${image}" alt="${alt}" loading="lazy" class="project-img">
                        </a>
                        ${(Array.isArray(project.images) ? project.images.slice(1) : []).map((extraImg, idx) => `
                            <a href="${resolvePath(getLocalized(extraImg))}" data-fancybox="gallery-${project.id}" data-caption="${title} (${idx + 2}/${project.images.length})" style="display: none;"></a>
                        `).join('')}
                    </div>

                    <!-- Card Body -->
                    <div class="project-content">
                        <div class="project-meta-row">
                            ${badge ? `<span class="project-badge">${badge}</span>` : ''}
                        </div>

                        <h3 class="project-title">
                            ${liveUrl ? `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer">${title}</a>` : `<span>${title}</span>`}
                        </h3>

                        <p class="project-description">${description}</p>

                        <!-- Tech Stack Tags -->
                        <div class="project-tech-tags">
                            ${techTagsHtml}
                        </div>

                        <!-- Card Action Footer -->
                        <div class="project-footer">
                            ${liveUrl ? `
                                <a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-live" title="${liveBtnText}">
                                    <span>${liveBtnText}</span>
                                    <i data-lucide="external-link" size="14"></i>
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        grid.innerHTML = cardsHtml;

        // Initialize Fancybox for Fullscreen Image Slider
        if (window.Fancybox) {
            Fancybox.bind('[data-fancybox]', {
                Thumbs: {
                    autoStart: true,
                },
                Toolbar: {
                    display: {
                        left: ["infobar"],
                        middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW"],
                        right: ["slideshow", "thumbs", "close"],
                    },
                },
                Carousel: {
                    transition: "slide",
                },
            });
        }

        // Render Lucide icons for dynamically created HTML
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }

        // Trigger reveal animation for newly created cards
        reveal();
    };

    loadAndRenderProjects();

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