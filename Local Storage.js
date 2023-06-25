

// Local Storage
const input = document.querySelector(".text-input")
const btn = document.querySelector(".add-btn")
const ul = document.querySelector(".list")
const h4 = document.querySelector("h4")


// JSON.stringify() - любой маалыматты строка катары жуктоп берет
// JSON.parse() - биринчи калыбына келтирет
// setItem(key,value) - сохранить пару ключ/значение.
// getItem(key) - получить данные по ключ key.
// removeItem(key) - удалить данные с ключом key.
// clear() - удалить всё.
function view(){
    ul.innerHTML = ""
 const task = JSON.parse(localStorage.getItem("task")) || []
    task.map((el)=>{
        ul.innerHTML += `<li class="my-1 list-group-item d-flex justify-content-between align-items-center ">
<span class="${el.isDone ? "line" : ""}">
<input type="checkbox" ${el.isDone ? "checked" : ""} class="check">
${el.title}
</span>

<button class="del-btn btn btn-danger">Delete</button>
<li`
    })
    deleteBtn()
    checkBox()
}
view()

// localStorage.setItem("task",JSON.stringify([{title:"Marsel", id: 1}, {title:"Bill", id: 2}]))
btn.addEventListener("click", ()=>{
    const task = JSON.parse(localStorage.getItem("task")) || []
    const newTask = {
        id: task.length ? task[task.length - 1].id +1 : 1 ,
        title: input.value,
        isDone: false
    }
    const result = [...task, newTask]
    localStorage.setItem("task", JSON.stringify(result))
    input.value = ""
    view()
})

function deleteBtn() {
let task = JSON.parse(localStorage.getItem("task")) || []
const buttons = document.querySelectorAll(".del-btn")
buttons.forEach((btn,index)=>{
    btn.addEventListener("click", ()=>{
       task = task.filter((el,idx)=>{
            return idx !== index
        })
        localStorage.setItem("task", JSON.stringify(task))
        view()
    })

})
}

function checkBox(){
    let task = JSON.parse(localStorage.getItem("task")) || []
    const checkBoxes = document.querySelectorAll(".check")
    checkBoxes.forEach((check, index)=>{
        check.addEventListener("click", ()=>{
            task = task.map((el,idx)=>{
                if (idx === index){
                    return {...el,  isDone:  !el.isDone   }
                }else{
                    return el
                }
            })
            localStorage.setItem("task", JSON.stringify(task))
            view()
        })
    })
}
checkBox()


// const obj = JSON.parse(localStorage.getItem("task"))
// obj.map((el)=>{
//     ul.innerHTML += `<li>${el.name}<li`
// })






// const anim = document.querySelectorAll(".list")
// anim.forEach((el,)=>{
//
//
//     el.style.transform = "scale(1)"
//     el.style.transition = ".3s ease-in-out"
//
// })
//
//
// input.addEventListener("keydown", (el)=>{
//     if (el.key === "Enter"){
//         if (input.value === ""){
//             sun()
//         }else{
//             h4.innerHTML = ""
//             ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center ">
//
// <span>
// <input type="checkbox" class="check">
// ${input.value}
// </span>
// <button class="del-btn btn btn-danger">delete</button>
//
// </li>`
//             input.value = ""
//         }
//
//
//     }
// })
//
// function add(){
//
//     if (input.value === ""){
//         h4.innerHTML = "404"
//     }else{
//         h4.innerHtml = ""
//         ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
// <span>
// <input type="checkbox" class="check">
// ${input.value}
// </span>
// <button class="del-btn btn btn-danger">delete</button>
//
// </li>`
//         input.value = ""
//         h4.innerHTML = ""
//     }
//
// }
// btn.addEventListener("click", () =>{
//     add()
//     ul.style.border = "3px solid blue"
//
// })
// ul.addEventListener("click", (e)=>{
//   $  if (e.target.classList.contains("del-btn")){
//         e.target.parentNode.remove()
//         ul.style.border = "none"
//
//     }
//     if (e.target.classList.contains("check")){
//         if (e.target.parentNode.classList.contains("line")){
//             e.target.parentNode.classList.remove("line")
//         }else{
//             e.target.parentNode.classList.add("line")
//         }
//     }
//
//
// })
//
// function sun(){
//     alert("бир нерсе жаз")
// }
//
//













































































