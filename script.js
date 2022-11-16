
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readResponse = 'not read yet'
        if (read) {
            readResponse = 'has been read'
        }
        return `${title} by ${author}, ${pages} pages, ${readResponse}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function logLibrary() {
    myLibrary.forEach(e => console.log(`${e.info()}`))
}

const formContainer = document.querySelector(".form-container")

function createFormElement(form, type, id, label) {
    const input = document.createElement('input')
    input.type = type
    input.id = id
    const inputLabel = document.createElement('label', `for=${id}`)
    inputLabel.textContent = label 
    form.appendChild(inputLabel)
    form.appendChild(input)
} 

function createForm() {
    const form = document.createElement('form')
    form.id = 'book-form'
    formContainer.appendChild(form)
    createFormElement(form, 'input', 'title', 'Title')
    createFormElement(form, 'input', 'author', 'Author')
    createFormElement(form, 'number', 'pages', 'Pages')
    createFormElement(form, 'checkbox', 'read', 'Read?')
}

function removeBookForm() {
    const form = document.getElementById('book-form');
    const submit = document.getElementById('submit');
    form.remove();
    submit.remove();
}

function createButton(id, text) {
    const button = document.createElement('button');
    button.id = id;
    button.textContent = text;
    formContainer.appendChild(button);
    return button;
}

function bookFromForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const read = document.getElementById('read').checked;
    return new Book(title, author, parseInt(pages), read);
}

const newBook = document.querySelector('.newbook')
newBook.addEventListener('click', () =>{
    createForm();
    const submit = createButton('submit', 'submit')
    submit.addEventListener('click', () => {
        const book = bookFromForm();
        addBookToLibrary(book);
        renderBook(book);
        removeBookForm();    
    })
})

const bookContainer = document.querySelector('.book-container')
function renderBook(book) {
    const bookInfo = document.createElement('p');
    bookInfo.className = 'book';
    bookInfo.textContent = book.info();
    bookContainer.appendChild(bookInfo);
}



