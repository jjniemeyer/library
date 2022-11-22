import {Book} from "./Book.js"

function createFormElement(form, type, id, label) {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  const inputLabel = document.createElement("label", `for=${id}`);
  inputLabel.textContent = label;
  form.appendChild(inputLabel);
  form.appendChild(input);
}

export function createBookForm() {
  const formContainer = document.querySelector(".form-container");
  const form = document.createElement("form");
  form.id = "book-form";
  formContainer.appendChild(form);
  createFormElement(form, "input", "title", "Title");
  createFormElement(form, "input", "author", "Author");
  createFormElement(form, "number", "pages", "Pages");
  createFormElement(form, "checkbox", "read", "Read?");
}

export function removeBookForm() {
  const form = document.getElementById("book-form");
  const submit = document.getElementById("submit");
  form.remove();
  submit.remove();
}

export function createButton(id, text) {
  const formContainer = document.querySelector(".form-container");
  const button = document.createElement("button");
  button.id = id;
  button.textContent = text;
  formContainer.appendChild(button);
  return button;
}

export function renderBook(book) {
  const bookContainer = document.querySelector(".book-container");
  const bookInfo = document.createElement("p");
  bookInfo.className = "book";
  bookInfo.textContent = book.info;
  bookContainer.appendChild(bookInfo);
}

export function getBookFromForm() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const read = document.getElementById("read").checked;
  return new Book(title, author, parseInt(pages), read);
}