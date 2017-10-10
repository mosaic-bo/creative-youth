<?php

/*$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["Творческая молодежь - 2017"]);
	$admin_email  = trim($_POST["katerinabormotova@mail.ru"]);
	$form_subject = trim($_POST["Новая заявка"]);

	$name = trim($_POST["name"]);
	$place = trim($_POST["place"]);
	$phone = trim($_POST["phone"]);
	$email = trim($_POST["email"]);
	$title = trim($_POST["title"]);
	$view = trim($_POST["view"]);
	$status = trim($_POST["status"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["admin_email"]);
	$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );
*/

$frm_name  = trim($_POST["name"]);
$recepient = "katerinabormotova@mail.ru";
$sitename  = "Творческая молодежь-2017";
$subject   = "Новая заявка с сайта \"$sitename\"";

$place = trim($_POST["place"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$title = trim($_POST["title"]);
$view = trim($_POST["view"]);
$status = trim($_POST["status"]);

$message = "
Поступила заявка на участие в конференции<br>
Имя: <b>$frm_name</b> <br>
Город, организация, должность: <b>$place</b> <br>
Телефон: <b>$phone</b> <br>
E-mail: <b>$email</b> <br>
Название доклада/сообщения: <b>$title</b> <br>
Доклад или сообщение? <b>$view</b> <br>
Форма представления: <b>$status</b> <br>
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");