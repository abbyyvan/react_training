//1. What are some differences between class and functional components?
//syntax: CC is class that extends React.component。 it requires 'render' method; FC is just function that return JSX. so it doesn't need render method. the return value of the function is the JSX to be rendered
//state manager: class use this.state and this.setState; FC use useState hook
//lifecycle: CC 1.componentDidMount, componentDidUpdate, componentWillUpdate; FC, useEffect hook to handle side effect to mimic lifecycle method
//performance: CC less efficient; FC general faster and more lightweight
//this binding: CC needs to bind this to method; for FC, we don't need to worry about it. 

//2.Explain what lifecycle is in a simple way. How do you manage it in class and functional components?
//lifecycle decides when a component is created, updated and removed from DOM.


//3. Explain immutability in one sentence.
//immutabilty means that once the data is created , it cannot be modified; instead new versions are created for any changes.
