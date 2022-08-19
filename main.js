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
  const bookIndex = myLibrary.push(book) - 1;
  return bookIndex;
}

function addLibraryToShelf() {
  myLibrary.forEach((book) => {
    addBookToShelf(book);
  });
}

function addBookToShelf(book) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  bookCard.dataset.bookIndex = book.bookIndex;

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
  const bookRead = document.createElement('div');
  bookRead.textContent = book.read ? 'Has been read' : 'Not read';
  bookCard.appendChild(bookRead);
  const removeBook = document.createElement('div');
  removeBook.classList.add('remove-button');
  removeBook.textContent = 'Remove';
  bookCard.appendChild(removeBook);

  bookShelf.appendChild(bookCard);
}

function resetForm() {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '1';
  readInput.checked = false;
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
  let bookIndex = addBookToLibrary(theHobbit);
  theHobbit.bookIndex = bookIndex;

  const theGunslinger = new Book('The Gunslinger', 'Stephen King', 190, true);
  bookIndex = addBookToLibrary(theGunslinger);
  theGunslinger.bookIndex = bookIndex;

  const braveNewWorld = new Book('Brave New World', 'Aldous Huxley', 311, true);
  bookIndex = addBookToLibrary(braveNewWorld);
  braveNewWorld.bookIndex = bookIndex;

  const nineteenEightyFour = new Book('1984', 'George Orwell', 328, true);
  bookIndex = addBookToLibrary(nineteenEightyFour);
  nineteenEightyFour.bookIndex = bookIndex;

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
}

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
  const bookIndex = addBookToLibrary(newBook);
  newBook.bookIndex = bookIndex;
  addBookToShelf(newBook);
  console.log(newBook);
  toggleModal();
});

const removeButtons = document.querySelectorAll('.remove-button');
removeButtons.forEach((button) => {
  button.addEventListener('click', removeBook);
});
