import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i});
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: { value: task}})
        fireEvent.click(buttonElement);
    })
}

describe("Todo", () => {
   it('Should render multiple items', async () =>{
       render(
           <MockTodo />
       );
        addTask(["Sleep", "Code", "Eat"])
       const divElement = screen.getAllByTestId("task-container")
       expect(divElement.length).toBe(3);
   })

   it('Task should not have completed class when initally rendered', async () =>{
       render(
           <MockTodo />
       );
       addTask(["Sleep"])
       const divElement = screen.getByText("Sleep");
       expect(divElement).not.toHaveClass("todo-item-active")
   })
   it('Task should not have completed class when when click', async () => {
       render(
           <MockTodo />
       );
       addTask(["Sleep"])
       const divElement = screen.getByText("Sleep");
       fireEvent.click(divElement)
       expect(divElement).toHaveClass("todo-item-active")
   })
})