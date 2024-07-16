//1.What is the difference between instance methods and static methods?
//instantce methods require an object of its class be created before call the methods
//static method are just methods we can use directly, without creating an instance

//2.How does Javascript handle concurrency?
// callbacks, promises and asynchrounous can help to run tasks concurrently

//3.What is async/await? How does it differ from using the promise instance methods?
//async/await syntactic sugar working with promises.
//it makes code more simple. they are different in error handling. async/await can use try/catch while
//promise uses catch.

//4.Can you use await outside of an async function?
//no, you can not use await without async function, because it is paired with async keyword

//5.What is callback hell and why is it considered a problem?
//callback hell means the callbacks are nested within other callbacks.
//it makes code hard to read and maintain. this usually happens when asynchronous operations
//are handled using call backs.
//to solve this kind of problem, we can use break down large functions into smaller functions to manage complexity. 