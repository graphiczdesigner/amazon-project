// --------------------------------------------
//------------- Final Project --------------

const todoList3 = [{
    name:'javaScript',
    dueDate: '2025-07-27'},
     {
        name: 'Client Hunting',
        dueDate: '2025-07-28'}
    ]; 

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
    updateTodoListFinal();
    inputValue3.value = '';
    inputDate.value = '';
}

document.querySelector('.js-add-btn')
.addEventListener('click', () => {
    addArrayValue3();
});


function updateTodoListFinal() {
    let todoHTML = '';

    todoList3.forEach((todoObject, index)=>{
        const {name, dueDate} = todoObject;

        todoHTML += `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class = "delete-btn-style js-delete-btn"
            >Delete</button>
            `;
    });

    console.log(todoHTML);
    let divCont = document.querySelector('.js-todo-list-final');
    divCont.innerHTML = todoHTML;

    document.querySelectorAll('.js-delete-btn')
    .forEach((deleteBtn, index) => {
        deleteBtn.addEventListener('click', ()=>{
            todoList3.splice(index, 1);
            updateTodoListFinal();
        });
    }
    );
    
}

updateTodoListFinal();