

// JavaScript

// data type

// number - 1234567890
// string - 'fsfsfw'
// boolean - true,false
// bigint - 1234567890n
// null - жок нерсе
// undefined - белгисиз
// symbol

// object




// number - 11111234568

// переменные
// var - иштен чыккан
// const - constant - постоянный
// let - позволяет изменить

// let age = 99
// age =19
// console.log(age)



// const age = 19
// console.log(age)

// +
// -
// *
// **
// /
// %
// console.log(5+5)
// let a = 10
// let b=20
// console.log(a+b)


// console.log(20 - 3)



// // pow - **
// console.log( Math.pow (4,2))
// // floor()
// console.log(Math.floor(1.9))
// // ciel()
// console.log(Math.ceil(1.8))
// // round
// console.log(Math.round(1.2))
// // abs()
// console.log(Math.abs(-100))
// // sqrt
// console.log(Math.sqrt(64))
// // trunc
// console.log(Math.trunc(10.2345242342))
// let year = 2022
// let a = year / 100
// console.log(Math.ceil(a))




//====================================================================================




// string - строка - сап

// let str = ""
// let str = "231231231"
// let str = "13414424"

// length
// index = []

// let city = "Bishkek"
//
// console.log(city.length)
// console.log(city[12])
// console.log(city)




// let str = "1234567890987654321"

// console.log(str [Math.floor (str.length / 2)])
// console.log(str.length)
// console.log(str[23])
// console.log(str[str.length -1])
// let city = "Bishkek"

// repeat()
// console.log(city.repeat(100 ))
//
// console.log(city.substring(0, 4))
// console.log(city.substring(-1))
// console.log(city.substring(0))
// console.log(city.substr(1,  5))
//
// console.log(city.slice(4, 7))
// console.log(city[Math.floor(city.length / 2)])
// charAt ()
// console.log(city.charAt(5))

// indexof()
// console.log(city.indexOf("k"))

// lastIndexOf()
// console.log(city.lastIndexOf("k"))
// console.log(city.lastIndexOf("B"))

// includes()
// console.log(city.includes("k"))

// toUppercase()
// console.log(city.toUpperCase())

// toLowerCase()
// console.log(city.toLowerCase())


// let a = "Marsel "
// let b = "Satimbaev "
// let c = "12345 "
// console.log(a + b + c)
// console.log(a.concat(b + c ))



// Строки:
//     1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной в консоль.
// let str = 'Привет, Мир!'
// console.log(str)
// 2. Вам даны переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.
// let str1= 'Привет, '
// let str2= 'Мир!'
// console.log(str1.concat(str2))
// 3. Вам дана переменная name, присвойте ей ваше имя. Выведите в консоль фразу 'Привет, *Имя*!'.
// let name = 'Marsel'
// let src = 'Привет'
// console.log(`${src}`+ name)
// 4. Вам дана переменная age , присвойте ей ваш возраст. Выведите в консоль 'Мне *Возраст* лет!'.
// let age= '17'
// let src= "Мне лет!"
// console.log(` Мне ${age} лет!`)
// 5. Вам даны четыре переменные.
//     Первая - для хранения количества дней. Присвойте ей значение "365".
//     Вторая - для хранения названия нашей планеты "Земля".
//     Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
//     Четвертая - для хранения слова "Солнце".
//     Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
//     "В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."
// let str1="365"
// let str2="Земля"
// let str3= "7 млрд."
// let str4= "Солнце"
// console.log(`В нашем году ${str1} дней. Днём у нас светит ${str4} Население планеты ${str2} составляет примерно ${str3} человек.`)

// ============================================================================================

// УСЛОВИЕ


// if? else?

// if () {

// } else {

// }

// let num = 100
//
// console.log(num)
// console.log(num.toString())
// console.log(String(num))
// console.log( num + "")

// let str = '123456'
// console.log(str)
// console.log(Number(str))
// console.log(+str)
// console.log(parseInt(str))
// console.log(Number(str))
// console.log(parseInt(str))
// console.log(+str)
// >=
// <=
// ==
// ===
// !===

// console.log(5 >= 5)
// console.log(5 <= 5)
// console.log(-5 < -2)
// console.log("ac" < "bd")
// console.log(5 === "5")

