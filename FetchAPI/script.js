//Our DOM
const input = document.getElementById(`input`);
const button = document.getElementById(`button`);
const createBtn = document.getElementById(`create`);
const output = document.getElementById(`output`);

button.onClick = () => read(input.value);
createBtn.onclick = () => create(input.value);

// let read = INTERFACE => {
//     //promises
//     //'then' takes two option arguments
//     //a callback for sucess
//     //a callback for failure

//     fetch(INTERFACE)
//     .then(response => {
//         if (response.status !== 200) {
//             console.error(`status: ${response.status}`); 
//             return;
//         } else {
//             response.json()
//             .then(data => {
//                 output.innerHTML = JSON.stringify(data);
//             })
//         }

//     }).catch (err => {
//         console.error(err);
//     });

// }

// let read = INTERFACE => {
//     axios 
//         .get(INTERFACE)
//         .then(response => {
//             output.innerHTML = JSON.stringify(response.data);
//         }).catch(err => {
//             console.error(err);
//         });
// }

// https://reqres.in/api/users

// let create = URL => {

//     axios 
//         .post(URL, {
//             first_name : "Kathy",
//             email: "kathy@gmail.com"
//         })
//         .then (response => {
//             output.innerHTML = JSON.stringify(response);
//         }).catch(err => {
//             console.error(err);
//         });
// }


// Task 10 

fetch('https://reqres.in/api/users?page=2')
     .then((response) => {
         if (response.status !== 200) {
             console.log(response.status);
             return;
         }
     response.json()
     .then(data => console.log(data));         
     })
     .catch(err => console.error(`Fetch Error :-S ${err}`));
