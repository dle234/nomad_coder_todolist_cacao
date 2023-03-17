const submit = document.querySelector('.todo');
const toDoInput = document.querySelector('.todo input');
const todoList = document.querySelector('.todoList');
let saveList = [];
const TODOS_KEY = "todos"


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(saveList));


}   //투두리스트 문자열로 만들어 넣기.


const savedToDos = localStorage.getItem(TODOS_KEY);

function deleteToDo(e) {
    const deleteli = e.target.parentElement;
    deleteli.remove();
    //리스트에서도 지워주기.
    //saveList = saveList.filter((sl) => { sl.id != parseInt(deleteli.id) }); 중괄호 씌우면 안됨.
    saveList = saveList.filter((sl) => sl.id !== parseInt(deleteli.id));
    //   saveList 중 삭제할 li의 id와 다른 애들로만 filter해주기.
    saveToDos();
}


const appendTodo = (todo) => {
    const todoli = document.createElement("li");
    todoli.id = todo.id;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    todoli.classList.add("cacaotalk");
    todoli.innerText = todo.text;
    deleteBtn.innerText = "x";
    deleteBtn.addEventListener('click', deleteToDo);
    todoli.appendChild(deleteBtn);
    todoList.appendChild(todoli);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const whatTodo = toDoInput.value;
    toDoInput.value = "";
    const Obj = {
        text: whatTodo,
        id: Date.now(),
    }
    saveList.push(Obj);
    saveToDos();
    appendTodo(Obj);


}
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    toDos.forEach((todo) => appendTodo(todo));//이거 이해하기
}



submit.addEventListener("submit", handleToDoSubmit);








