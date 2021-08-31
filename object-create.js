// using object literal or esay way of declaring object

const student = { name: 'Nahid', age: 24, job: 'web Developer' };

// constructor object
const person = new Object();

//const human = Object.create(null);
const human = Object.create(student);

//sentech tical sugar
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('shakib', 12)
console.log(peop);
