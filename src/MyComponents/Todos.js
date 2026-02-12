import React from 'react'
import TodoItem from './TodoItem'


const Todos = (props) => {

  let todosStyle ={
        minHeight:'50vh',
     
  }
 

  return (
    <div className='container' style={todosStyle}>
      <h4 className='my-3'>Todos List</h4>
      {props.todos.length===0? "No Todos to display": 
      props.todos.map((todo)=>{
        return (
          <>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr></hr>
          </>
        )
      })
    }
    </div>
  )
}

export default Todos
