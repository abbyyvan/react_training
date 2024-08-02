import React, {Component, useState} from 'react'


export default class TodoList extends Component {
 //export default function TodoList(props) {
//   const [isEditing, setIsEditing] = useState(null)
//   const [currentTitle, setCurrentTitle] = useState('')

constructor(props){
  super(props)
  this.state={
    isEditing:null,
    currentTitle:''
  }
  this.handleEdit = this.handleEdit.bind(this)
  this.handleSave= this.handleSave.bind(this)
  this.handleChange= this.handleChange.bind(this)

}

  handleEdit = (id,title) => {
    const {isEditing,currentTitle} = this.state
    this.setState({isEditing:id,currentTitle:title})
    // setIsEditing(id)
    // setCurrentTitle(title)
    this.props.componentDidMount()
    
  }

  handleSave = (id) => {
    // props.editTodo(id, currentTitle)
    // setIsEditing(null)
    // setCurrentTitle('')
    const {isEditing,currentTitle} = this.state
    console.log(currentTitle)
    this.props.editTodo(id, currentTitle)
    this.setState({isEditing:null,currentTitle:''})
    this.props.componentDidMount()
    
  }

  handleChange  = (e) => {
    this.setState({currentTitle:e.target.value})
  
    this.props.componentDidMount()
  }


  render(){
    const {isEditing,currentTitle} = this.state
    return (
    
      <ul >
        {this.props.todos.map((todo) => (
          <div style={{display:'flex', gap:'10px'}} key={todo.id}>
            {isEditing === todo.id ? (
              //<input type="text" value={currentTitle} onChange={(e)=> setCurrentTitle(e.target.value)} />
              <input type="text" value={currentTitle} onChange={this.handleChange} />
            ) :
              
              <li  >{todo.title}</li>}
            
            <button  onClick={()=> this.props.deleteTodo(todo.id)}>delete</button>
            {isEditing === todo.id ? (
              <button onClick={() => this.handleSave(todo.id, todo.title)}>Save</button>)
              :
              <button onClick={() => this.handleEdit(todo.id, todo.title)}>Edit</button>
            
                
          }
          </div>
        ))}
      </ul>

  )
  }
}
