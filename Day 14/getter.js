class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Create an instance and log the full name using the getter
const person1 = new Person('John', 'Doe', 25);
console.log(person1.fullName); // Output: John Doe
