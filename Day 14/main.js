
// Activity 3: Static Methods and Properties
//  Add a static method to the Person class that returns a generic greeting message.Call this static method without creating an instance of the class and log the message.

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

    static genericGreeting() {
        return 'Hello, this is a generic greeting message.';
    }
}

console.log(Person.genericGreeting()); // Output: Hello, this is a generic greeting message.




// Add a static property to the Student class to keep track of the number of students created.Increment this property in the constructor and log the total number of students.
class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    getStudentId() {
        return this.studentId;
    }

    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    static getStudentCount() {
        return Student.studentCount;
        // console.log(`Student Count: ${Student.studentCount}`);
    }
}

// Create instances and log the total number of students
const student1 = new Student('Jane Doe', 20, 'S12345');
const student2 = new Student('John Smith', 22, 'S54321');
console.log(Student.getStudentCount()); // Output: 2
