//9 Массивы
//const cars = ['Мазда', 'Mersedes', 'Форд']
//console.log (cars)
//console.log (cars.length)
//console.log (cars[2])

//cars[0] = 'Porshe'
//console.log (cars)
//cars[4] = 'Mazda'

//cars [cars.length]= 'BMW'

//9 Циклы
//const cars = ['Мазда', 'Mersedes', 'Форд','Porshe']
//for (let i = 0; i < cars.length; i++){
//const car = cars[i]
//console.log (car)
//}

//for ( let car of cars) {

//console.log (car)

//}

//10 Object

//const person = {
//
//firstName: 'Ivan',
//lastName: 'Velykorydko',
//year: '1985',
//landguages: ['rus','ukr','eng' ],
//hasWife: true,
//isOtchestvo: 'Borisovich',
//}
//person.isProgramer = true
//
//console.log (person)
//console.log (person.firstName)

//11 Number 
//const num = 42
//const float = 42.42
//const pow  = 10e3
//console.log (pow)
//console.log ('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)

//const stringInt = 40
//const stringFloat = 40.42
//
//console.log (Number.parseInt(stringInt)+2)
//console.log (Number(stringInt)+2)
//console.log (+stringInt +2)
//
//console.log (Number.parseFloat(stringFloat)+2)

//console.log (0.4 + 0.2)
//
//console.log ((0.4 + 0.2).toFixed(1)) 
////console.log (+(0.4 + 0.2).toFixed(1)) 
//console.log (parseFloat((0.4 + 0.2).toFixed(1)))



//12 BigInt

//12 BigInt
//console.log (1234567903456789045790 -123456790345678904579 )
//console.log (-1234567903456789045790n)
//console.log (parseInt(10) - 4)
//console.log (10n - BigInt (4))
//console.log (10n /5n)


////13 Math
//console.log (Math.E)
//console.log (Math.PI)
//console.log (Math.sqrt(25))
//console.log (Math.pow(5,3))
//console.log (Math.abs(-42))
//console.log (Math.max(42,12,23,11,422))
//console.log (Math.floor(42.12))
//console.log (Math.ceil(42.12))
//console.log (Math.round(Math.random()))

//
//function getRandom (min, max) {
//
//return Math.floor(Math.random () * (max-min + 1) + min)
//}
//console.log(getRandom (10,42))
//


//13 String

//const name = 'Иван'
//const age = '35'
//
//function getAge () {
//
//    return 35
//}
//
////const output = 'Привет меня зовут ' + name + ' мой возраст ' + age + ' лет ' 
//
//const output =`Привет, меня зовут ${name} мой возраст ${getAge()} лет.`
//
//
//console.log (output)


//
//const name = 'Иван'
//console.log (name.length)
//console.log (name.toUpperCase())
//console.log (name.toLowerCase())
//console.log (name.charAt(2))
//console.log (name.indexOf('ан'))
//console.log (name.indexOf('!'))
//console.log (name.toLowerCase() .startsWith('ив'))
//console.log (name.endsWith('ан'))
//console.log (name.repeat(3))
//
//const string = '     password'
////console.log  (string.trim())
//console.log  (string.trimLeft())
////console.log  (string.trimRight())




//
//function logPerson (s, name, age) {
//
//console.log (s, name, age)
//return 'Info about personal'
//
//}
//
//
//const personName = 'Иван'
//const personAge = 35
//
//const output = logPerson` Имя: ${personName}, Возраст: ${personAge}!`
//
//
//console.log (output)
//
//
//


//13  function

//13.1  function diclaretion 
//function greet(name) {
//    console.log ('Привет - ', name)
//}
//
////13.2 function expression
//const greet2 = function greet2 (name) {
//
// console.log ('Привет2 - ', name)
//}
//
//greet('Иван')
//greet2('Инна')
//
//console.dir(greet)



//13.1 Анонимные function
//let counter = 0
//const interval = setInterval(function () {
//
//
//if  (counter === 10) {
//clearInterval(interval)
//}
//
//else {
//console.log (++counter)
//}
//
//}, 1000)


//14 Срелочнеы функции

//function greet(name) {
//    console.log ('Привет - ', name)
//}
//
//const arrow = (name) => {
//
//    console.log ('Привет -' , name)
//
//}
//
//arrow ('Ivan')

//15 Парамеры поумолчанию

//const sum = (a, b) =>  a + b
//
//console.log (sum (5,10))

