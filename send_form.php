<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Проверьте, что все поля заполнены
    if (!empty($name) && !empty($email) && !empty($message)) {
        $to = 'efimovich.w@gmail.com'; // Замените на ваш email
        $subject = 'Новое сообщение с сайта БелВторПереработка';
        $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";
        $headers = "From: $email";
        
        if (mail($to, $subject, $body, $headers)) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false]);
        }
    } else {
        echo json_encode(['success' => false]);
    }
} else {
    http_response_code(405);
    echo 'Метод не поддерживается';
}
