<?
'PHPMailer/PHPMailerAutoload.php ' require_once;

$admin_email = массив();
foreach ( $_POST["admin_email"] как  $key => $value) {
 array_push($admin_email, $value);
}

$form_subject = обрезать($_POST["form_subject"]);

$mail = новый  PHPMailer;
$mail-> CharSet = 'UTF-8';



$ c = true;
$message = ";
foreach ( $_POST  как  $key => $value) {
	если ( $value != "" && $key != "admin_email" && $key != "form_subject" ) {
		если (is_array($value)) {
			$ val_text = ";
			foreach (значение $  как  значение $ val) {
				если ($ val && $ val != ") {
					$ val_text .= ($val_text=="?":', ').$ вэл;
				}
			}
			$value = $val_text;
		}
		$message .= "
		" . ( ($ c = ! $ c) ? '<tr>': '<tr>' ) . "
<td style='отступ: 10 пикселей; ширина: авто;'><b>$ключ:</b></td>
<td style='отступ: 10 пикселей; ширина: 100%;'> значение $</td>
 </tr>
		";
	}
}
$message = "<стиль таблицы='ширина: 50%;'>$message</table>";


// От кого
$mail->setFrom('adm@' . $ _SERVER['HTTP_HOST'], 'Ваш лучший сайт');

// Кому
foreach ( $admin_email  как  $key => $value) {
	$mail-> Добавить адрес (значение $);
}
// Тема письма
$mail-> Subject = $form_subject;

// Тело письма
$body = $сообщение;
// $mail->isHTML(true); это если прям верстка
$mail->msgHTML($body);

// Приложения
если ($_FILES){
	foreach ( $_FILES['file']['tmp_name'] как $key => $value ) {
		$mail->Добавить привязку($value, $_FILES['файл']['имя'][$ключ]);
	}
}
$mail-> отправить();
?>
