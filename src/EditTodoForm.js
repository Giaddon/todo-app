import React, { useState } from "react";

function EditTodoForm({ edit, id, task }) {
  const [formData, setFormData] = useState({
   task: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    edit(id, formData.task);
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
      <label htmlFor="edit-task">Edit Task:</label>
      <input onChange={handleChange} id="edit-task" name="task" type="text" placeholder={task} ></input>
      <button type="submit">Submit!</button>
    </form>
  )

}

export default EditTodoForm;