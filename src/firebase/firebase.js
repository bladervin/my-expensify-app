import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
    appId: process.env.FIREBASE_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// //child_removed
// database.ref('notes').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('notes').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('notes').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('notes').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('notes')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

//setup expenses with three items (description, note, amount, createdAt)
// database.ref('notes').push({
//   description: 'hello there',
//   note: 'My note',
//   amount: 12,
//   createdAt: '123'
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'JavaScript, React, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 4500);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 7500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//       name: 'Vinay Sing',
//       age: 26,
//       stressLevel: 5,
//       job: {
//         title: 'Web developer',
//         company: 'Bing'
//       },
//       location: {
//           city: 'London',
//           country: 'England'
//       }
// }).then(() => {
//   console.log('Data is saved...');
// }).catch((e) => {
//   console.log('This failed,', e);
// })

// //change the stress level to 9, job company to amazon, location to greenford
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Greenford'
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Data has been removed');
// }).catch((e) => {
//   console.log('Did not remove data', e);
// })