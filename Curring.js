
// curring - карирование - функция принимает как можно меньше аргументов

// function sun (a,b,c,d,w,e,x,v){
//     return a + b + c + d + w + e + x + v
// }
//
// console.log(sun(1,2,3,4,5,6,7,8))

// function num(a){
//     return function (b){
//         return function (c){
//             return function (d){
//                 return function (w){
//                     return function (e){
//                         return function (x){
//                             return function (v){
// return a + b + c + d + w + e + x + v
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
//
// console.log(num(1)(2)(3)(4)(5)(6)(7)(8))

// const sun = a => b => c => a + b + c
// console.log(sun("https://")("github.com/")("asadulladev"))
// //
// function link(a){
//     return function (b) {
//         return function (c){
//              return a + b + c
//         }
//     }
// }
// function aaa(a){
//     return a
// }
//
//
// console.log(aaa("https://")("github.com/")("asadulladev"))
//

// console.log(link("https://")("github.com/")("ramazan784dev"))
// console.log(link("https://")("github.com/")("ymankulov"))
// console.log(link("https://")("github.com/")("asadulladev"))
// console.log(link("https://")("github.com/")("asadulladev"))


// function sun(a){
//         return function (b){
//             return function (c){
//                 return a + b + c
//             }
//         }
//     }
// console.log(sun(2)(45)(56))
//

// const sun = a => b => c => d => a + b + c + d
// console.log(sun(9)(2)(5)(7))

// mutation - 2 objects have same link
// мутациянын жаман жери проект туура эмес иштей баштайт!
// let arr = [2,104,4,66,68,97,32,24,42]
//
// let copy = [...arr]
// console.log(copy)
//
// arr.sort((a,b)=>{
// return a - b
// })
// console.log(arr)
//
// let teg = [4,5,12,425242,535225,5252,25252,52,1,5,5,5,6,8]
// // let copy = [...teg]
// // console.log(copy)
// teg.sort((a,b)=>{
//     return b - a
// })
// console.log(teg)

// мутациядан качуу учун бизде спрет оператор деген нерсе бар
//...


//recursion - функция вызывает себя
// 5! = 1 * 2 * 3 * 4 * 5  = 120

// const factorial = (n) =>{
//     console.log(n)
//     if (n === 1){
//         return 1
//     }
//     return n * factorial(n -1)
// }
// console.log(factorial(4))













