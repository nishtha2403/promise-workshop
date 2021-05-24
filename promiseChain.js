let onFulfilled = first().then((resolve) => {
    return Promise.resolve(resolve);
}).then(second);

onFulfilled.then(console.log);