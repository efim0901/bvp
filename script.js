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

// Инициализация AOS
AOS.init({
    duration: 1200,
});

// Обработка отправки формы
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Остановим стандартную отправку формы

    // Собираем данные из формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Проверим, что все поля заполнены
    if (name && email && message) {
        // Здесь можно добавить код для отправки данных на сервер (например, через AJAX или с использованием PHP)
        document.getElementById('form-message').innerHTML = `<p style="color: green;">Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.</p>`;
        
        // Очистим форму
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-message').innerHTML = `<p style="color: red;">Пожалуйста, заполните все поля.</p>`;
    }
});
