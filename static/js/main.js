'use strict';

// Data block
let result, speed, power;
let $password = document.getElementById('pass');
let $ACEL = document.getElementById('video');
let $PCS = document.getElementById('acc_pcs');
let $UPPER = document.getElementById('Up');
let $LOWER = document.getElementById('Lw');
let $SPACER = document.getElementById('Sp');
let $DIGITAL = document.getElementById('Dg');
let $RES = document.getElementById('result');

// Time block
let secPerMinute = 60;
let secPerHour = secPerMinute * 60;
let secPerDay = secPerHour * 24;
let secPerYear = secPerDay * 365;


function calc() {
  /// Calculate bruteforce time

  speed = $ACEL[$ACEL.selectedIndex].dataset.speed
  power = $UPPER.checked ? 26 : 0 + $LOWER.checked ? 26 : 0 + $DIGITAL.checked ? 10 : 0 + $SPACER.checked ? 33 : 0

  // Проверка на корректность поля пароля
  if (($password != null) && ($password.value >= 8)) {

    // Количество карточек
    speed = speed * $PCS.value;

    // Расчёт времени перебора в секундах
    result = Math.pow(power, $password.value) / speed;

    // Дробление секунд.
    let year = Math.floor(result / secPerYear);
    result = result - (year * secPerYear);
    let days = Math.floor(result / secPerDay);
    result = result - (days * secPerDay);
    let hours = Math.floor(result / secPerHour);
    result = result - (hours * secPerHour);
    let minutes = Math.floor(result / secPerMinute);
    result = result - (minutes * secPerMinute);
    let seconds = Math.floor(result);

    // Выводим результат в окно формы.
    $RES.value = "" + year + " years " + days + " days " + hours + " hours " + minutes + " min. " + seconds + " sec."
  }
}
