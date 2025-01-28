<?php
// Файл contact.php для обработки формы "Связаться с нами"

// Проверяем, была ли отправлена форма
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы и фильтруем их
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    // Проверка обязательных полей
    if (empty($name) || empty($email) || empty($message)) {
        $error_message = "Пожалуйста, заполните все поля.";
    } else {
        // Подготовка письма
        $to = "efimovich.w@gmail.com";  // Замените на свой email
        $subject = "Сообщение с сайта Белвторпереработка";
        $body = "Имя: $name\nEmail: $email\n\nСообщение:\n$message";
        $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

        // Отправка письма
        if (mail($to, $subject, $body, $headers)) {
            $success_message = "Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.";
        } else {
            $error_message = "Произошла ошибка при отправке сообщения. Попробуйте позже.";
        }
    }
}
?>