// let str ='green'
//
// if (str === "red") {
//     console.log("tokto!")
// } else if (str === "green") {
//     console.log("otober!")
// } else if (str === "yellow") {
//     console.log("kutotur!")
// } else {
//     console.log(404)
// }

// ternary operator: - / 2 (a + b)
// unary operator: +a 1

// tak san 2 4 6 8 10
// jup san 1 3 5 7 9

// let sun = 20
// if (sun % 2 === 0){
//     console.log("tak san")
// }else{
//     console.log("jup san")
// }

// let a = true
// console.log(typeof a)

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// let a = "10"
//  if (a === "10") {
//      console.log("Верно")
//  } else {
//      console.log("Неверно")
//  }
// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// let a = 50
// let b = 100
// console.log(a < b)
// console.log(a > b)
// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться
// 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
// let  a= "-2"
//  if (a < 0){
//     console.log("positive")
// }
//   else  if (a === 0 ){
//     console.log("равно")
// }
//   else if (a > 0){
//     console.log("negative")
// }
// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль
// "Четное число", "Нечетное число".
// let number =45
// if (number % 2 === 0){
//     console.log("Четное число")
// } else{
//     console.log("Нечетное число")
// }
// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
// let a=10 , b=2
// if (a % b === 0){
//     console.log("Чётное число")
// } else{
//     console.log("Нечетное число")
// }

// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
// let s = "1313134"
// if (s){
//     console.log(typeof s)
// }else{
//     console.log(undefined)
// }
//

// ======================================================================================================

// логическая сумма - ||
// логическая умнажения &&
// && - жана - и
// || - же - или

// true = 1, -1, "9417uad"
// false = 0 ""

// console.log(true && true && true)
// console.log(true || true || false)
// console.log(true || true && false)
// console.log(123 && 12 && 0 )
// console.log(true || false && true)
// console.log(true && false && true)
// console.log(true && true && true && false)
// console.log(true || true || true || false)
// console.log("" && 0 && 0)
// console.log(0 && "")
// console.log(1 && "asd" && "kla12345")
// console.log(1 && 0 && "asd")
// console.log(1 && "asd" && "javascript" && "C++")
// console.log(false || "" || 0)
// console.log(25 || 1 || "asd" || "javascript" || 123456)


// let sun = 17
//
// if (sun > 5 && sun <=20){
//     console.log("Туура")
// } else {
//     console.log("Туура эмес")
// }

// let age = 35
// if (age >= 0 && age <= 3){
//     console.log("Малыш")
// }else  if (age >= 4 && age <= 6){
//     console.log("Садикке барат")
// }else  if (age >= 7  && age <= 18){
//     console.log("мектепке барат")
// }else  if (age >=19  && age <= 24){
//     console.log("студент")
// }else  if (age >= 25 && age <= 28){
//     console.log("жумушчу")
// }else  if (age >= 29 && age <= 40 ){
//     console.log("Семейный")
// }else  if (age >= 41 && age <= 60 ){
//     console.log("Бизнесмен")
// }else  if (age >= 61  && age <= 80 ){
//     console.log("Чон Ата")
// }else  if (age >= 81 ){
//     console.log("Пенсионер")
// }else{
//     console.log("Сен пок ажоксун")
// }
// let age = 20
// let prava = true
// if (age >=17 && age <= 20 && prava === true){
//     console.log("Машина айдаса болот")
// }else {
//     console.log("Машина айдаса болбойт")
// }

// let akcha = false
// let taanysh = true
// let bilim = true
//
// if (akcha === true && taanysh === true && bilim === true){
//     console.log("За границу кетем")
// } else if (akcha === true || taanysh === true || bilim === true ){
//     console.log("За границу возможно кетем")
// } else {
//     console.log('RUS')
// // }
//



// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти,
// то выведите 'Верно', иначе выведите 'Неверно'.
// let a = 5
// if (a < 1 && a > 9){
//     console.log("Верно")
// } else{
//     console.log("Неверно")
// }
// 8. Вам дана переменная а. Если переменная a равна трем или равна семи, то
// прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение
// переменной в консоль.
//
// let a = 3
// if (a === 3 || a === 7){
//     console.log(a + 7)
// } else{
//     console.log(a + 10)
// }
// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0,
// а переменная b больше или равна 5, то выведите сумму этих переменных,
// иначе выведите их разность (результат вычитания).
// let a = 3
// let b = 5
// if (a >= 0 && b <= 5 ){
//     console.log(a + b)
// } else{
//     console.log(a - b)
// }

// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'
// let a = 7
// let b = 9
// if (a > 4 && a < 10 || b >= 7 && b < 17){
//     console.log("Верно")
// }else {
//     console.log("Неверно")
// }

// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от
// 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето,
// весна, осень).
// let month = 1
// if (month === 12 || month === 1 || month === 2){
//     console.log("зима")
// } else if (month >= 3 && month <= 5){
//     console.log("весна")
// }else if (month >= 6 && month <= 8){
//     console.log("лето")
// }else if (month >= 9 && month <= 11){
//     console.log("осень")
// }else{
//     console.log("404")
// }
// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1
// до 31. Определите в какую декаду месяца попадает это число (в первую, вторую
// или третью).
// let day = 3
// if (day <= 1 && day >= 10){
//     console.log("первую")
// } else if (day <=11 && day >= 20){
//     console.log("вторую")
// } else if (day <= 21 && day >= 31){
//     console.log("третью")
// }else {
//     console.log("404")
// }
// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой
// переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в
// противном случае выведите ‘нет’.
// let a = "12345"
// if (a[0]==="1" || a[0] === "2" || a[0] === "3"){
//     console.log("да")
// }else{
//     console.log("нет")
// }



// ===================================================================================


// function declaration

// a, b, c - параметр
// a:5, b:10, c:20 - аргумент
//
// function funcStr(a,b,c){
//     return a + b + c
// }
//
// console.log(funcStr(5,10,20))





// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// function str (a){
//     if (a === 10 ){
//         return "Верно"
//     } else {
//         return "Неверно"
//     }
// }
//
// console.log(str(10))

// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// function str (a,b){
//     if (a > b){
//         return'a больше b'
//     } else {
//         return 'a меньше b'
//     }
// }
//
// console.log(str(50,100))
// 3. Вам дана переменная a=-2. Составьте условие,
// по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
// function str (a){
//     if (a > 0 ){
//         return "positive"
//     } else if (a === 0){
//         return 'равно'
//     } else if (a < 0){
//         return"negative"
//     } else {
//       return "404"
//     }
// }
//
// console.log(str(-2))


// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".

// function number(a){
//     if (a / 2 === 0){
//         return "Четное число"
//     } else {
//         return "Нечетное число"
//     }
// }
//
// console.log(number(45))

// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".

// function str(a , b){
//     if (a % b === 0 ){
//         return "Четное число"
//     }else {
//         return "Нечетное число"
//     }
// }
//
// console.log(str(10 , 2))
// 6. Вам дана переменная s. Составьте условие,
// по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
// function str(s){
//     if (s){
//         return typeof s
//     }else{
//         return "undefined"
//     }
// }
// console.log(str(2))

// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти,
// то выведите 'Верно', иначе выведите 'Неверно'.
// function str (a){
//     if (a > 1 && a < 9){
//         return 'Верно'
//     }else {
//       return'Неверно'
//     }
// }
//
// console.log(str(5))

// 8. Вам дана переменная а. Если переменная a равна трем или равна семи, то
// прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение
// переменной в консоль.
// function str(a){
//     if (a === 3 || a === 7){
//         return a + 7
//     } else {
//         return a / 10
//     }
// }
//
// console.log(str(7))
// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0,
// а переменная b больше или равна 5, то выведите сумму этих переменных,
// иначе выведите их разность (результат вычитания).
// function str( a , b){
//     if (a <= 0 || b >= 5){
//         return a + b
//     } else{
//         return a - b
//     }
// }
//
// console.log(str(5 , 10))
// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'

// function str(a,b){
//     if (a > 4 && a < 10 || b >= 7 && b < 17){
//         return 'Верно'
//     }else {
//         return  'Неверно'
//     }
// }
//
// console.log(str(7, 9))
// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от
// 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето,
// весна, осень).

// function str(month){
//     if (month === 12 || month === 1|| month === 2){
//         return "зима"
//     }else if (month >= 3 && month <=5){
//         return "весна"
//     }else if (month >= 6 && month <= 8){
//         return "лето"
//     }else if (month >= 9 && month <= 11){
//         return "осень"
//     }else {
//         return "404"
//     }
// }

