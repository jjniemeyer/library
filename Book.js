export class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  get info() {
    let readResponse = "not read yet";
    if (this.read) {
      readResponse = "has been read";
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readResponse}`;
  }
}
