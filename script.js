import {Library} from "./Library.js"
import { createBookForm, removeBookForm, createButton, getBookFromForm, renderBook } from "./display.js";

const myLibrary = new Library();
const newBook = document.querySelector(".newbook");

newBook.addEventListener("click", () => {
  createBookForm();
  const submit = createButton("submit", "submit");
  submit.addEventListener("click", () => {
    const book = getBookFromForm();
    myLibrary.list = book;
    renderBook(book);
    removeBookForm();
  });
});

