

import React, { Component,useEffect, useState } from 'react'
import TodoList from './components/todos'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo:'',
      todos:[]
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }


// export default function App() {
//   const [newTodo, setNewTodo] = useState('')
//   const [todos, setTodos]= useState([
//     {title:"first todo", id:'1'},
//     {title:"second todo", id:'2'},
//     {title:"third todo", id:'3'},
//   ])

  // useEffect(() => {
  //   fetch('http://localhost:3000/todos')
  //     .then(res => res.json())
  //     .then(data => setTodos(data))
      
      
  // }, [])

  componentDidMount(){
    const {newTodo, todos} = this.state
    fetch(`http://localhost:3000/todos`)
      .then(res => res.json())
      .then(data => this.setState({todos:data}))
  }

  handleAdd = () => {
    // const newId = JSON.stringify(todos.length+1)
    // setTodos([...todos, {title:newTodo, id: newId}])
      const {newTodo, todos} = this.state
      fetch(`http://localhost:3000/todos`,{
        method: 'POST',
        headers: {
          'content-Type':'application/json',
        },
        body:JSON.stringify({title:newTodo})
      })
      .then(res => res.json())
      .then(data => this.setState({todos:[...todos, data], newTodo:''}))
    // setNewTodo('')
  
  }

  deleteTodo = (id) => {
    // setTodos(todos.filter(todo => todo.id !== id))
    const {todos}= this.state
    fetch(`http://localhost:3000/todos/${id}`,{
      method:'DELETE',
    })
    .then(console.log('in deleteTodo'))
    //.then(() => setTodos(todos.filter(todo => todo.id !== id)))
    // .then(data => this.setState(todos.filter(todo => todo.id !== id)))
    // setTodos(todos.filter(todo => todo.id !== id))
    this.componentDidMount()
  }

  editTodo = (id, newTodo) => {
    const {todos} = this.state
    //setTodos(todos.map(todo => (todo.id === id ? {...todo, title:newTodo} : todo)))
    fetch(`http://localhost:3000/todos/${id}`,{
      method:'PATCH',
      headers: {
        'content-Type':'application/json',
      },
      body:JSON.stringify({title:newTodo})
    })
    //.then(() => setTodos(todos.map(todo => (todo.id === id ? {...todo, title:newTodo} : todo))))
    .then(()=>this.setState(todos.map(todo => (todo.id === id ? {...todo, title:newTodo} : todo))))
    console.log(todos)
    this.componentDidMount()
  
  }
  render(){
    const {newTodo,todos} = this.state
    console.log(this.state)
    return (
      <div>
        <h1>Todo List</h1>
        <input type="text" placeholder='add new todo here..' value={newTodo} 
          onChange={(e)=> this.setState({newTodo:e.target.value})}/>
        <button onClick={this.handleAdd}>Add</button>
        <TodoList todos={todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} componentDidMount={this.componentDidMount}></TodoList>
      </div>
    )

  }
  
}
