'use strict';

// INIT FORM
var $LeftOp = document.getElementById('leftOperand');
var $RightOp = document.getElementById('rightOperand');
var $Op = document.getElementById('operation');
var $Button_submit = document.getElementById('submit');
var $Button_reset = document.getElementById('reset');
var $Result = document.getElementById('result');


function calc() {

  // Операции
  switch ($Op.value) {
    case '+':
      $Result.value = +$LeftOp.value + +$RightOp.value;
      break;
    case '-':
      $Result.value = +$LeftOp.value - +$RightOp.value;
      break;
    case '*':
      $Result.value = +$LeftOp.value * +$RightOp.value;
      break;
    case '/':
    if (+$RightOp.value == 0) {
      alert("Делить на ноль НЕЛЬЗЯ!")
      break;
    }
      $Result.value = +$LeftOp.value / +$RightOp.value;
      break;
      case '^':
        $Result.value = Math.pow(+$LeftOp.value , +$RightOp.value);
        break;
    default:
      alert("Нет такой операции!")
  }
}
