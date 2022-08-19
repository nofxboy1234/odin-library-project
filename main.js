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

function addLibraryToShelf() {
  myLibrary.forEach((book) => {
    addBookToShelf(book);
  });
}

function addBookToShelf(book) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');

  const bookTitle = document.createElement('div');
  bookTitle.classList.add('book-card-title');
  bookTitle.textContent = book.title;
  bookCard.appendChild(bookTitle);
  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('book-card-author');
  bookAuthor.textContent = book.author;
  bookCard.appendChild(bookAuthor);
  const bookPages = document.createElement('div');
  bookPages.textContent = book.pages;
  bookCard.appendChild(bookPages);

  const bookRead = document.createElement('input');
  bookRead.type = 'checkbox';
  bookRead.checked = book.read ? true : false;
  bookCard.appendChild(bookRead);

  const removeBookButton = document.createElement('div');
  removeBookButton.classList.add('remove-button');
  removeBookButton.addEventListener('click', removeBook);
  removeBookButton.textContent = 'Remove';
  bookCard.appendChild(removeBookButton);

  bookShelf.appendChild(bookCard);
}

function resetForm() {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '1';
  readInput.checked = false;
  titleInput.focus();
}

function toggleModal() {
  modal.classList.toggle('show-modal');
  resetForm();
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

function addInitialBooks() {
  const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
  addBookToLibrary(theHobbit);

  const theGunslinger = new Book('The Gunslinger', 'Stephen King', 190, true);
  addBookToLibrary(theGunslinger);

  const braveNewWorld = new Book('Brave New World', 'Aldous Huxley', 311, true);
  addBookToLibrary(braveNewWorld);

  const nineteenEightyFour = new Book('1984', 'George Orwell', 328, true);
  addBookToLibrary(nineteenEightyFour);

  addLibraryToShelf();
}

function removeBookFromLibrary(bookCardToRemove) {
  const removeTitle =
    bookCardToRemove.querySelector('.book-card-title').textContent;
  const removeAuthor =
    bookCardToRemove.querySelector('.book-card-author').textContent;

  myLibrary.forEach((book) => {
    if (book.title === removeTitle && book.author === removeAuthor) {
      myLibrary.splice(myLibrary.indexOf(book), 1);
    }
  });
}

function removeBookFromShelf(bookCardToRemove) {
  bookShelf.removeChild(bookCardToRemove);
}

function removeBook(event) {
  const bookCardToRemove = event.target.parentElement;
  removeBookFromShelf(bookCardToRemove);
  removeBookFromLibrary(bookCardToRemove);
  console.log(myLibrary);
}

function bookExists(newBook) {
  let bookFound = false;
  myLibrary.forEach((book) => {
    if (book.title === newBook.title && book.author === newBook.author) {
      console.log('found book');
      bookFound = true;
    }
  });
  return bookFound;
}

function toggleReadStatus(book) {}

const bookShelf = document.querySelector('#book-shelf');

addInitialBooks();

const modal = document.querySelector('.modal');
const trigger = document.querySelector('.trigger');
const closeButton = document.querySelector('.close-button');

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => {
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.checked;

  if (title === '' || title === ' ') {
    alert('Please enter a title');
    return;
  }

  if (author === '' || author === ' ') {
    alert('Please enter an author');
    return;
  }

  const newBook = new Book(title, author, pages, read);
  if (!bookExists(newBook)) {
    addBookToLibrary(newBook);
    addBookToShelf(newBook);
    console.log(myLibrary);
    toggleModal();
  } else {
    alert('Book already exists in library');
  }
});

const removeButtons = document.querySelectorAll('.remove-button');
removeButtons.forEach((button) => {
  button.addEventListener('click', removeBook);
});

console.log(myLibrary);
