const qio = require('q-io/http');

const url1 = 'http://localhost:7000/';
const url2 = 'http://localhost:7001/';

const fetchedPromise1 = qio.read(url1);

fetchedPromise1.then((id) => {
    const fetchedPromise2 = qio.read(`${url2}/${id}`);

    fetchedPromise2.then((res) => {
        console.log(JSON.parse(res));
    });
}).catch(console.error);
