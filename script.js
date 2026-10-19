const slides = document.querySelectorAll('.slide');
        const counter = document.querySelector('.slide-counter strong');
        const progress = document.querySelector('.progress-track span');
        const previousButton = document.querySelector('.previous');
        const nextButton = document.querySelector('.next');
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        let currentSlide = 0;
        let timer;

        function showSlide(index) {
            currentSlide = (index + slides.length) % slides.length;
            slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === currentSlide));
            counter.textContent = String(currentSlide + 1).padStart(2, '0');
            progress.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
        }

        function restartTimer() {
            clearInterval(timer);
            timer = setInterval(() => showSlide(currentSlide + 1), 6000);
        }

        previousButton.addEventListener('click', () => { showSlide(currentSlide - 1); restartTimer(); });
        nextButton.addEventListener('click', () => { showSlide(currentSlide + 1); restartTimer(); });
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
        navLinks.addEventListener('click', () => {
            navLinks.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
        restartTimer();