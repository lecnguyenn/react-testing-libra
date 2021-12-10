import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({numberOfIncompleteTasks})  => {
    return(
    <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={5} />
    </BrowserRouter>
    )
}

it("should render the correct amount of  in complete tasks", async () => {
    render(
        <MockTodoFooter numberOfIncompleteTasks={5} />
    );
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
})
it('should render "task" when the number of incomplete task is one', async () => {
    render(
        <MockTodoFooter  numberOfIncompleteTasks={1}/>
    );
    const paragrapElement = screen.getByTestId("para");
    expect(paragrapElement).not.toBeFalsy();
 })
