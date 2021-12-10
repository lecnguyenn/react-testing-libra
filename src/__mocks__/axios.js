
const mockResponse = { 
    data: {
        results: [
            {
                name: {
                    first: 'Nguyen',
                    last:  'Le'
                },
                picture: {
                    large: 'https://randomuser.me/api/portraits/women/29.jpg'
                },
                login: {
                    username: 'goldenfish378'
                }
            }

        ]
    }
}
export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}