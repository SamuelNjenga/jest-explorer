//Mock Return Values
//Mock functions can also be used to inject test values into your code during a test:
test('mockReturnValueOnce', () => {
    const myMock = jest.fn();
    console.log(myMock()); //undefined
    myMock.mockReturnValue('x').mockReturnValueOnce(10).mockReturnValueOnce(true);
    console.log(myMock(), myMock(), myMock(), myMock(), myMock());
});

//Mock functions are also very effective in code that uses a functional continuation-passing style. Code written in this style helps avoid the need for complicated stubs that recreate the behavior of the real component they're standing in for, in favor of injecting values directly into the test right before they're used.
test("filterTest", () => {
    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12, 13, 14, 15, 16].filter(num => filterTestFn(num));

    console.log(result);
    // > [11]
    console.log(filterTestFn.mock.calls);
});