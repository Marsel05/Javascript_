
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
//
// function number (a){
//     alert (a )
// }
//
// console.log(number(100))
