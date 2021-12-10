import Header from '../Header';
import { render, screen } from '@testing-library/react';

it('renders learn react link', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my hEader/i);
    expect(headingElement).toBeInTheDocument();
});

it('render learn react link',  async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
})

it('render learn react link', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByTestId('header-1');
    expect(headingElement).toBeInTheDocument();
})

// Find by
it('render learn react link', async () => {
    render(<Header title="My Header" />);
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
})

// Query by
it('render learn react link', async () => {
    render(<Header title="My Header" />);
    const headingElement = await screen.queryByText(/dog/i);
    expect(headingElement).not.toBeInTheDocument();
})