// console.log(str(10))

// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1
// до 31. Определите в какую декаду месяца попадает это число (в первую, вторую
// или третью).

// function str(day){
//     if (day >= 1 && day <=10){
//         return "в первую"
//     }else if (day >= 11 && day <= 20){
//         return "вторую"
//     }else if (day >= 20 && day <= 31){
//         return "третью"
//     }else {
//         return "404"
//     }
// }

// console.log(str(15))
// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой
// переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в
// противном случае выведите ‘нет’.
//
// function str(a){
//     if (a[0] === "1" || a[0]==="2"||a[0]==='3'){
//         return 'да'
//     }else {
//         return 'нет'
//     }
// }
//
// console.log(str("12345"))



                                        // TEST

// let a = 7
// if (a === 10){
//     console.log("Верно")
// }else {
//     console.log('Неверно')
// }

// let a= 50 , b =100
// if (a > b){
//     console.log("a больше b")
// }else {
//     console.log("а меньше b")
// }



// let age=17
// console.log(`Мне ${age} лет`)
//
// let a = 17, b= 10
// let c = a - b
// let d = 3
// let result = c + d
// console.log(result)


// ==============================================================================================================



// function expression

// => - callback - стрелочная функция
//
// const sun = (a,b,s ) =>{
//     return a + b + s
// }
// console.log(sun(1,2,3))
//




// 213685 = 2+5 = 7
// 2+3+5+2 = 12 = 3
// 2+3+5+8 = 1+8 = 9


// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
//  const task1 = (a) =>{
//     if (a === 10) {
//         return "Верно"
//     }else {
//         return 'Неверно'
//     }
//  }
// console.log(task1(10))
// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// const task2 = (a , b) => {
//     if (a > b){
//         return "a больше b"
//     }else {
//         return "a меньше b"
//     }
// }
// console.log(task2(50,100))
// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться
// 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
// const task3 = (a) => {
//     if (a > 0){
//         return "positive"
//     }else if (a === 0){
//         return "равно"
//     }else {
//         return 'negative'
//     }
// }
// console.log(task3(-2))

// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль
// "Четное число", "Нечетное число".
// const task4 = (number) => {
//     if (number / 2 === 0){
//         return "Четное число"
//     }else {
//         return "Нечетное число"
//     }

// }
// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b,
// будет выводиться консоль "Четное число", "Нечетное число".
// const task5 = (a , b ) =>{
//     if (a % b === 0){
//         return 'Четное число'
//     }else {
//         'Нечетное число'
//     }
// }
// console.log(task5(10, 2))
// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится
// тип этой переменной - "boolean", "number", "string".
// const task6 = ( s ) =>{
//     if (s) {
// return typeof s
//     }else {
//         return undefined
//     }
// }
// console.log(task6( 5))

// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'
// const task10 = (a,b) =>{
//     if  (a > 4 && a < 10 || b >= 7 && b < 17){
//         return "Верно"
//     }else {
//         return 'Неверно'
//     }
// }
// console.log(task10(10, 15))

// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от
// 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето,
// весна, осень).
// const task11 = ( month ) =>{
//     if (month === 12 || month === 1 || month === 2){
//         return 'зима'
//     }else if (month >=3 && month <=5){
//         return "весна"
//     }else if (month >=6 && month <= 8){
//         return "лето"
//     }else if (month >= 9 && month <= 11) {
//
//     }else {
//         return 'осень'
//     }
//
// }




// =======================================================================================================================

//
// function sun(a){
//     alert (a - 20)
// }
// // sun(40)
//
// console.log(sun(40))

// =========================================================================================================================


// массив - набор данных, структура данных
// Array - Массив - []
// let arr = [1,2,3,4,5,6,7,8,9,10,]
// let arr = ["sadfg", "fgdfgh", [1,23,4,4,6] , true , false ]
// let arrName = ['Baigan' , ' Marsel' , 'Aida' , ' Janatan' , 'Nurzada']
//length
// index []
// console.log(arrname)
// console.log(arrName.length)
// console.log(arrName[1])
// let str = "qwertyuiokijuhytrfdcvbhjk"
// console.log(str.Math.floor(str.length -1))
// console.log(str.slice(-1))

// console.log(arrName.slice(-1))


