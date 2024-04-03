class Person{
    constructor(name, age){
        // super();
        this.name = name;
        this.age = age;
    }

    toString(){
        return `${this.name} : ${this.age}`
    }
}

let person = new Person("Ravi", 34);
console.log(person);

console.log(person.toString())

let p1 = {name: 'Priya', age: 34, toString: function (){
    return `${this.name} : ${this.age}`
}}
console.log(p1);
console.log(p1.toString())