const todoList = [];
function addArrayValue(){
	let inputValue = document.querySelector('.input-value');
	let realVal = inputValue.value;
	todoList.push(realVal);
	console.log(todoList);
	inputValue.value = '';
}

//------------- Practice 2 --------------

const todoList2 = [];

function addArrayValue2() {
    let inputValue2 = document.querySelector('.input-value-2');
    let realVal2 = inputValue2.value.trim();
    
    // Check if input is not empty
    if (realVal2 === '') {
        alert('Please enter a value');
        return;
    }
    
    todoList2.push(realVal2);
    console.log(todoList2);
    updateTodoList();
    inputValue2.value = '';
}

function updateTodoList() {
    let todoHTML = '';
    
    // Using for loop as requested
    for (let i = 0; i < todoList2.length; i++) {
        const todo = todoList2[i];
        todoHTML += `<p>${todo}</p>`;
    }
    console.log(todoHTML);
    let divCont = document.querySelector('.js-todo-list');
    divCont.innerHTML = todoHTML;
}

updateTodoList();