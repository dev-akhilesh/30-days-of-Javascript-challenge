const person = {
    name:'Akhilesh',
    age: 24,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

module.exports = person;
