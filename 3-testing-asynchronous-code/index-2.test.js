//If your code uses promises, there is a more straightforward way to handle asynchronous tests. Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

function fetchDataPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('sam really loves football');
        }, 100);
    })
}
//Be sure to return the promise - if you omit this return statement, your test will complete before the promise returned from fetchData resolves
test('the data is peanut butter', () => {
    return fetchDataPromise().then(data => {
        expect(data).toBe('sam really loves football');
    });
});

function fetchDataPromiseWithErrorMessage(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('error');
        }, 100);
    })
}
//If you expect a promise to be rejected, use the .catch method. Make sure to add expect.assertions to verify that a certain number of assertions are called. Otherwise a fulfilled promise would not fail the test.
test('the fetch fails with an error', ()=> {
	expect.assertions(1);
	return fetchDataPromiseWithErrorMessage().catch(e => expect(e).toMatch('error'));
});
