let fulfillPromise = Promise.resolve('Fulfilled !');

fulfillPromise.then(console.log);

let rejectPromise = Promise.reject(new Error('Rejected !'));

rejectPromise.catch((err) => {
    console.log(err.message);
})
