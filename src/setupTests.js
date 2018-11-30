// console.log('setupTests', 'per test file');

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

beforeAll(() => {
    // console.log('setupTests', 'beforeAll')
});
afterAll(() => {
    // jest.restoreAllMocks();
    // console.log('setupTests', 'afterAll')
});

beforeEach(() => {
    // console.log('setupTests', 'beforeEach')
});
afterEach(() => {
    // jest.restoreAllMocks();
    // console.log('setupTests', 'afterEach')
});
