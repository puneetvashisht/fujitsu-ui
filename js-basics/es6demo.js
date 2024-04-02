function test(){
    var a = [1,2,3,4]

    for (let i = 0; i < a.length; i++) {
        let x = a[i]
        console.log(x);
    }
    // if( true){
    //     let z
    // }
    
    console.log('After block')
    console.log(a);
    console.log(i);
    console.log(x);
}

let e = {id: 1, name: 'Ravi', salary: 34343};
let e2 = {id: 12, name: 'Rahul', salary: 44343};
let employees = [e, e2, {id: 2, name: "Priya", salary: 34344}]

employees.forEach(function(e) {console.log(e)});
employees.forEach(e => console.log(e));

let employeeNameStartingWithR = employees.filter(e => e.name.startsWith('R'));
console.log(employeeNameStartingWithR);

let odds = [1,3,5]
let evens = odds.map(_=> _+1)
console.log(evens);
// function add(x, y, z){
//     return x + y + z;
// }

function add(){
    console.log(arguments);
    // return x + y
    let total = 0
    for(let i=0; i<arguments.length; i++){
        total+= arguments[i];
    }
    // arguments.forEach(v=> total +=v)
    return total
}

console.log(add(2,3,2,6,7,7));

function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9



// employees.push({id:44, name:'Amit', salary: 34343})
let newEmployees = [...employees, {id:44, name:'Amit', salary: 34343}]

console.log(employees);
console.log(newEmployees);

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

var str = `Hello ${customer.name}`

console.log(message);
console.log(typeof(message))