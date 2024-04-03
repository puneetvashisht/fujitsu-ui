// bar();
// var bar = function(){
//     console.log('bar')
// }

// 1. Scope Creation 
// outer [x: undef, inner: undef]
// inner [x: undef]
// 2. Execution
// outer [x: 3, inner: fn]
// inner [x: 0]
function outer(){
    console.log('outer fn..')
    var x = 3
    var inner =  function(){
        console.log('inner fn..');
        console.log(x + 2)
        var x = 0
       
    }
    return inner;
}

// var result = outer();
// result();

outer()();

for(;;){
    let z = 3;
}
console.log(z);