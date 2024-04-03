console.log('starting...');

// blocking
function foo(){
    console.log('foo function...');
    return "success"
}

let result = foo();
console.log(result);

console.log('finish...');