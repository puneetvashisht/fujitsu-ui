console.log('hello js!')

// Loosely typed language, primitives (number, string and boolean)
var x = '34';
console.log(typeof(x));

function foo(){
    console.log('foo funtion..')
}
foo();

function add(x, y){
    return x + y;
}
console.log(add(3,4))
console.log(add('3',4))
console.log(add())

var arr = [1,3,5,7,9]
console.log(arr[4])

arr.push(11)
console.log(arr);

var weekdays = ['Mon', 'Tue', 'Wed', 4, 5]
console.log(weekdays);