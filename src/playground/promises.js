//created a promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
           name: 'Vinay',
           age: 26
        });
        //reject('Something went wrong!');
    }, 3500);
});

console.log('before');

//waited for things to complete
promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('My other promise');
        }, 3500);
    });
    }).then((str) => {
    console.log('does this run?', str);
    }).catch((error) => {
    console.log('error: ', error);
    });

console.log('after');