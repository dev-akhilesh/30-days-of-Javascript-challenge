// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2 - second timeout and log the message to the console
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


// Task 2: Create a promise that rejects with an error message after a 2 - second timeout and handle the error using.catch().
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
// Task 3: Create a sequence of promises that simulate fetching data from a server.Chain the promises to log messages in a specific order.
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



// Activity 3: Using Async / Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
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


// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const handleRejectedPromise = async () => {
    const promise = new Promise((_, reject) => {
        setTimeout(() => {
            reject('Promise rejected');
        }, 2000);
    });

    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

handleRejectedPromise();



// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchDataAsync = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

fetchDataAsync();



// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 3000));

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved']
});


// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promiseA = new Promise((resolve) => setTimeout(() => resolve('Promise A resolved'), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve('Promise B resolved'), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve('Promise C resolved'), 3000));

Promise.race([promiseA, promiseB, promiseC]).then((value) => {
    console.log(value); // 'Promise A resolved'
});



