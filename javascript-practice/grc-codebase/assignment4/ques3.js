class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} issued successfully`);
        } else {
            console.log("Book already issued");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(`${this.title} returned successfully`);
    }
}

let books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Basics", "David", "102"),
    new Book("HTML Guide", "Alex", "103")
];

function showAvailableBooks() {
    console.log("Available Books:");
    books.filter(book => !book.isIssued)
         .forEach(book => console.log(book.title, book.ISBN));
}

showAvailableBooks();

let searchISBN = "102";

let selectedBook = books.find(book => book.ISBN === searchISBN);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found");
}

showAvailableBooks();

selectedBook.returnBook();