export class Library {
  constructor() {
    this.bookList = [];
  }
  get list() {
    return this.bookList;
  }

  set list(book) {
    this.bookList.push(book);
  }
}