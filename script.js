// Открытие/закрытие мобильного меню
const menuIcon = document.querySelector('.menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Плавный скроллинг к секциям
const links = document.querySelectorAll('.navbar-menu a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth',
            });

            // Закрытие меню после клика (для мобильных)
            if (navbarMenu.classList.contains('active')) {
                menuIcon.classList.remove('active');
                navbarMenu.classList.remove('active');
            }
        }
    });
});

// Аккордеон для секции FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('h3');

    question.addEventListener('click', () => {
        const answer = item.querySelector('p');

        // Закрыть другие открытые вопросы
        faqItems.forEach(faq => {
            if (faq !== item) {
                const otherAnswer = faq.querySelector('p');
                otherAnswer.style.display = 'none';
            }
        });

        // Показать/скрыть ответ
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

// Отправка формы контактов
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const formEntries = Object.fromEntries(formData.entries());

    console.log('Отправленные данные:', formEntries);

    // Сброс формы после отправки
    contactForm.reset();

    // Уведомление пользователя об успешной отправке
    alert('Ваше сообщение успешно отправлено!');
});
