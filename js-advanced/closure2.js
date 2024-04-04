

var counter = (function counter(){
    var privateCounter = 10;

    function changeBy(val){
        privateCounter +=val;
    }
    return {
        value: function(){
            return privateCounter;
        },
        increment: function(){
            changeBy(1);
        },
        decrement: function(){
            changeBy(-1);
        }
    }
})();

console.log(counter.value());
console.log(counter.increment());
console.log(counter.value());
console.log(counter.decrement());
console.log(counter.value());
// counter().value;