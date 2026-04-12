// const counterSpan = document.getElementById('counter-content');
// counterSpan.innerHTML = 100;
// // Handling DOM
// function attachEventListner() {
//     const counterSpan = document.getElementById('counter-content');
//     let counter = 0;
//     const counterButton = document.getElementById('counter-button');
//     counterButton.addEventListener('click', () => {
//         console.log("counter Value: ", counter);
//         counterSpan.innerHTML = counter++;
//     })
// }
// attachEventListner();
















// Asynchronous behavior of js.
// Does Js support parallel execution.

// js supports Concurrent execution.

let items = ["pasta", "Samosa", "pizza"];

// function checkout (callback) {
//   console.log("checkout function 😊😊");
//   callback();
// }

// function Payment (callback) {
//     console.log("Payment Function 💵💵");
//     callback();
// }

// function Notification (callback) {
//     console.log("Notification Funtion");
//     callback();
// }

// function RedirectToHome (callback) {
//     console.log("redirect to home.....");
//     callback();
// }

// Callback Hell.
// Inversion of Controll.

// checkout(() => {
//     Payment (() => {
//         Notification(() => {
//             RedirectToHome(() => {
//                 console.log("What after Redirection..");
//             });
//         })
//     })
// });

// Ideally this should happen.
// var checkoutSuccess = checkout(); // true/false
// if (checkoutSuccess) {
//     var paymentSucces = Payment(); // true/false
//     if(paymentSuccess) {
//         Notification();
//     }
// }


// Promises.

// checkout(() => {
//     Payment (() => {
//         Notification(() => {
//             RedirectToHome();
//         })
//     })
// });










window.console.log("Hello to Event Loop");

function getItems() {
    setTimeout(() => {
        items.forEach(item => {
            console.log(item);
        });
    }, 1000);
}

function addItem(item) {
    setTimeout(() => {
        items.push(item);
    }, 3000);

}

addItem("Chhole");
getItems();

// function deleteItem() {
//     items.pop();
// }

// addItem("jalebi", getItems);


// addItem("jalebi");
// addItem("jalebi");
// addItem("jalebi");
// addItem("jalebi");
// getItems();

// console.log("======================");
// addItem();
// console.log("======================");
// getItems();
// console.log("======================");
// deleteItem();
// console.log("======================");
// getItems();















// higher order function.
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     },1000*i);
// }







// IIFE -> Immediately Invoked Function Expressions
// used for invoking a function only once.

// (function () {
//     console.log("Hi I am the IIFE..");
// })();

// const IIFE = () => "Hello world";
// console.log(IIFE());








// Automatic Semi-colon insertion. (ASI)
// function Hello() {
//     return
//     {
//         username: "Depender",
//         class: "Some random class"
//     }
// }

// let output = Hello();
// console.log(output);


