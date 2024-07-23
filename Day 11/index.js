// Activity 1: Understanding Promises
const resolveAfter2Seconds = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved after 2 seconds');
        }, 2000);
    });
};

resolveAfter2Seconds().then((message) => {
    console.log(message);
});


const rejectAfter2Seconds = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Promise rejected after 2 seconds');
        }, 2000);
    });
};

rejectAfter2Seconds().catch((error) => {
    console.error(error);
});



// Activity 2: Chaining Promises
const fetchData = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fetched ${data}`);
        }, 1000);
    });
};

fetchData('data 1')
    .then((message) => {
        console.log(message);
        return fetchData('data 2');
    })
    .then((message) => {
        console.log(message);
        return fetchData('data 3');
    })
    .then((message) => {
        console.log(message);
    });


const waitForPromise = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved');
        }, 2000);
    });

    const result = await promise;
    console.log(result);
};

waitForPromise();







