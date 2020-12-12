const addForm = document.querySelector('.form-add');
const userForm = document.querySelector('.add-todo.full > form')
const list = document.querySelector('.todo');
const search = document.querySelector('.search.input')

    // generate html template to be inserted into the DOM
const generateTemp = userAdd => {
    const html = `<li class="todo-list"><span class="text">${userAdd}</span><span class="delete"><i class="far fa-trash-alt delete"></i></span></li>`;
    list.innerHTML += html;     // add to existing ul list
};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const userAdd = userForm.add.value.trim();  // get the value of user input with no whitespaces
    if(userAdd.length) {  // check for addition of null input
    generateTemp(userAdd);
    addForm.reset();        // clear and reset input form
    };
                               
});

        // deleting to-dos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {  // check for element in ul which contains the class 'delete'
        e.target.parentElement.parentElement.remove();
    }
});


const scan = (match) => {

    Array.from(list.children)       // make an array out of the children elements of the ul list
    .filter(task => !task.textContent.toLowerCase().includes(match))    // filter out matches which do not contain the input search
    .forEach(task => task.classList.add('filtered'));       // apply the filter class to it to hide those matches

    Array.from(list.children)
    .filter(task => task.textContent.toLowerCase().includes(match))        // filter out matches which contain the match when the user erases some match keys (presses backspace)
    .forEach(task => task.classList.remove('filtered'));    // remove filter class 
};
        // searching through the list using the keyup event

search.addEventListener('keyup', () => {
    const match = search.value.trim().toLowerCase();
    
    scan(match);
});