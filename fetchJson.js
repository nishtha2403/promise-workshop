const qio = require('q-io/http');

let fetchedJSON = qio.read('http://localhost:1337/');

fetchedJSON.then((resolve) => {
    console.log(JSON.parse(resolve));
}).catch(console.error);
