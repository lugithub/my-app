import axios from 'axios';
import Users from '../users';

//automatically mock a module
jest.mock('axios');

describe('Users', () => {
    const user = {name: 'Bob'};

    const myMockFn = jest
        .fn()
        .mockReturnValueOnce('default')
        .mockImplementationOnce(scalar => 42 + scalar)
        .mockName('add42');

    it('should fetch a user', () => {      
        // axios.get.mockResolvedValueOnce({data: user});

        // this will affect the next test too, unless jest "resetMocks": true
        axios.get.mockResolvedValue({data: user});

        expect.assertions(2);

        return Users.getone(100).then(usera => {
            expect(axios.get.mock.calls[0][0]).toEqual('/users/100');
            expect(usera).toBe(user);
        });
    });

    it('should fetch users', () => {
        axios.get.mockResolvedValueOnce({data: [user]});
        expect.assertions(1);
        return Users.all().then(users =>
            expect(users).toEqual([user]));
    });    
});
