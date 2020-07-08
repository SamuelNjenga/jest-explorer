//If a test is failing, one of the first things to check should be whether the test is failing when it's the only test that runs. To run only one test with Jest, temporarily change that test command to a test.only
// test.only('this will be the only test that runs', () => {
//     expect(true).toBe(false);
// });

test('this test will not run', () => {
    expect('A').toBe('A');
});
//If you have a test that often fails when it's run as part of a larger suite, but doesn't fail when you run it alone, it's a good bet that something from a different test is interfering with this one. You can often fix this by clearing some shared state with beforeEach. If you're not sure whether some shared state is being modified, you can also try a beforeEach that logs data.