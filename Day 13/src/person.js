const person = {
    name: 'John Doe',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

export default person;