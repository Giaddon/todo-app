import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

//helper function to add a new todo when we need it
function addTodo(TodoList, task="TEST") {
  const taskInput = TodoList.getByLabelText("New Task:");
  const submitButton = TodoList.queryByText("Submit!");

  fireEvent.change(taskInput, { target: { value: task} });
  fireEvent.click(submitButton);
}


//smoke test
it("renders without crashing", function () {
  render(<TodoList />);
});


//snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(< TodoList />);
  expect(asFragment()).toMatchSnapshot();
});


//adds new todo with form submission
it("adds a new todo on form submission", function () {
  const renderedTodoList = render(<TodoList />);

  addTodo(renderedTodoList);

  expect(renderedTodoList.queryByText("TEST")).toBeInTheDocument();
})


//removes todo with the removal button
it("removes todo with the removal button", function () {
  const renderedTodoList = render(<TodoList />);

  addTodo(renderedTodoList);

  expect(renderedTodoList.queryByText("TEST")).toBeInTheDocument();

  const removeButton = renderedTodoList.queryByText("X");
  fireEvent.click(removeButton);

  expect(renderedTodoList.queryByText("TEST")).not.toBeInTheDocument();
})