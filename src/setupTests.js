console.log('setupTests', 'per test file');

beforeAll(() => {
    console.log('setupTests', 'beforeAll')
});
afterAll(() => {
    // jest.restoreAllMocks();
    console.log('setupTests', 'afterAll')
});

beforeEach(() => {
    console.log('setupTests', 'beforeEach')
});
afterEach(() => {
    // jest.restoreAllMocks();
    console.log('setupTests', 'afterEach')
});
