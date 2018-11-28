import sum from '../sum';

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

describe('Scoped / Nested block', () => {
  it('instances', () => {
    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
    
    const result = [11, 12].filter(filterTestFn);
    
    console.log(result);
    // > [11]
    console.log(filterTestFn.mock.calls[0]);
    console.log(filterTestFn.mock.calls[1]);
    // > [ [11], [12] ]
  });
});

