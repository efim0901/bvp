<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получение данных из формы с очисткой
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Проверка, что все поля заполнены
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Проверка корректности email
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $to = 'efimovich.w@gmail.com'; // Замените на ваш email
            $subject = 'Новое сообщение с сайта БелВторПереработка';
            $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";
            $headers = "From: $email";
            
            // Отправка email и проверка успешности
            if (mail($to, $subject, $body, $headers)) {
                header('Content-Type: application/json');
                echo json_encode(['success' => true]);
            } else {
                header('Content-Type: application/json');
                echo json_encode(['success' => false, 'message' => 'Ошибка при отправке письма.']);
            }
        } else {
            header('Content-Type: application/json');
            echo json_encode(['success' => false, 'message' => 'Некорректный email.']);
        }
    } else {
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Заполните все поля.']);
    }
} else {
    http_response_code(405);
    echo 'Метод не поддерживается';
}
?>