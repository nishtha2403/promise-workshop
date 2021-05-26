function alwaysThrows() {
    throw "OH NOES";
}

function iterate(arg){
    console.log(arg);
    return arg+1;
}

let promise = Promise.resolve(1);

promise.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(console.log);