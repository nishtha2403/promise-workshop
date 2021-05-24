const invalidJson = process.argv[2];

function parsePromised(data) {
    return new Promise((resolve,reject) => {
        try {
            resolve(JSON.parse(data));
        } catch(e) {
            reject(e.message);
        }
    })
}

parsePromised(invalidJson).catch(console.log);