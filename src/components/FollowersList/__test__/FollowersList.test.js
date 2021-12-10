import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

const MockFollowerList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FolowerList", () => {

    beforeEach(() => {
        console.log("RAN before test");
    })

    beforeAll(() =>{
        console.log("RAN one before all test")
    })
    afterEach(() => {
        console.log("RAN after test")
    })
    afterAll(() =>{
        console.log("RAN one after all test")
    })
    it('should render follower item' , async () => {
        render(<MockFollowerList />)
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    });

    // it('should render multiple follower items', async () => {
    //     render(<MockFollowerList />);
    //     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    //     expect(followerDivElements.length).toBe(5);
    // })

  
});
