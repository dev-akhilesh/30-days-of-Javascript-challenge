// Activity 1: Class Definition
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

const person1 = new Person('Alkhilesh', 24);
console.log(person1.greeting());
person1.updateAge(26);














