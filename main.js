let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let status = this.read ? 'has been read' : 'not read yet';
    const info = `${this.title} by ${this.author}, ${this.pages} pages, ${status}`;
    return info;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addBookToShelf(book) {
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book-card');

  const bookTitle = document.createElement('div');
  bookTitle.textContent = book.title;
  bookDiv.appendChild(bookTitle);
  const bookAuthor = document.createElement('div');
  bookAuthor.textContent = book.author;
  bookDiv.appendChild(bookAuthor);

  bookShelf.appendChild(bookDiv);
}

function showLibrary() {
  myLibrary.forEach((book) => console.log(book));
}

const bookShelf = document.querySelector('#book-shelf');

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary(theHobbit);
addBookToShelf(theHobbit);

const theGunslinger = new Book('The Gunslinger', 'Stephen King', 190, true);
addBookToLibrary(theGunslinger);
addBookToShelf(theGunslinger);

// addBookToLibrary(theGunslinger);
// const braveNewWorld = new Book('Brave New World', 'Aldous Huxley', 311, true);
// addBookToLibrary(braveNewWorld);
// const nineteenEightyFour = new Book('1984', 'George Orwell', 328, true);
// addBookToLibrary(braveNewWorld);

showLibrary();