// 'Aida' , ' Janatan' , 'Nurzada'

// let arrName = ['Baigan' , 'Marsel']
// index 0 1
// arrName[0] = 'Aida'
// console.log(arrName)
// arrName[2] = 'Aida'
// console.log(arrName)
// arrName[3] = "Janatan"
// arrname[100] = 'Nurzada'
// console.log(arrName.length)
// let arr = new Array(20)
//fill () - massive ти заполнить тетип коёт
// console.log(arr.fill('A'))
// let str = "Ramazan"
// console.log(str.length)
// console.log(str[6])
// len name = ['Aida', 'Janatan', 'Nurzada']
// console.log(arrName + name)

// let arrNAme = ['Baigan' , 'Marsel','Aida', 'Janatan', 'Nurzada']
//
// splice:

// 1 - index
// 2 - deleteCount
// 3 - elements
// arrNAme.splice(0 , 3, "Ramazan")
// console.log(arrNAme)
//
// arrNAme.splice(0, 1 , 'MotionWeb')
// arrNAme.splice  (2 , 3,'MotionWeb')
// console.log(arrNAme)




// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let task1 = ['a', 'b', 'c']
// task1.push(1, 2, 3)
// console.log(task1)
// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr = [1 ,2, 3]
// let task= [ ,4,5,6]
// console.log([arr + task])
// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1, 2, 3]
// arr.push(4,5,6)
// console.log(arr)
// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr [1, 2, 3]
// arr.unshift(4,5,6)
// console.log(arr)
// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let task5 = ['js', 'css', 'jq']
// console.log(task5[0])
// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let task6 = ['js', 'css', 'jq']
// console.log(task6.pop())
// console.log(task6[2])
// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let task7 = [1, 2, 3, 4, 5]
// task7.slice(3 , 4  )
// console.log(task7)
// console.log(task7.slice(0 , 3))
// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let task8 = [1, 2, 3, 4, 5]
// console.log(task8.slice(3,5))
// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let task9 = [1, 2, 3, 4, 5]
// task9.splice (1,2 )
// console.log(task9)

// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let task10 = [1,2,3,4,5]
// task10.splice(0,1)
// task10.splice(3 , 1)
// console.log(task10)

// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let task11 = [1, 2, 3, 4, 5]
// task11.splice(3,0,'a', 'b', 'c')
// console.log(task11)
// // 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let task12 = [1, 2, 3, 4, 5]
// task12.splice(1 , 0 , "a" , "b")
// task12.splice(6 , 0 , "c")
// task12.splice(8 , 0 , "e")
// console.log(task12)



                                                    // ЗАДАЧИ


//
// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
// let str = [5,15,315,2,13,20,9]
// console.log(str.reduce((acc,el)=>{
//     return acc + el
// }))

//     Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.
// let str = [5,12,314,2,13,20,9]
// console.log(str.reduce((acc,el)=>{
//     if (el % 2 === 0){
//         return acc + el
//     }else {
//         return acc
//     }
// }, 0))
//     Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.
// let str = [5,15,315,2,13,20,9]
// console.log(str.reduce((acc,el)=>{
//     if (el > 10){
//         return acc + el
//     }else {
//         return acc
//     }
// }, 0))

// Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
// let str = [3,13,54,15,335, 39]
// console.log(str.reduce((acc,el)=>{
//     if (el > 10){
//         return acc - el
//     }else {
//         return acc
//     }
// },0))

// Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.
// let str = ['Аскар', 'Баяман', 'Калмамат']
// console.log(str.reduce((acc,el)=>{
//     return acc + el
// }).length)
//     Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите
// // все строки в верхнем регистре, используя map.
// let str = ['Аскар', 'Баяман', 'Калмамат']
// console.log(str.map((el)=>{
//     return el.toUpperCase()
// }))

// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат', 'Ben'].
// // Выведите все вторые строки в верхнем регистре.
// let str = ['Аскар', 'Баяман', 'Калмамат', 'Ben']
// console.log(str.map((el,idx)=>{
// if (idx % 2 !== 0){
//     return el.toUpperCase()
// }else {
// return el.toLowerCase()
// }
//
// }))


//     Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
// //     Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]


let str = ['асКар', 'бЯяман', 'калМмамат']
console.log(str.map((el)=>{
return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
}))






























































































































































