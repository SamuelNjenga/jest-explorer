// __tests__/timerGame-test.js
'use strict';
//Here we enable fake timers by calling jest.useFakeTimers();
//This helps to mock out setTimeout and other timer functions with mock functions.
jest.useFakeTimers();

test('waits 2 second before ending the game', () => {
    const timerGame = require('./timerGame');
    timerGame();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});