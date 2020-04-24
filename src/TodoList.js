import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const INITIAL_STATE = [];
  const [todos, setTodos] = useState(INITIAL_STATE);
  
  // Remove box function
  function removeTodo(id){
    setTodos(
      todos => todos.filter(todo => todo.id !== id)
    )
  }

  function addTodo(newTodo){
    newTodo.id = uuidv4(); 
    setTodos(todos => [...todos, newTodo]);
  }

  function editTodo(id, task) {
    for (let todo of todos) {
      if (todo.id === id) todo.task = task;
    }
    
    setTodos(todos => [...todos]);
  }

  return (
    <div>
      {todos.map(t =>( 
        <Todo 
          task={t.task}
          remove={removeTodo}
          id={t.id}
          key={t.id}
          edit={editTodo} 
        />
      ))}
      <NewTodoForm addTodo={addTodo} />
    </div>
  )
}

export default TodoList;
