function Book(title, author, year, status = false) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.status = status;
}
function addBookToLibrary(book, library) {
  book = {
    title: book.title,
    author: book.author,
    year: book.year,
    status: book.status,
  };
  library.push(book);
}
function bookStatus(book) {
  return book.status === true ? 'Read Already' : 'Not yet';
}
function changeStatus(index, library) {
  library[index].status = !library[index].status;
}
function displayBooks(library) {
  const books = document.getElementById('books_body');
  books.innerHTML = '';
  library.forEach((book, index) => {
    const tr = document.createElement('tr');
    books.appendChild(tr);

    tr.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td><span class="display_status">${bookStatus(book)}</span><br><button type="button" data-target="${index}" class="swicth-btn">Change status</button></td>
      <td><button type="button" data-target="${index}" class="remove-btn">remove</button></td>
    `;
  });

  // WHEN EACH REMOVE BUTTON IS CLICKED
  const rmBtns = document.querySelectorAll('.remove-btn');
  rmBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      library.splice(e.target.getAttribute('data-target'), 1);
      displayBooks(library);
    });
  });

  // WHEN EACH SWICTH BUTTON IS CLICKED
  const swBtns = document.querySelectorAll('.swicth-btn');
  swBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      changeStatus(e.target.getAttribute('data-target'), library);
      displayBooks(library);
    });
  });
}

export {
  Book, addBookToLibrary, displayBooks,
};
