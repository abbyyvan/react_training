//1. what are the data types in Javascript
//primitive data types: Number, String, Boolean, Null, Undefined, Symbol
//compund data types: Array, Object

//2. what is hoisting in Javascript
//Hoist is a Javascript concept that refers to the process of moving declareation
//to the top of their scope. so that variables and functions can be used before they are declared
//function is fully hoisted 
//var can be hoisted but it will return undefined.
//const and let cannot be hosted. it will throw a typeError


//3. difference between null and undefined
//null is an assignment value, which is an emptu value
//undfined is a variable has been decleared but not assigned a value

//4. purpose of the 'this' keyword
// the 'this' keyword refers to the object thay is executing the current function.
//it allows access to onkect properties and methods within the context of that oject

//5. the difference between === and ==
//=== strict equality, which will not convert type, (1 === '1', return false)
//== will compare after type convertion (1 == '1' return true)

//6. what is the difference between 'var' and 'let' keywords?
// var declares a global variable, it can be accessed from anywhere in the code
// let declares a local variable, it can only be accessed within the block of code where it is declared
function compareVarLet(){
    var varVariable = 'i am a var variable'
    let letVariable = 'i am a let variable'
    if (true){
        var varVariable = 'i am a new var variable'
        let letVariable = 'i am a new let variable'
        console.log(varVariable)//'i am a new var variable'
        console.log(letVariable)//'i am a new let variable'
    }
    console.log(varVariable)//'i am a new var variable'
    console.log(letVariable)//'i am a let variable'
}
compareVarLet()

//7. what is a closure?
//closures are function that jave access to variables from an outer function even after the outer function has finished executing.
//Encaosulation: protect private variables and data
//state maintenance
//functional programing
//asynchronous programming
//function factories: create functions with specific behaviors
function outer() {
    var outerVar = 'hello'
    function inner(){
        console.log(outerVar)
    }
    return inner
}
var closureFn = outer()
closureFn() //hello

//what is event delegation
//event delegation is a technique where you attach a single event listener to a parent element,
//and that event listener handles events occurring on its child elements.
//it helps optimize performance and reduce memory consumption
{/* <ul id='list'>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
</ul> */}
// document.getElementById('list').addEventListener(
//     "click", function(event) {
//         if (event.target.nodeName === 'LI') {
//             console.log(event.target.textContent)
//         }
//     }
// )

//difference between 'let', 'const' and 'var'
// let and const were introduced in ES6 and have block scope. 
// let is reassginable, and const is non-reassignable
// var is function-scoped and can be redeclared and reassigned throughout the function