//1.Why are closures useful in JavaScript? Give an example use case.
// closure allows inner function has access to the outer function's variable.
// it is useful because it can help to protect private variables which cannot be accessed from outer function scope.
function add(init){
    let number = init
    return function(){
        return ++number
    }
}
const count = add(4)
console.log(count()) //5
console.log(count()) //6

//2.When should you choose to use “let” or “const”
//let: if you want to reassign the variable later
//const: if you dont want to reassign the variable later. it is good for constant


//3.Give an example of a common mistake related to hoisting and explain how to fix it.
// hoist means variable and function declarations are move to the top of the scrope
//we fix it by moving declaration to the top of the scrope
//fix: common mistake is to use a variable before it is decleared. to fix it, use let or const instead
let x = 1
console.log(x) //referernce error: cannot access 'x' before initializaiton
// let x = 1


//4.What will the outcome of each console.log() be after the function calls? Why?
const arr = [1, 2];
function foo1(arg) {
  arg.push(3);
}
foo1(arr);
console.log(arr); // [1,2,3], foo1 take [1,2] as input, then the push() method add 3 into arr. the result will be [1,2,3]

function foo2(arg) {
    arg = [1, 2, 3, 4];
  }
  foo2(arr);//[1,2,3,4], foo2 takes[1,2] as input, and reassign it to [1,2,3,4] inside the function 
  console.log(arr); //it didn't change the arr outside foo2, so the console return [1,2,3]

  function foo3(arg) {
    let b = arg;
    b.push(3);
  }
  foo3(arr); // b is a reference to the same address where arr is, when we modify the b, arr is modified too
  console.log(arr);//[1,2,3,3]
  
  function foo4(arg) {
    let b = arg;
    b = [1, 2, 3, 4];
  }
  foo4(arr);
  console.log(arr);//resign inside the function will not affect the outside scope, so arr is [1,2,3,3]