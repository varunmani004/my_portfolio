// Initialize AOS animation
AOS.init({
    duration: 1000,
    once: true,
});

// Project Filter
const filterButtons = document.querySelectorAll('.project-filters button');
const projectItems = document.querySelectorAll('[data-category]');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        const filter = button.dataset.filter;
        projectItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Particles.js Configuration
particlesJS("particles-js", {
    particles: {
        number: {
            value: 50,
        },
        color: {
            value: "#64ffda",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
        },
        size: {
            value: 5,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "right",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
    },
    retina_detect: true,
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from(".hero h1", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power4.out",
});

gsap.from(".hero p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: "power4.out",
});

// Section Animations
gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title, {
        scrollTrigger: title,
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power4.out",
    });
});

// Skill Box Animation
gsap.utils.toArray(".skill-box").forEach((box, i) => {
    gsap.from(box, {
        scrollTrigger: box,
        duration: 0.8,
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
    });
});