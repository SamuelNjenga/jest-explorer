//In writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run
//In some cases, you only need to do setup once, at the beginning of a file.
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

//You have a method initializeCityDatabase() that must be called before all of these tests are run
//It returns a promise that resolved when the database was initialized
beforeAll(() => {
    return initializeCityDatabase();
});
//A method clearCityDatabase() that must be called after all these tests are run
afterAll(() => {
    return clearCityDatabase();
});

test('jest is in our database', () => {
    expect(isCity('Jest Testing')).toBeTruthy();
});