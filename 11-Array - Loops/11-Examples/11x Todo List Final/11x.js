// --------------------------------------------
//------------- Final Project --------------

const todoList3 = JSON.parse(localStorage.getItem('todoList3')) || []; 

function addArrayValue3() {
    let inputValue3 = document.querySelector('.input-value-3');
    let name = inputValue3.value.trim();

    let inputDate = document.querySelector('.date-value');
    let dueDate = inputDate.value;
    
    // Check if input is not empty
    if (name === '') {
        alert('Please enter a value');
        return;
    }
    
    todoList3.push({
        // name: name,
        // dueDate: dueDate
        // property and value are same just use shortcut

        name,
        dueDate
    });
    localStorage.setItem('todoList3', JSON.stringify(todoList3));
    updateTodoListFinal();
    inputValue3.value = '';
    inputDate.value = '';
}

function updateTodoListFinal() {
    let todoHTML = '';
    
    // Using for loop as requested
    for (let i = 0; i < todoList3.length; i++) {
        const todoObject = todoList3[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;

        // shortcut
        const {name, dueDate} = todoObject;

        todoHTML += `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class = "delete-btn-style"
              onclick = "
                 todoList3.splice(${i}, 1);
                 localStorage.setItem('todoList3', JSON.stringify(todoList3));
                 updateTodoListFinal();"
            >Delete</button>
            `;
    }
    console.log(todoHTML);
    let divCont = document.querySelector('.js-todo-list-final');
    divCont.innerHTML = todoHTML;
}

updateTodoListFinal();