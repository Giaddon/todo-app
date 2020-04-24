import React from "react";
import EditTodoForm from "./EditTodoForm"

function Todo({task, remove, id, edit}) {
  const style = {
    border: "1px solid #111",
    padding: "15px",
    marginTop: "12px",
  }
  const buttonStyle = {
    position: "relative",
    left: "40px",
  }

  const handleRemove = () => {
    remove(id);
  }

  const handleEdit = () => {
    
  }
  return (
    <div style={style}>
      <p>{task}</p>
      <button style={buttonStyle} onClick={handleRemove}>X</button>
      <button onClick={handleEdit}>Edit</button>
      <EditTodoForm id={id} task={task} edit={edit} />
    </div>
      
  )
}

export default Todo;