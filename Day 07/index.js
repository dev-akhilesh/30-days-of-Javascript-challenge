// Activity 1: Object Creation and Access

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
console.log(book);

console.log("Title:", book.title);
console.log("Author:", book.author);



// Activity 2: Object Methods
book.getTitleAndAuthor = function () {
    return `${book.title} - ${book.author}`;
}
console.log(book.getTitleAndAuthor());

book.updateYear = function (year) {
    this.year = year;
};
book.updateYear(2004);
console.log(book);



// Activity 3: Nested Objects
let library = {
    name: "City Library",
    books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "Moby Dick", author: "Herman Melville", year: 1851 }
    ]
};
console.log(library);

console.log(library.name);
library.books.forEach(book => console.log("Book Title", book.title));



// Activity 4: The this Keyword
book.getTitleAndYear = function () {
    return `${this.title} (${this.year})`;
};
console.log(book.getTitleAndYear());



// Activity 5: Object Iteration
for (let key in book) {
    console.log(`${key} : ${book[key]}`);
}

// Logging all the keys of the book object
console.log("Keys:", Object.keys(book));

// Logging all the values of the book object
console.log("Values:", Object.values(book));





