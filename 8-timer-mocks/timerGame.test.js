// __tests__/timerGame-test.js
'use strict';
//Here we enable fake timers by calling jest.useFakeTimers();
//This helps to mock out setTimeout and other timer functions with mock functions.
beforeAll(() => {
    jest.useFakeTimers();
})

afterEach(() => {
    jest.clearAllTimers(); //clear all of the pending timers
})
test('waits 2 second before ending the game', () => {
    const timerGame = require('./timerGame');
    timerGame();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});

// Test that asserts that the callback is called after 2 second. To do this, we're going to use Jest's timer control APIs to fast-forward time right in the middle of the test
test('calls the callback after 2 second', () => {
    const timerGame = require('./timerGame');
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

//Advance Timers By Time
//Another possibility is use jest.advanceTimersByTime(msToRun). When this API is called, all timers are advanced by msToRun milliseconds
it('calls the callback after 2 second via advanceTimersByTime', () => {
    const timerGame = require('./timerGame');
    const callback = jest.fn();
  
    timerGame(callback);
  
    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();
  
    // Fast-forward until all timers have been executed
    jest.advanceTimersByTime(2000);
  
    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });