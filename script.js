        // =============== Conteúdo do script.js ===============
        document.addEventListener('DOMContentLoaded', () => {
            // --- Header Scroll Effect ---
            const header = document.getElementById('main-header');
            if (header) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                });
            }

            // --- Mobile Menu Toggle ---
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', () => {
                    const isOpen = mobileMenuButton.classList.toggle('open');
                    mobileMenu.classList.toggle('open', isOpen); // Use second argument to ensure state
                });
            }

            // --- Slideshow Functionality ---
            const slides = document.querySelectorAll('.hero-slide');
            let currentSlide = 0;
            const slideIntervalTime = 5000; // Time in milliseconds (5 seconds)
            let slideInterval;

            function nextSlide() {
                if (slides.length === 0) return;
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }

            function startSlideShow() {
                if (slides.length > 1) {
                   slideInterval = setInterval(nextSlide, slideIntervalTime);
                } else if (slides.length === 1) {
                    slides[0].classList.add('active');
                }
            }
            startSlideShow();

            // --- Fade-in Animation on Scroll ---
            const fadeInSections = document.querySelectorAll('.fade-in-section');
            if (fadeInSections.length > 0) {
                const observerOptions = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.15 // Trigger when 15% of the element is visible
                };

                const intersectionObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);

                fadeInSections.forEach(section => {
                    intersectionObserver.observe(section);
                });
            }

            // --- Smooth Scroll for Anchor Links & Close Mobile Menu ---
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }

                    // Close mobile menu if open and the button exists
                    if (mobileMenuButton && mobileMenu && mobileMenuButton.classList.contains('open')) {
                        mobileMenuButton.classList.remove('open');
                        mobileMenu.classList.remove('open');
                    }
                });
            });

            // --- Contact Form Submission (Placeholder) ---
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    // Basic form data gathering
                    const formData = new FormData(this);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const message = formData.get('message');

                    // Substitua pela sua lógica de submissão de formulário (ex: chamada AJAX)
                    console.log('Formulário submetido (placeholder):');
                    console.log('Nome:', name);
                    console.log('Email:', email);
                    console.log('Mensagem:', message);

                    // Exemplo: Mostrar uma mensagem de sucesso (você criaria um elemento UI apropriado para isto)
                    // alert('Mensagem enviada com sucesso! (Placeholder)');
                    // Por agora, apenas regista e limpa o formulário
                    this.reset(); // Limpa o formulário após a submissão
                });
            }

            // --- Placeholder for User's Custom Animation (if any) ---
            // function suaAnimacaoCustomizada() {
            //     console.log("Aqui entraria a sua animação customizada.");
            // }
            // window.addEventListener('load', suaAnimacaoCustomizada);
        });