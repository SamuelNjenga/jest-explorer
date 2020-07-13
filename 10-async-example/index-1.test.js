// test("Should test async", () => {
//     setTimeout(() => {
//         expect(2).toBe(2);
//     }, 2000);
// });

const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0){
                reject(new Error("number shouldnt be a negative number"))
            }
            resolve(a+b);
        }, 2000);
    })
}

test("sum test", (done) => {
    add(3,2).then(sum => expect(sum).toBe(5))
    done()
})



test("should return sum of two", async () => {
    const sum = await add(40,60)
    expect(sum).toBe(100)
    expect(sum).toEqual(100)
    expect(sum).toBeGreaterThan(50)
})

// test("Should test async", (next) => {
//     setTimeout(() => {
//         expect(1).toBe(2);
//         next()
//     }, 2000);
// })