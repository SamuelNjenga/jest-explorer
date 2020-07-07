//In writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run
//beforeEach and afterEach can handle asynchronous code in the same ways that tests can handle asynchronous code - they can either take a done parameter or return a promise.
let cities = [];

function initializeCityDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cities.push('NodeJs Backend');
            cities.push('Sam Njenga');
            cities.push('Jest Testing');
            cities.push('Ona Softwares');
            resolve();
        }, 100);
    });
}

function clearCityDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cities = [];
            resolve();
        }, 100);
    });
}

function isCity(name) {
    return cities.includes(name);
}

//You have a method initializeCityDatabase() that must be called before each of these tests
//It returns a promise that resolved when the database was initialized
beforeEach(() => {
    return initializeCityDatabase();
});
//A method clearCityDatabase() that must be called after each of these tests
afterEach(() => {
    return clearCityDatabase();
});

test('jest is in our database', () => {
    expect(isCity('Jest Testing')).toBeTruthy();
});