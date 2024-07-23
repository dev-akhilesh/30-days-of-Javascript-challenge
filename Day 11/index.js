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



// Activity 3: Using Async / Await
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
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


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




