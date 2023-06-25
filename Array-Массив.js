// массив - набор данных, структура данных
// Array - Массив - []
// let arr = [1,2,3,4,5,6,7,8,9,10,]
// let arr = ["sadfg", "fgdfgh", [1,23,4,4,6] , true , false ]
// let arrName = ['Marsel' , 'Aida' , ' Janatan' ]
//length
// index []
// console.log(arrName)
// console.log(arrName.length)
// console.log(arrName[0])
// let str = "qwertyuiokijuhytrfdcvbhjk"
// console.log(str.Math.floor(str.length -1))
// console.log(str.slice(-1))

// console.log(arrName.slice(-1))


// 'Aida' , ' Janatan' , 'Nurzada'

// let arrName = ['Baigan', 'Marsel']
// index 0 1
// arrName[0] = 'Aida'
// console.log(arrName)
// arrName[2] = 'Aida'
//
// arrName[3] = "Janatan"
// arrName[100] = 'Nurzada'
// console.log(arrName)
// console.log(arrName.length)
// let arr = new Array(20)
// fill () - massive ти заполнить тетип коёт
// console.log(arrName.fill('Marsel'))
// let str = "Ramazan"
// console.log(str.length)
// console.log(str[6])
// len name = ['Aida', 'Janatan', 'Nurzada']
// console.log(arrName + name)
// let arrName = ['Baigan' , 'Marsel','Aida', 'Janatan', 'Nurzada']
//
// splice:

// 1 - index
// 2 - deleteCount
// 3 - elements
// arrName.splice(0 , 1, "Ramazan")
// console.log(arrName)
//
// arrName.splice(0, 1 , 'MotionWeb')
// arrName.splice  (2 , 3,'MotionWeb')
// console.log(arrName)


// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let task1 = ['a', 'b', 'c']
// task1.push(1, 2, 3)
// console.log(task1)
// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr = [1 ,2, 3]
// let task= [,4,5,6]
// console.log([arr + task])
// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1, 2, 3]
// arr.push(4,5,6)
// console.log(arr)
// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3]
// arr.unshift(4,5,6)
// console.log(arr)
// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let task5 = ['js', 'css', 'jq']
// console.log(task5[0])
// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let task6 = ['js', 'css', 'jq','js', 'css', 'jq','js', 'css', 'jq','js', 'css', 'jq','js', 'css', 'jq','js', 'css', 'j1',]
// console.log(task6.pop())
// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
let task7 = [1, 2, 3, 4, 5]
task7.slice(3,4)
console.log(task7.slice(0 , 3))
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


// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let arr = ['a', 'b', 'c']
// arr.push( 1, 2, 3)
// console.log(arr)
// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr = [1, 2, 3,]
// let arr1 = [4,5,6]
// console.log(arr + arr1)
// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1,2,3,]
// arr.push(4,5,6)
// console.log(arr)
// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1,2,3]
// arr.unshift(4,5,6,)
// console.log(arr)
// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = [ 'js', 'css', 'jq' ]
// console.log(arr[0])
// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let arr = ['js', 'css', 'jq']
// console.log(arr[arr.length - 1])
// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(0, 3))
// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arr = [1, 2, 3, 4, 5]
//
// console.log(arr.slice(3,5))
// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(1,2)
// console.log(arr)
// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let arr =[1,2,3,4,5]
// arr.splice(0,1,)
// arr.splice(3,1)
// console.log(arr)


// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b','c' , 4, 5].
// let arr = [1,2,3,4,5]
// arr.splice(3 ,0,'a', 'b','c')
// console.log(arr)
// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1,2,3,4,5]
// arr.splice(1,0,'a','b')
// arr.splice(6,0,'c')
// arr.splice(8,0,'e')
// console.log(arr)
// ====================================================================================================================================================


// map
// filter
// joinI

// let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// map()

// console.log(arrNumber.map(function (el, index, array){
//     return el * 2
// }))

// console.log(arrNumber.map((el)=>{
//     return el + 2
// }))

// let arrNumber = [1,2,3,4,5,6,7,8,9]

// console.log(arrNumber.filter((el)=>{
//     return el > 5
// }))

// let str = ['fdsfd', 'dadafa', 'dfaa', 'fd']
//
// console.log(str.filter((el)=>{
//     return el.length > 5
// }))


// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.map((el) => {
//     if (el % 2 === 0){
//         return "jup san"
//     }else {
//         return "tak san"
//     }
// }))

// let arr = ["Baigan", "Azamat", "Bill", "Doni"]
//
// console.log(arr.map(function (el) {
// return el.toUpperCase()
//
// }))

