function attachTitle(firstArg){
    return  `DR. ${firstArg}`;
}

let promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log);