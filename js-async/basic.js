console.log('starting...');

// non-blocking using callbacks
function foo(fn){
    setTimeout(()=> {
        console.log('foo function...');
        // return "success"
        fn("success")
    }, 5000)
}

// non-blocking using promises
function foo(n){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('foo function...');
            if(n>5){
                resolve("success")
            }
            else{
                reject("failure")
            }
           
        }, 5000)
    })
    
}

// callback funtion - async scenario
// foo(res=> console.log(res))

foo(13)
.then(res => console.log(res))
.catch(err => console.log(err))

fetch('http://127.0.0.1:5500/dummy.json')
.then(res=> console.log(res))
.catch(err=> console.log(err));

// let result = foo();
// console.log(result);

console.log('finish...');