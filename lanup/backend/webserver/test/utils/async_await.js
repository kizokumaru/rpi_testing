/* Pila de funciones*/
function myFirst() {
  console.log("Hello");
}

function mySecond() {
  console.log("Goodbye");
}

myFirst();
mySecond();

/* Callbacks */
function myDisplayer(some) {
  
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);


/* Promises */
// Siempre una promesa tiene una funcion callback con 2 parametros que son funcion tratamiento ok y fucntion tratamiento ko.
let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You Promises!!"); }, 3000);
});

myPromise.then(function(value) {
  console.log(value);
});

/* Asynchronous JavaScript */

function myFunction() {
  myDisplayer("I love You !!");
  let d = new Date();
  myDisplayer(
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds());
}
/*setInterval(myFunction, 1000);*/

/*Async _ Await*/
async function myFunction2() {
  return "Hello Async";
}
myFunction2().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);