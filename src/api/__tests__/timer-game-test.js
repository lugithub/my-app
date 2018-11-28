import timerGame from '../timer-game';

beforeEach(() => {
    jest.useFakeTimers();
});

test('waits 1 second before ending the game', () => {
  
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
});

test('waits 1 second before ending the game', () => {
  
    timerGame();
  
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
});

test('calls the callback after 1 second', () => {
    const callback = jest.fn();
  
    timerGame(callback);
  
    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();
  
    // Fast-forward until all timers have been executed
    jest.runAllTimers();
  
    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
});

it('calls the callback after 1 second via advanceTimersByTime', () => {
    const callback = jest.fn();
  
    timerGame(callback);
  
    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();
  
    // Fast-forward until all timers have been executed
    jest.advanceTimersByTime(3000);
  
    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

afterEach(() => {
    jest.useRealTimers();
});
