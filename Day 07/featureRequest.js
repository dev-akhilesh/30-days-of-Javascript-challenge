// Book Object Script: Creating a book object, adding methods, and logging properties and method results
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getTitleAndAuthor: function () {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function (newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function () {
        return `${this.title} - (${this.year})`;
    }
};

console.log(book);
console.log(book.getTitleAndAuthor());
book.updateYear(2023);
console.log(book);
console.log(book.getTitleAndYear());



// Library Object Script: Defining a library object containing an array of book objects and logging the library's details
let library = {
    name: "City Library",
    books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "Moby Dick", author: "Herman Melville", year: 1851 }
    ]
};

console.log(library);
console.log("Library Name:", library.name);
library.books.forEach(book => {
    console.log("Book Title:", book.title, ", Year:", book.year);
});



// Object Iteration Script: Demonstrating iterating over an object's properties using for...in loop and Object.keys/Object.values
let book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getTitleAndAuthor: function () {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function (newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function () {
        return `${this.title} (${this.year})`;
    }
};

for (let prop in book1) {
    console.log(`${prop}: ${book1[prop]}`);
}

console.log("Keys:", Object.keys(book1));
console.log("Values:", Object.values(book1));





