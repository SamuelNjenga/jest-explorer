// Applies to all tests in this file
//By default, the before and after blocks apply to every test in a file. You can also group tests together using a describe block. When they are inside a describe block, the before and after blocks only apply to the tests within that describe block.
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

function isCity(name) {
    return cities.includes(name);
}

beforeEach(() => {
    return initializeCityDatabase();
});

test('city database has Ona Softwares', () => {
    expect(isCity('Ona Softwares')).toBeTruthy();
});

function initializeFoodDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cities.push('Chicken');
            cities.push('Chapati');
            resolve();
        }, 100);
    });
}

function isValidCityFoodPair(name) {
    return cities.includes(name);
}
describe('foods purchased in the menu', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
        return initializeFoodDatabase();
    });

    test('Entire menu on board', () => {
        expect(isValidCityFoodPair('Chapati', 'Chicken')).toBe(true);
    })
});
//Top-level beforeEach is executed before the beforeEach inside the describe block