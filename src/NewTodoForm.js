import React, { useState } from "react";

function NewTodoForm({ addTodo }) {
  const [formData, setFormData] = useState({
   task: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = {...formData};
    addTodo(newTodo);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit}  >
      <label htmlFor="task">New Task:</label>
      <input onChange={handleChange} id="task" name="task" type="text" ></input>
      <button type="submit">Submit!</button>
    </form>
  )

}

export default NewTodoForm;