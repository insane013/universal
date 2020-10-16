<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$sType = 0;

$sendTypes = array(
    'subscribe' => 'subscribe',
    'npm' => 'footer-form-send', //name phone message
    'npem' => 'booking-modal-send', //name phone email message
);

if (isset($_POST[$sendTypes["subscribe"]])) {
    $sType = 1;
}
if (isset($_POST[$sendTypes["npm"]])) {
    $sType = 2;
}
if (isset($_POST[$sendTypes["npem"]])) {
    $sType = 3;
}

if ($sType==1) {
    $body = "
    <h2>Новая подписка</h2>
    <b>Почта:</b> $email
    ";
} 
if ($sType==2) {
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message<br><br>$sType
    ";
}
if ($sType==3) {
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    <b>Почта:</b> $email<br><br>
    <b>Сообщение:</b><br>$message
    ";
}

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'mail.insane013.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'best-tour-plan@insane013.ru'; // Логин на почте
    $mail->Password   = 'marsel092002'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('best-tour-plan@insane013.ru', 'Tour-plan'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('marsel092002@gmail.com');  
    $mail->addAddress('accaunt.dota2.temp02@gmail.com'); 

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}


// Отображение результата
if ($sType == 1){
    header('Location: thanks-subscribe.html');
} else {
    header('Location: thanks.html');
}