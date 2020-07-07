//setup work that needs to happen before tests run, and you have some finishing work 
//that needs to happen after tests run
let cities = [];

function initializeCityDatabase() {
    cities.push('NodeJs Backend');
    cities.push('Sam Njenga');
    cities.push('Jest Testing');
    cities.push('Ona Softwares');
}

function clearCityDatabase() {
    cities = [];
}

function isCity(name) {
    return cities.includes(name);
}
//You have a method initializeCityDatabase() that must be called before each of these tests,
beforeEach(() => {
    initializeCityDatabase();
});
//A method clearCityDatabase() that must be called after each of these tests
afterEach(() => {
    clearCityDatabase();
});


test('city database has Sam Njenga', () => {
    expect(isCity('Sam Njenga')).toBeTruthy();
});

test('city database has NodeJs Backend', () => {
    expect(isCity('NodeJs Backend')).toBeTruthy();
});

test('city database has no Ona', () => {
    expect(isCity('Ona')).toBeFalsy();
});

test("has only 4 names", () => {
    expect(cities.length).toBe(4);
});