//function sumAll (...all) {
//
//let result = 0
//
//for (let num of all) {
//result += num
//}
//return result
//}
//
//const res = sumAll (1, 2, 3, 4, 5,)
//console.log (res)
//


//function greet (name) {
//console.log ('Привет - ', name)
//}
//greet ('Иван')

//let elem = document.getElementById('elem');

//console.log (elem.innerHTML);
//console.log (elem.textContent);

//var one = 'Hello123';

//document.getElementById('htmltext').innerHTML = one;

//alert(one);
//console.log (one);

//$('#htmltext').text(one);

//var movie = "Fight Club";
//var description = "Терзаемый хронической бессонницей и отчаянно пытающийся вырваться из мучительно скучной жизни, клерк встречает некоего Тайлера Дардена, харизматического торговца мылом с извращенной философией.";
//
//document.getElementById("movie").innerHTML = movie;
////document.getElementById("description").innerHTML = description;
//$('#description').text(description);
//var one = "Большой текст Большой текст Большой текст Большой текст";

//$('#htmltext').text(one);
//$('#htmltext').fadeOut("slow");
//$('.myclass').text(one);
//document.getElementsByClassName("myclass")[0].innerHTML = one;
//console.log(document.getElementsByClassName("myclass"));
//document.getElementsByClassName("myclass")[0].style.color = "#0822a2";
//document.getElementsByClassName("myclass")[0].style.backgroundColor = "grey";
//$('.myclass').css('color', 'green');
//$('.myclass').css('background-color', 'grey');


//console.log(mySum(10,5));
//
//function mySumShow(a,b) {
//result = a + b;
//
//document.getElementsByClassName("myclass")[0].innerHTML = result;
//}
//
//mySumShow(100, 6);

//myclass.onclick = function (){
//alert('Hello!');
//}

//var say = function (){
//alert ('Привет');
//}

//myclass.addEventListener ('mouseover', say);
//myclass.removeEventListener ('click', say);

//вы не заполнили поле
// $(function () {
//     $('.form1').submit(function (e) {
//         if ($('.text1').val() == "") {
//             e.preventDefault();
//             alert('Вы не заполнили поле')
//         }

//     });

// });

//focus
//$(function () {
//    $('.text1').focus(function () {
//        $(this).css({
//            'border': '1px solid red',
//            'background': 'grey'
//
//        });;
//    });
//
//});

//add class

// $(function () {
//     $('.text1').focusin(function () {
//         $(this).addClass('border')
//     });
//     $('.text1').blur(function () {
//         $(this).removeClass('border')
//     });

// })


// $(function () {

//     $('#select1').change(function () {
//         var v = $('#select1 :selected').val();
//         if (v == 1) {
//             $('#select2').html('<option value="1"> Значение номер 1 </option> <option value="2"> Значение номер 2 </option>');
//         }
//     });

// });

// var year = new Date().getFullYear();
// if (year % 4 == 0) {
//     alert("Выскосный год");

// }
// else {
//     alert("Обычный год");
// }

// var day = new Date().getDay();

// var day = +prompt("Ведите номер дня");

// if (day > 0 && day < 6) {
//     alert("Будний день");
// }
// else if  (day == 6 || day == 0) {
//     alert("Выходной день");
// }
// else {
//     alert("День не найден");
// }

// function power(val, pow) {
//     if (pow == 0) {
//         return 1;
//     }
//     if (pow == 1) {
//         return val;
//     }
//     return val * power(val, pow - 1);

// }

//var val = +prompt("Введите число1")
//var pow = +prompt("Введите число2")
//
//function power(val, pow) {
//    if (pow == 0) {
//        return 1;
//    }
//    if (pow == 1) {
//        return val;
//    }
//    return val * power(val, pow - 1);
//
//}
// console.log(power(2, 1));
//
//alert("Результат:" + power(2, 2));


//var x, y;
function sum (x, y) {
return x+y;
}

function dif (x, y) {
return x-y;
}

function multi (x, y) {
return x*y;
}
function div (x, y) {
if (y !=0 )
return x/y;
return 0;
    }


//
//alert (multi (5, 2));
 


x = +prompt("Введите первое число");
y = +prompt ("Введие второе число");
oper = prompt ("Введите знак +, -, *, /");

function Operation (x, y, oper) {

switch (oper) {
    case '+':
alert(sum (x, y));
break; 

    case '-':
alert(dif (x, y));
break; 

    case '*':
alert (multi (x, y));
break; 

    case '/':
alert(div (x, y));
break;

    default: 
alert ("Вывели не верный знак");
break;
}


}

Operation(x, y, oper)










