function createLiTaskItem(event) {
    let inputTask = document.getElementById('input-task').value;

    if (inputTask == '') {
        alert('Please enter a task to be added to the TODO List.')
    } else {
        let liItem = document.createElement('li');
        liItem.classList.add('task-item');

        let liText = document.createTextNode(inputTask);

        liItem.appendChild(liText);

        let iconCross = document.createElement('i');
        iconCross.classList.add('fa', 'fa-times');

        liItem.appendChild(iconCross);

        let todoListStack = document.querySelector('.todo-list');

        todoListStack.appendChild(liItem);

        document.getElementById('input-task').value = '';

        todoListStack.classList.remove('hide');
        todoListStack.classList.add('show');
    }
}

let todoListStack = document.querySelector('.todo-list');

todoListStack.addEventListener('click', removeTask);

function removeTask(event) {
    let deleteIcon = event.target.parentElement.classList.contains('task-item');

    if (deleteIcon) {
        event.target.parentElement.remove();
    }

}

function removeAllItems(event) {
    let todoulStack = document.querySelector('.todo-list');

    todoulStack.innerHTML = '';
    todoListStack.classList.remove('show');
    todoListStack.classList.add('hide');
}

function pressEnter(event) {
    let keypressed = event.keyCode;

    if (keypressed === 13) {
        createLiTaskItem(event);
    }
}

// function filterTask(event) {
//     console.log('Filter task');
//     let inputFilter = document.querySelector('#filter-task').value;
//     console.log(inputFilter);
// }

// function pressFilter(event) {
//     console.log('press Filter task');
//     let liListStack = document.querySelectorAll('.task-item');
//     console.log(liListStack);
//     let inputFilter = document.querySelector('#filter-task').value;
//     console.log(inputFilter);

//     for (let i = 0; i < liListStack.length; i++) {
//         console.log(liListStack[i].innerText);

//         if (liListStack[i].includes(inputFilter)) {
//             console.log('text node of li matches');
//         }
//     }
// }