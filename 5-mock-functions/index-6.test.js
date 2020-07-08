//One optionally provide a name for your mock functions, which will be displayed instead of "jest.fn()" in test error output. Use this if you want to be able to quickly identify the mock function reporting an error in your test output.
test("mockName", () => {
    const myMockFn = jest
        .fn()
        .mockReturnValue("defaut")
        .mockImplementation(scalar => 42 + scalar)
        .mockName("add42");
    //expect(myMockFn).toBeCalled();
})