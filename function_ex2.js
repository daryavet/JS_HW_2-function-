
// Задание 2.

// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.



let checkNum = prompt('Введите число: ', '');
let count = 0; // для второго вариата решения

function checkSimpleOfNum_1(){
    if (checkNum<=1000 && checkNum>1){
      if ((+checkNum) === 2){
        return alert(`${checkNum} - простое число`)
      }else if((+checkNum) % 1 === 0){
          for (let i=2; i<checkNum; i++){
            if(checkNum % i === 0){
                alert(`${checkNum} - составное число`)
                return
            }
          }
          alert(`${checkNum} - простое число`)
      } else {
          alert("ошибка, введите целое число")
      }
    } else {
      return alert("ошибка ввода") 
    }
}
checkSimpleOfNum_1();



// вариант 2 *т.к. у простого числа будет только 2 делителя можно использовать счетчик

function checkSimpleOfNum_2(){
  if (typeof(+checkNum) != 'number' || isNaN(+checkNum) || +checkNum === "" || checkNum >= 1001 || +checkNum <= 1 ){
  } else {
    for (let i=1; i<=checkNum; i++){
      if(checkNum % i === 0){
        count++
        if (count>3){
            break;
          }
      }
    } 
  };

if (count == 2){
  alert(`${checkNum} - простое число`) 
} else if (count > 2) {
  alert (`${checkNum} - составное число`)
} else {
  alert("ошибка ввода")
}
};
// checkSimpleOfNum_2();


   