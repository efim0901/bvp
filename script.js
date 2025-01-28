document.addEventListener('DOMContentLoaded', () => {
    // Гамбургер-меню
    const menuToggle = document.querySelector('.menu-icon');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    menuToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        menuToggle.classList.toggle('open'); // Добавим класс для анимации иконки
    });

    // Слайдер
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentSlideIndex = 0;

    // Функция для отображения текущего слайда
    const showSlide = (index) => {
        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        }

        slides.forEach((slide, i) => {
            slide.style.display = i === currentSlideIndex ? 'block' : 'none';
        });

        // Обновим индикатор слайдов
        updateSliderIndicators(currentSlideIndex);
    };

    // Переключение слайдов
    nextButton?.addEventListener('click', () => {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    });

    prevButton?.addEventListener('click', () => {
        currentSlideIndex--;
        showSlide(currentSlideIndex);
    });

    // Добавим индикаторы для слайдера
    const sliderIndicators = document.createElement('div');
    sliderIndicators.className = 'slider-indicators';
    slides.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.className = 'indicator';
        indicator.dataset.index = index;
        sliderIndicators.appendChild(indicator);

        // Переключение на конкретный слайд при клике по индикатору
        indicator.addEventListener('click', () => {
            currentSlideIndex = index;
            showSlide(currentSlideIndex);
        });
    });
    slider?.appendChild(sliderIndicators);

    const updateSliderIndicators = (currentIndex) => {
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    };

    // Инициализация слайдера
    showSlide(currentSlideIndex);

    // Отправка формы
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        console.log('Данные формы:', data);
        contactForm.reset();
        alert('Форма отправлена!');
    });

    // Прокрутка к секциям
    const scrollLinks = document.querySelectorAll('.navbar-menu a');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Поиск
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton?.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Поиск: ${query}`);
        } else {
            alert('Введите запрос для поиска!');
        }
    });

    // Добавим эффект затемнения хедера при прокрутке
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Анимация появления элементов с использованием IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Убираем наблюдение после появления
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach((el) => {
        observer.observe(el);
    });
});
