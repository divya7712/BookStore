 b // Get references to HTML elements
const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

// Array to store book records
let books = [];

// Function to add a book record
function addBook(name, price, author) {
    books.push({ name, price, author });
    displayBooks();
}

// Function to display book records
function displayBooks() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <span>${book.name}</span>
            <span>${book.price}</span>
            <span>${book.author}</span>
            <button onclick="editBook(${index} class="btn btn-warning mx-2">Edit</button>
            <button onclick="deleteBook(${index})" class="btn btn-danger mx-2">Delete</button>
        `;
        bookList.appendChild(bookItem);
    });
}

// Function to edit a book record
function editBook(index) {
    const newName = prompt('Enter new name:');
    const newPrice = prompt('Enter new price:');
    const newAuthor = prompt('Enter new author:');
    if (newName && newPrice && newAuthor) {
        books[index] = { name: newName, price: newPrice, author: newAuthor };
        displayBooks();
    }
}

// Function to delete a book record
function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}

// Event listener for form submission
bookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const author = document.getElementById('author').value;
    if (name && price && author) {
        addBook(name, price, author);
        bookForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Initial display of books
displayBooks();
