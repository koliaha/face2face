<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

// POST
// validate email
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    // $error = [ 'error' => 'invalid email'];
    http_response_code(400);
    echo json_encode($error);
    exit(1);
}

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->SMTPDebug  = SMTP::DEBUG_OFF;
    $mail->Host = 'ssl://smtp.jino.ru';
    $mail->Port = 465;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->SMTPAuth = true;

    $mail->Username = "gosport@gomobileagency.com";
    $mail->Password = "1lvs2dsp";
    
    $mail->setFrom('gosport@gomobileagency.com', 'Go Mobile');
    // $mail->addAddress('consulting@gomobile.ru');
    $mail->addAddress('anton.bocharov@gomobile.ru');
    $mail->addAddress('hi@goahead.ai');
    
    $mail->Subject = 'Go Ahead request';
    $mail->msgHTML("
        <h2>Report from Go Ahead<h2>
        <ul>
            <li>mail: {$_POST['name']}</li>
            <li>name: {$_POST['company']}</li>
            <li>last name: {$_POST['email']}</li>
            <li>company: {$_POST['phone']}</li>
            <li>position: {$_POST['service']}</li>
        </ul>
    ");

    $mail->send();

    http_response_code(200);
    echo json_encode($_POST);

} catch (Exception $e) {

    $data = [ 'error' => $e->getMessage() ];
    http_response_code(500);
    echo json_encode($data);

}