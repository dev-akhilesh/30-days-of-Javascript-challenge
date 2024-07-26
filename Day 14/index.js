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



// Activity 2: Class Inheritance
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
    }
    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}
const student1 = new Student('Akhilesh', 24, 'S12345');
console.log(student1.getStudentId()); // Output: S12345

console.log(student1.greeting()); // Output: Hello, my name is Jane Doe, I am 20 years old, and my student ID is S12345.


