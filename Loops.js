//
// ЦИКЛ - loops
// increment - i++
// decrement - i--
// iteration

// for ()
// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }
//
// for (let j = 0; j < 100; j++){
//     console.log(j)
// }
//
// for (let j = 100; j > 0; j--){
//     console.log(j)
// }
//
// break
// for (let a = 1; a < 100; a++){
//     if (a === 51){
//         break
//     }
//     console.log(a)
// }
//
//  continue()
// for (let i = 0; i < 20; i++){
//     if (i === 13 || i === 4){
//         continue
//     }
//     console.log(i)
// }

// while ()
// let i = 0
// while (i < 20){
//     console.log(i)
//     i++
// }













// 1. Выведите столбец чисел от 1 до 50.
// let counter = 0
// for (let i = 0; i < 51 ; i++){
//     console.log(i)
//     counter = counter + i
// }
// console.log(counter)
// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.
// let arr = []
// for (let i = 0; i < 10; i++){
//     console.log(i)
//     arr[i] = "X"
// }
// console.log(arr)
// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.
// let arr = [5,3,1,2,7]
// for (let j = 0; j < arr.length; j++){
//     console.log(arr[j])
// }
// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.
// let arr = [5,2,1,2]
// let counter = 1
// for (let i = 0; i < arr.length; i++){
//     console.log(i)
//     counter =counter * arr [i]
//     counter *= arr[i]
//
// }
// console.log(counter)
// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for (let i = 0; i < 100; i++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
//
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let counter = 1
// for ( let i = 0; i < 100;i++){
//     counter += i
// }
// console.log(counter)
// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите
// сумму элементов этого массива. Запишите ее в переменную result.

// let number = [2, 4, 5, 6, 8]
// let result = 0
// for (let i = 0; i < number.length; i++){
//
//     result += number[i]
// }
// console.log(result)

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if
// выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let arr = [3, 4, 6, 12, 3, 5]
// for (let i = 1; i < arr.length;i++){
//     if (arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i])
//     }
// }


// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.
// let arr = [2,-4,5,-8,6,-9,50,-23,4,-54,64,56]
// let counter = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         counter += arr[i]
//
//     }
//
//     }
// console.log(counter)
// console.log(2+5+6+50+4+64+56)
// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for
// и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
// Если есть- выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr = [5, 1, 3,  7, 6, 15, 3, 20]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === 4){
//         console.log('Есть!')
//     }else {
//         console.log(arr[i])
//     }
// }



// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000]
// for (let i = 0; i < arr.length; i++) {
//     let s = String(arr[i])
//     if (s[0] === "1" || s[0] === "2" || s[0] === "5") {
//         console.log(arr[i])
//     }
// }
// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте
// строку '-1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let str = ""
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === 9){
//         str += "-" + arr[i] + "-"
//     }else {
//         str += "-" + arr[i]
//     }
// }
// console.log(str)

// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
// меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// let n = 1000
// for (let n = 1000; n > 50; n = n / 2 ){
//     console.log(Math.round(n))
// }
// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое
// его элементов (сумма элементов, делить на количество).
// let arr = [1, 2, 3, 7, 6, 9]
// let counter = 0
// for (let i = 0; i < arr.length; i++){
//     counter += Math.round(arr[i] / 6)
//
// }
// console.log(counter)

// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла
// найдите сумму квадратов элементов этого массива.
// let arr = [1,2,3,4,5]
// let sun = 0
// let result = 0
// for (let i = 0; i < arr.length; i++){
//     sun += arr[i]
//     result = sun ** 2
//
// }
// console.log(result)
// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла выведите
// только те элементы массива, которые больше нуля и меньше 10-ти.
// let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i])
//     }
//
// }
// 17. Создайте переменную с пустым массивом, заполните массив
// 10-ю случайными числами от 1 до 10 с помощью цикла.
// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.round(Math.random() * 10)
// }
// console.log(arr)
// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
// let counter = 0
// for (let i = 1; i < 1000;i++){
// if (i % 3 === 0 && i % 5 === 0){
//     counter += i
// }
// }
// console.log(counter)
// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].
// Создайте цикл, который выводит нечетные числа, которые больше 10.

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 !== 0 && arr[i] > 10){
//         console.log(arr[i])
//     }
// }