let input_box = document.querySelector(".input-box") ;
let input_btn = document.querySelector(".input-btn") ;
let update_btn = document.querySelector(".update-btn") ;
let list = document.querySelector(".list") ;

let todo = [] ;
let edit ;

input_btn.addEventListener("click", ()=>{
    if (input_box.value) {
        todo.push(input_box.value)
        input_box.innerHTML = "" ;
        addTodo()    
    }
})

update_btn.addEventListener("click", ()=>{
    if (input_box.value) {
        todo[edit] = input_box.value ;
        input_box.innerHTML = "" ;
        addTodo()
    }
})

function addTodo(){
    list.innerHTML = "" ;
    todo.map((item)=>{
        list.innerHTML += `<li> ${item} </li><button class="edit_up">edit</button> <button class="del">delete</button>` ;
        input_box.value = "" ;
    })

    let del_x = document.querySelectorAll(".del") ;
    let del_y = Array.from(del_x) ;

    del_y.map((del_z, index) =>{
        del_z.addEventListener("click", ()=>{
            todo.splice(index, 1)
            addTodo()
        })
    })

    let edit_a = document.querySelectorAll(".edit_up") ;
    let edit_b = Array.from(edit_a) ;

    edit_b.map((edit_c, index) =>{
        edit_c.addEventListener("click", ()=>{
            input_box.value = todo[index]
            edit_c.innerHTML = "" ;
            edit = index ;
        })
    })
}