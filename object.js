// object - data type - тип данных
// корунушу - {}
// console.log(typeof {})
// любой малыматты камтыйт
// key: values
// const user ={
//     name: "Marsel",
//     age:17,
//     hobby:"football",
//     home: true,
//     car:true,
//     time: function (){
//       alert ("Hello!")
//     },
//     address:{
//         city:"Bishkek"
//     },
//     job:"Frontend-developer",
//     "Fovarite club": ['RealMadrid',"aedafa","asfeawdscgggqgtghea"]
//
// }

// console.log(Object.freeze(user))
// user.name = "Azamat"
// user.cash = '5000$'
// delete user.job
// console.log(user)
// console.log(user["Fovarite club"][0])
// console.log(user.length)
// console.log(user["name"])
// console.log(user.age)
// console.log(user.job)
// console.log(user.address.city)
// console.log(user.map((el)=>{
//     return el.name
// }))

// Object.keys()
// console.log(Object.keys(user))
// console.log(Object.keys(user).length)

// Object.values()
// console.log(Object.values(user))
// console.log(Object.values(user).length)

// Object.entries()
// console.log(Object.entries(user))
// console.log(Object.entries(user).length)


// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(Object.keys(obj).length)
// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.
// const obj = {
//     a: 1,
//     b: 2,
//     c: {
//         r:3
//     }
//
// }
// console.log(Object.values(obj.c))


// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.

// const obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: '200'
// }
// console.log(obj.Атай)
// console.log(obj.Ширин)

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.

// const obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: '200'
// }
// obj.Атай = '500'
// console.log(obj)

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.
//
// const obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: '200'
// }
// obj.Медет = '1500'
// console.log(obj)

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.

// const obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай:{
//         salary:"500"
//     }
// }
// console.log(obj.Атай.salary)

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// const obj = {
//     понедельник: "первый",
//     вторник: "второй",
//     среда: "третий",
//     четверг: "четвёртый",
//     пятница: "пятый",
//     суббота: "шестой",
//     воскресенье: "седьмой"
// }
// console.log(obj.среда)

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.

// const day = {
//     понедельник: "1",
//     вторник: "2",
//     среда: "3",
//     четверг: "4",
//     пятница: "5",
//     суббота: "6",
//     воскресенье: "7"
// }
// console.log(day["среда"])
// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.
// const obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: {
//         salary: '500'
//     }
// }
// console.log(Object.keys(obj))
//     10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.

// const obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: {
//         salary: '500'
//     }
// }
// console.log(Object.values(obj))
//         11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.

// const obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: {
//         salary: '500'
//     }
// }
// console.log(Object.entries(obj))

//12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.


// const obj ={
//     name: 'Igor'
// }
// function arr(a){
//     if  (arr.length % 2 === 0){
//         return '1'
//     }else {
//         return '0'
//     }
// }
//
// console.log(arr(obj))


// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.

// const obj = [
//     {id: 3}, {id: 5}, {id: 6}, {id: 7}
// ]
// function arr(a){
//     console.log(obj.map((el)=>{
//         return el.id
//     }))
// }
//
// console.log(arr(obj))


// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25. Поменяйте значение name на Azat.


// const task14 =(obj) =>{
//     obj.age = 25
//     obj.name = "Azat"
//     return obj
// }
//
// console.log(task14({name: 'Igor'}))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//
// let person = [
//     {
//         id:1,
//         name: "Janatan",
//         age: 25,
//         jop: "Developer",
//         car: false
//     },
//     {
//         id:2,
//         name: "Azamat",
//         age: 10,
//         jop: "Web Developer",
//         hobby: "sport"
//     },
//     {
//         id:3,
//         name: "Baigan",
//         age: 35,
//         jop: "Web Developer",
//         home: true
//     },
//     {
//         id:4,
//         name: "Marsel",
//         age: 27,
//         jop: "Web Developer",
//         home: true
//     },
//     {
//         id:5,
//         name: "Nurzada",
//         age: 18,
//         jop: "Web Developer",
//         hobby: "sport"
//     },
//     {
//         id:6,
//         name: "Janatan",
//         age: 25,
//         jop: "Web Developer",
//         car: false
//     },
//     {
//         id:7,
//         name: "Azamat",
//         age: 10,
//         jop: "Web Developer",
//         hobby: "sport"
//     },
//     {
//         id:8,
//         name: "Baigan",
//         age: 35,
//         jop: "Web Developer",
//         home: true
//     },
//     {
//         id:9,
//         name: "Marsel",
//         age: 27,
//         jop: "Web Developer",
//         home: true
//     },
//     {
//         id:10,
//         name: "Nurzada",
//         age: 18,
//         jop: "Web Developer",
//         hobby: "sport"
//     }
// ]
//
// console.log(person.filter((el,) => {
//     if (el.id % 2 !== 0){
//         return el.jop = "Front-End Developer"
//     } else {
//         return person
//     }
// }))
//
// // console.log(person.map((el)=>{
// //     return el.name
// // }))
//