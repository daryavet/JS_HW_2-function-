
let checkNum = prompt('Введите число: ', 'целое число от 2 до 1000');
let simple;
let count = 0; // для второго вариата решения

function checkSimpleOfNum_1(){
  if (typeof(+checkNum) != 'number' || isNaN(+checkNum) || +checkNum === "" || checkNum >= 1001 || +checkNum <= 1 ){
      
  } else if (+checkNum === 2){
     simple = true;
  } else if(checkNum % 1 == 0) {
      for(let i = 2; i < checkNum; i++) { 
           if (checkNum % i == 0) {
           simple = false;
           break;
         } else {
           simple =true;
         }
        }
     }
     
if (simple == false){
alert(`${checkNum} - составное число`);
}else if(simple == true) {
alert(`${checkNum} - простое число`);
} else {
alert('ошибка ввода')
};

};
checkSimpleOfNum_1();

// вариант 2 *т.к. у простого числа будет только 2 делителя можно использовать счетчик :)

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





//3 вариант не выходит(все что не делится на 2 - простые числа)

function checkSimpleOfNum_11(){
    if (checkNum<=1000 && checkNum>1){
      if ((+checkNum) === 2){
        return alert(`${checkNum} - простое число`)
      } else if((+checkNum) % 1 === 0){
          for (let i=2; i<checkNum; i++){
            if(checkNum % i === 0){
             alert("составное")
            } else {
                alert(`${checkNum} - простое число`)
            }
        } 
        } else {
        alert("ошибка, введите целое число")
         }
    } else {
      return alert("ошибка ввода") }
}
        
   
   checkSimpleOfNum_11();
   