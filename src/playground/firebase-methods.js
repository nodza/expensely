// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//      const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // });

  // // Listen for child removed
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  //  // Listen for child changed
  //  database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses/-KxnK3H_gf5SS4f0AncA').remove();


// database.ref('expenses').push(
//   {
//     description: 'Blow money',
//     note: 'Do not ask',
//     amount: 20000,
//     createdAt: Date.now()
//   }
// );


// database.ref('expenses/-KxnJT_pwDg5PBIVCxQp').update({amount: 470000});

// database.ref().remove();

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.occupation} from ${val.location.city}`);
//   // console.log(val.name +  ' is a ' + val.occupation + ' from  ' + val.location.city);
// }, (e) => {
//   console.log('Failure to comply', e);
// });

// setTimeout(() => {
//   database.ref().update({age: 37});
// }, 5000);

// setTimeout(() => {
//   database.ref().update({age: 55});
// }, 5000);


// setTimeout(() => {
//   database.ref().update({age: 78});
// }, 5000);


// database.ref().once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Oops! Faliure', e)
//   });

// database.ref().set({
//   name: 'Young Kunta',
//   age: 42,
//   isDev: true,
//   location: {
//     city: 'St. Louis',
//     state: 'MO'
//   }
// }).then(() => {
//   console.log('Data saved successfully');
// }).catch((e) => {
//   console.log('Oops! Faliure', e);
// });

// database.ref()
//         .remove()
//         .then(() => {
//           console.log('Extraction complete');
//         })
//         .catch((err) => {
//           console.log('Faliure to comply', err);
//         });

// database.ref().update({
//   name: 'Jairos Jiri',
//   occupation: 'Philanthropy',
//   age: 88,
//   isDev: false
// });