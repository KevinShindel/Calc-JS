'use strict';

//
var result, speed, power;
var $password = document.getElementById('pass');
var $ACEL = document.getElementById('video');
var $PCS = document.getElementById('acc_pcs');
var $UPPER = document.getElementById('Up');
var $LOWER = document.getElementById('Lw');
var $SPACER = document.getElementById('Sp');
var $DIGITAL = document.getElementById('Dg');
var $RES = document.getElementById('result');

// Time block
var secPerMinute = 60;
var secPerHour = secPerMinute * 60;
var secPerDay = secPerHour * 24;
var secPerYear = secPerDay * 365;


function calc() {

  power = 0;
  speed = 0;

  // Проверка чекбоксов
  if ($UPPER.checked) {
    power = power + 26;
  }

  if ($LOWER.checked) {
    power = power + 26;
  }

  if ($DIGITAL.checked) {
    power = power + 10;
  }

  if ($SPACER.checked) {
    power = power + 33;
  }

  // Проверка на корректность поля пароля
  if (($password != null) && ($password.value >= 8)) {

    // Установление скорости
    switch ($ACEL.value) {
      case '1080Ti':
        speed = 576000;
        break;
      case 'GTX1080':
        speed = 400000;
        break;
      case 'GTX980':
        speed = 200000;
        break;
      case 'GTX760':
        speed = 45000;
        break;
      case 'GTX680':
        speed = 29000;
        break;

      case 'RX580':
        speed = 224000;
        break;
      case 'RX570':
        speed = 150000;
        break;
      case 'RX560':
        speed = 60000;
        break;
      case 'RX480':
        speed = 185000;
        break;
      case 'RX470':
        speed = 165000;
        break;
      case 'RX460':
        speed = 150000;
        break;

        // default:
    }

    // Количество карточек
    speed = speed * $PCS.value;

    // Расчёт времени перебора в секундах
    result = Math.pow(power, $password.value) / speed;

    // Дробление секунд.
    var year = Math.floor(result / secPerYear);
    result = result - (year * secPerYear);
    var days = Math.floor(result / secPerDay);
    result = result - (days * secPerDay);
    var hours = Math.floor(result / secPerHour);
    result = result - (hours * secPerHour);
    var minutes = Math.floor(result / secPerMinute);
    result = result - (minutes * secPerMinute);
    var seconds = Math.floor(result);

    // Выводим результат в окно формы.
    $RES.value = "" + year + " years " + days + " days " + hours + " hours " + minutes + " min. " + seconds + " sec."

    // Выводим результат во всплывающем окне.
    // alert("Время брута составит: " + year + " лет " + days + " дней " + hours + " часов " + minutes + " минут " + seconds + " секунд.");
  }
}
