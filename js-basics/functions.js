
var add = function(x, y){
    return x + y;
}

var sum = (x,y) => x + y;

console.log(add(2,3))


function foo(){
    console.log('foo function...')
}

function print(callback){
    callback();}
// functions can be passed as arguments
print(foo)

print(function(){
    console.log('anynonymous fun');
})
print(()=> console.log('anynonymous fun'))