// let arr = ["Baigan", "Azamat", "Bill", "Doni"]
// console.log(arr.filter(( el) =>{
// return el.includes("i")
// }))

// Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.
// let arr = [315, 64, 75, 43, 65, 63]
// console.log(arr.map((el) =>{
//     return el + el
// }))
//     Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию,
//     которая выводит только те имена, где есть буква к и выведите в консоль.
// let arr = ['Аскар', 'Баяман', 'Калмамат']
// console.log(arr.filter((el) =>{
//     return el.includes("к")
// }))


// ===========================================================================================================================


//sort
// a,b
// Bubble - алгоритм
// let sun = [1, 23, 4, 5, 6 , 64, 7, 74]
//
// const sortNum = (arr) => {
//     return arr.sort((a,b) =>{
//         return a - b
//     })
// }
// console.log(sortNum(sun))

// let sun = ['f', "a ", "w", 'c', "q", "z"]
//
// const sortNum = (arr) => {
//     return arr.sort((a,b) =>{
//         return a.localeCompare(b)
//     })
// }
// console.log(sortNum(sun))

// console.log("b".charCodeAt(0))
// console.log("v".charCodeAt(0))
// console.log("g".charCodeAt(0))
// console.log("a" > "b")
// console.log("A".charCodeAt(0))
//
//

// reduce(), reduceRight()
// any result
// массивдин ичиндеги сандардын баарын кошуп бере алат

// acc - initial Value

let sun = [300,111,30 ,40,1,2,3,400,500]
//
// function num (arr){
//     return arr.reduce((acc,el)=>{
//         return acc + el
//     },0)
// }
// console.log(num(sun))

console.log(sun.reduce((acc,el,idx,arr,)=>{
    console.log('acc-', acc, "el-", el)
    return acc + el
}, 0))

// let sun = ['f', "a ", "w", 'c', "q", "z"]
//
// console.log(sun.reduce((acc, el) =>{
//     console.log('acc-', acc, "el-", el)
//     return acc + el
// }, ""))


// map
// filter

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers.map((el)=>{
//     return el * 2
// }))

// console.log(numbers.reduce((acc, el)=>{
//     acc.push(el * 2)
//     return acc
// }, []))

// console.log(numbers.filter((el)=>{
//     return el % 2 === 0
// }))

// console.log(numbers.reduce((acc, el)=>{
//     if (el % 2 === 0){
//         acc.push(el)
//         return acc
//     }else {
//         return acc
//     }
// }, []))


// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
//
// let task1 = [5,15,315,2,13,20,9]
// console.log(task.reduce((acc,el)=>{
//     return acc + el
// },0))

//     Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.
// const task2 = (arr) =>{
//     return arr.reduce((acc, el)=>{
//         if (el % 2 === 0){
//             return acc + el
//         }else {
//             return acc
//         }
//     })
// }
// console.log(task2([5,12,314,2,13,20,9]))
//     Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.
//
// let number = [5,15,315,2,13,20,9]
// console.log(number.reduce((acc,el) =>{
//     if (el > 10){
//         return acc + el
//     }else {
//         return acc
//     }
// },0))

// Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
//
// let sun [3,13,54,15,335, 39]
// console.log(sun.reduce((acc,el)=>{
//     if (el > 10){
//         return acc - el
//     }else [
//         return acc
//     ]
// },0))

// Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.
//
// let task = ['Аскар', 'Баяман', 'Калмамат']
// console.log(task.reduce((acc,el)=>{
//     return acc + el
// }).length)

//     Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите
// // все строки в верхнем регистре, используя map.

// let task = ['Аскар', 'Баяман', 'Калмамат']
// console.log(task.map((acc,el ,idx)=>{
//
//     return acc.toUpperCase()


// },0))

// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат', 'Ben'].
// // Выведите все вторые строки в верхнем регистре.
// let task = ['Аскар', 'Баяман', 'Калмамат', 'Ben']
// console.log(task.map((el, idx,array)=>{
//     if  (idx % 2 !== 0){
//         return el.toUpperCase()
//     }else {
// return el
//     }
// }))


//     Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
// //     Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]

// let task = ['асКар', 'бАяман', 'калМмамат']
// console.log(task.map((el)=>{
//     return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
// }))

//
// const task = ['асКар', 'бАяман', 'калМмамат']
// console.log(task.map((el)=>{
//     return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
// }))
//
// let task = (str) =>{
//     return str.map((el)=>{
//         return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
//     })
// }
// console.log(task(['асКар', 'бАяман', 'калМмамат']))

// =================================================================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

















