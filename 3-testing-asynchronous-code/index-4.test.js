function fetchDataPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('sam really loves football');
        }, 100);
    })
};

function fetchDataPromiseWithErrorMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, 100);
    })
}
test('sam is a football fan', async () => {
    const data = await fetchDataPromise();
    expect(data).toBe('sam really loves football');
  });
  
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchDataPromiseWithErrorMessage();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('sam is a football fan', async () => {
    await expect(fetchDataPromise()).resolves.toBe('sam really loves football');
  });
  
  function fetchDataPromiseWithErrorMessageTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('error'));
        }, 100);
    })
}
  test('the fetch fails with an error', async () => {
    await expect(fetchDataPromiseWithErrorMessageTwo()).rejects.toThrow('error');
  });