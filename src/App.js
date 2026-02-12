import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { useEffect, useState } from 'react';
import AddTodo from './MyComponents/AddTodo';
import {
BrowserRouter as Router,
Routes,
Route,
Link
} from 'react-router-dom';
import About from './MyComponents/About';

function App() {

let initTodo = (localStorage.getItem("todos") === null) ? [] : JSON.parse(localStorage.getItem("todos"));

const onDelete=(todo)=>{
  console.log("I am on delete todo", todo);
  // Deleting this way in react doesnt work
  // let index = todos.indexOf(todo);
  // todos.splice(index, 1)

  setTodos(todos.filter((e) =>{
    return e!==todo;
  }));
  console.log("on delete",todos);
   
}

const addTodo=(title, desc)=>{
  console.log("I am on addTodo", title, desc)
  let sno = (todos.length !== 0)? todos[todos.length - 1].sno + 1 : 1;
  const myTodo = {
    sno: sno,
    title: title,
    desc: desc
  }

  //Adding myTodo in todos array
  setTodos([...todos, myTodo]);
 
}


 const[todos, setTodos] = useState(initTodo);
 //useEffect is used so that todos not updated immediately so we are saying that after updating todos, then store todos in localStorage
  useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  return (
    <div >
    <Router>
    <Header title="My Todo List" searchBar={false}/>

    <Routes>
          <Route exact path="/" element={
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>
            }/>
       <Route exact path="/about" element={<About />} />
    </Routes>

    <Footer/>
    </Router>
    </div>
  );
}

export default App;
