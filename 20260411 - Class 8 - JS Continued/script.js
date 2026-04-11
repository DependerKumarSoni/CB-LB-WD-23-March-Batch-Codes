// function timeout () {
//     console.log("Hello");
//     setTimeout(() => {
//         console.log("Hi I am the timer.")
//     }, 1000);
//     console.log("Hello2");
// }
// timeout();






// higher order function.
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    },1000*i);
}

// setTimeout (function, time)







// Higher order function.

// function parent () {
//     var username = "Dhruv";
//     let Class = "1st year";
//     function child () {
//         console.log(username);
//     }
//     return child;
// }




// var func = parent();
// console.log("func: ", func);
// func();


// parent();




// {
//     const a = "Hello";
//     {
//         const a = "Hi"; // shadowing.
//         console.log(a);
//     }
//     console.log(a);
// }



// Differece b/w paramete and argument
// parameter: variables used in function definition
// argument: actual values passed into the function invocation.




// {
//     var a = "hi";
//     let b = "Hello";
//     const c = "Hola";
//     {
//         var d = "namaste";
//         let e = "jule";
//         const f = "hey";
//         console.log("Access from inside: ", b);
//     }
// }

// console.log(d);
// console.log(b);
// console.log(e);




// var num = 20;

// if (num % 2 == 1) { // compound statement
//     console.log("even"); // statement
//     console.log("odd"); // statement
// }

// console.log("even 2");

// for (let i = 0; i < 5; i++) console.log(i);




// var abc = 50;
// console.log(abc);
// var abc = 100;
// console.log(abc);

// let ab = 1000;

// let ab;
// ab = 10;
// console.log("ab:", ab);

// ab = 20;
// console.log("ab updated:", ab);


// const xy = 12;
// // xy = 27;






// console.log(z);
// // console.log(y); // const
// // console.log(x); // let

// var z = 30;
// let x = 10;
// const y = 20;


// console.log("x: ", x);
// console.log("y: ", y);
















// // Hoisting:

// console.log(x);

// console.log(addTwo);
// console.log(addTwo(10, 20));

// console.log(z);
// // console.log(z(50, 30));

// // variable initialization
// var x = 100;

// // Function Declaration
// function addTwo(a, b) {
//     return a + b;
// }

// // Function Expresssion
// var z = function subtract (b, a)  {
//     if (b < a) return 0;
//     return b - a;
// }


// var userName = prompt("Hi there! Please tell me your name: ");
// console.log("Hello ", userName);










// console.log("Program Start..");
// function parent () {
//     var abc = 100;

//     function child () {
//         var def = 200;

//         function c2 () {
//             var pqr = 300;
//             console.log(abc);
//             console.log(def);
//             console.log(pqr);
//         }
//         c2();
//     }
//     child();
// }
// parent();

// let, const and var
