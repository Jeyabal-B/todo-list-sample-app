import { useState } from "react";
import "./styles.css";
//import "./FormComponent";
import { FormComponent } from "./FormComponent";
import { TodoList } from "./TodoList";

function App() {

  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos(currentTodos => {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), title, completed:false }
        ]
    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    }) 
  }

  return (
    <>
      <FormComponent onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} />
    </>
  );
}

export default App;