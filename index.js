function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => renderBooks(data));
}

function renderBooks(books) {
  const mainElement = document.querySelector("main");
  books.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.textContent = book.name;
    mainElement.appendChild(bookElement);
  });
}

document.addEventListener("DOMContentLoaded", fetchBooks);
