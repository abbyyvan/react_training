//1.Explain what is prototype and what is prototype chain in your own words
//prototype is an object which other object can inherit its properties and methods
//prototype chain is when you look for properties and methods, if it cannot find 
//them in the current object you are looking through, it will look at object's prototype
//if not found, it will keep looking into the upper level prototype until the end of
//prototype chain.

//2.Implement your versions of the following Array methods (choose 6).
//map, filter, reduce, every, find, includes, join, pop, push, reverse, slice, sort
Array.prototype.myMap = function (callbackFn) {
    if (typeof callbackFn !== 'function'){
        thorw `${callbackFn} is not a function`
    }
    let tempArr = []
    for ( let i  = 0; i < this.length; i++) {
        tempArr.push(callbackFn(this[i], i, this))
    }
    return tempArr
}


Array.prototype.myFilter = function(callbackFn) {
    if (typeof callbackFn !== 'function'){
        thorw `${callbackFn} is not a function`
    }
    let tempArr = []
    for ( let i  = 0; i < this.length; i++) {
        if(callbackFn(this[i], i, this)){
            tempArr.push(this[i])
        }
    }
    return tempArr
}

Array.prototype.myReduce = function(callbackFn, initialValue){
    if (typeof callbackFn !== 'function'){
        thorw `${callbackFn} is not a function`
    }
    let tempArr = []
    if (initialValue === undefined && this.length === 0){
        try {
            throw new TypeError('no elements and initialValue is not provided.')
        } catch (e) {
            console.log(e instanceof TypeError)
        }
    }
    let i = 0
    if (initialValue === undefined) {
        initialValue = this[0]
        i = 1
    }
    let accumulator = initialValue
    for (i; i < this.length; i++) {
        accumulator = callbackFn(accumulator, this[i],i)
    }
    return accumulator
}

Array.prototype.myEvery = function(callbackFn){
    if (typeof callbackFn !== 'function'){
        thorw `${callbackFn} is not a function`
    }
    for(let i = 0; i < this.length; i++) {
        if(!callbackFn(this[i],i)) {
            return false
        }
    }
    return true
}

Array.prototype.myFound = function(callbackFn){
    if (typeof callbackFn !== 'function'){
        thorw `${callbackFn} is not a function`
    }
    for(let i = 0; i < this.length; i++) {
        if(callbackFn(this[i],i)) {
            let result = this[i]
            return result
        }
    }
    return
}

Array.prototype.myIncludes = function(searchElement, fromIdex){
    if(fromIdex === undefined) {
        fromIdex = 0
    }
    let i = 0
    if(fromIdex >= this.length){
        return false
    }
    if(fromIdex < 0 && fromIdex >=this.length * (-1)){
        i = fromIdex + arr.length
    }
    for(i; i < this.length; i++) {
        if (this[i] === searchElement){
            return true
        }
    }
    return false
}





// test
var assert = require('assert')
const { default: test } = require('node:test')

const testArr = [1,2,3,4]
const square = testArr.myMap(function(num){
    return num * num
})
console.log(square)

const greaterThanTwo = testArr.myFilter(function(num){
    return num > 2
})
console.log(greaterThanTwo)

const sumWithInitial = testArr.myReduce(
    (accumulator, currentValue) => accumulator + currentValue,
    
)
const sumWithInitial1 = testArr.myReduce(
    (accumulator, currentValue) => accumulator + currentValue,
    5
)
assert.equal(sumWithInitial,10, 'should equal to 10')
assert.equal(sumWithInitial1,15, 'should equal to 15')

console.log(sumWithInitial)
console.log(sumWithInitial1)

const isBelowThreshold = (currentValue) => currentValue < 40;
const isAboveThreshold = (currentValue) => currentValue > 40;

console.log(testArr.every(isBelowThreshold));
console.log(testArr.every(isAboveThreshold));

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);// Expected output: 12

console.log(testArr.myIncludes(2))
const pets = ['cat', 'dog', 'bat'];
console.log(pets.myIncludes('cat'));

