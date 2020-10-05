// const person = {
//     name: 'Max',
//     age: 21,
//     location: {
//         city: 'London',
//         temp: 27
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature){
// console.log(`Its ${temperature} degrees in ${city}.`);
// }

// const book = {
//     title: 'Ego is the new enemy',
//     author: 'Ryan holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName);

//Array destructuring

const address = ['1099 S Park Street', 'London', 'Hayes', '123421'];

const [, city, state = 'default',] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);