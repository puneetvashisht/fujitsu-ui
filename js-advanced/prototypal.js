function Employee(name){
    this.name = name;
    // this.getName = function (){
    //     return name;
    // }
}

Employee.prototype.companyName = 'Fujitsu'
Employee.prototype.getName = function (){
        return this.name;
    }

// class Employee{
//     constructor(name){
//         this.name = name;
//     }
// }

let p = new Employee('Ravi');
let p2 = new Employee('Priya');
console.log(p2.getName());
console.log(p.__proto__)
console.log(Employee.prototype)
// console.log(p.companyName)
// console.log(p2.companyName);

var animal = {eats: true};
var rabbit = {jumps: true};

// rely on Object.create for object inheritance
rabbit = Object.create(animal);

console.log(Object.getPrototypeOf(rabbit) === animal)

console.log(rabbit.__proto__)

// extends from other object --- don't use __proto__
// rabbit.__proto__ = animal;

// console.log(rabbit.jumps);
console.log(rabbit.eats);

// let o = new Object();
// console.log(o.__proto__)
