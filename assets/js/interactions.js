// Modern Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.slide-up');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Initialize Typed.js
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: [
                'Cybersecurity Specialist',
                'Bug Bounty Hunter',
                'Web Developer',
                'Security Researcher'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Smooth hover effects for cards
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
        });
    });

    // Typed.js for hero section
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'Cybersecurity Enthusiast',
                'Bug Bounty Hunter',
                'Web Developer',
                'Security Researcher'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }

    // Form validation and submission
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            
            try {
                await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form)
                });
                submitBtn.innerHTML = 'Sent! <i class="fas fa-check"></i>';
                submitBtn.style.backgroundColor = '#28a745';
                form.reset();
            } catch (error) {
                submitBtn.innerHTML = 'Try Again <i class="fas fa-exclamation-circle"></i>';
                submitBtn.style.backgroundColor = '#dc3545';
            }

            setTimeout(() => {
                submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                submitBtn.style.backgroundColor = '';
            }, 3000);
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu
    const menuBtn = document.querySelector('#menu');
    const nav = document.querySelector('.modern-nav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('show');
            menuBtn.classList.toggle('fa-times');
        });
    }

    // Handle preloader
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.modern-preloader');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Handle floating action button
    const fabButton = document.getElementById('fabButton');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            fabButton.classList.add('show');
        } else {
            fabButton.classList.remove('show');
        }
    });

    fabButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animate progress bars
    const animateProgress = () => {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(progress => {
            const value = progress.getAttribute('data-value');
            progress.style.width = value + '%';
        });
    };

    // Initialize progress bars when they come into view
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgress();
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skills-category').forEach(category => {
        progressObserver.observe(category);
    });
});
