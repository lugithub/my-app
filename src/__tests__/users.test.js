import axios from 'axios';
import Users from '../users';

jest.mock('axios');

describe('Users', () => {
    const user = {name: 'Bob'};

    const myMockFn = jest
        .fn()
        .mockReturnValueOnce('default')
        .mockImplementationOnce(scalar => 42 + scalar)
        .mockName('add42');

    it('should fetch a user', () => {      

        console.log(myMockFn());
        expect(myMockFn(111)).toBe(153);

        //axios.get.mockResolvedValueOnce({data: user});
        // axios.get.mockImplementationOnce(() => Promise.resolve({
        //     data: user
        // }));
        axios.get = jest.fn(() => Promise.resolve({
                data: user
            }));
        expect.assertions(3);

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
