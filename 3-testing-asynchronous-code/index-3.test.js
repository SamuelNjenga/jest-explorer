function fetchDataPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('sam really loves football');
        }, 100);
    })
};

//You can also use the .resolves matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.
//Be sure to return the assertion—if you omit this return statement, your test will complete before the promise returned from fetchData is resolved and then() has a chance to execute the callback.
test('sam is a football fan', () => {
    return expect(fetchDataPromise()).resolves.toBe('sam really loves football');
});


function fetchDataPromiseWithErrorMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, 100);
    })
}

//If you expect a promise to be rejected, use the .rejects matcher.
test('the fetch fails with an error', () => {
    return expect(fetchDataPromiseWithErrorMessage()).rejects.toMatch('error');
});