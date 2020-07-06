function drinkAll(callback, flavour) {
    if (flavour !== 'octopus') {
        callback(flavour);
    }
}
//Use .toHaveBeenCalled to ensure that a mock function got called.
describe('drinkAll', () => {
    test('drinks something lemon-flavoured', () => {
        const drink = jest.fn();
        drinkAll(drink, 'lemon');
        expect(drink).toHaveBeenCalled();
    });

    test('does not drink something octopus-flavoured', () => {
        const drink = jest.fn();
        drinkAll(drink, 'octopus');
        expect(drink).not.toHaveBeenCalled();
    });
});

//If you have a mock function, you can use .toHaveReturned to test that the mock function successfully returned (i.e., did not throw an error) at least one time.
test('drinks returns', () => {
    const drink = jest.fn(() => true);

    drink();

    expect(drink).toHaveReturned();
});

//Use .toHaveReturnedTimes to ensure that a mock function returned successfully (i.e., did not throw an error) an exact number of times.
test('drink returns twice', () => {
    const drink = jest.fn(() => true);

    drink();
    drink();

    expect(drink).toHaveReturnedTimes(2);
});

//Use .toHaveReturnedWith to ensure that a mock function returned a specific value.
test('drink returns La Croix', () => {
    const beverage = {
        name: 'La Croix'
    };
    const drink = jest.fn(beverage => beverage.name);

    drink(beverage);

    expect(drink).toHaveReturnedWith('La Croix');
});

//Use .toHaveLastReturnedWith to test the specific value that a mock function last returned
test('drink returns La Croix (Orange) last', () => {
    const beverage1 = {
        name: 'La Croix (Lemon)'
    };
    const beverage2 = {
        name: 'La Croix (Orange)'
    };
    const drink = jest.fn(beverage => beverage.name);

    drink(beverage1);
    drink(beverage2);

    expect(drink).toHaveLastReturnedWith('La Croix (Orange)');
});

//Use .toHaveNthReturnedWith to test the specific value that a mock function returned for the nth call.
test('drink returns expected nth calls', () => {
    const beverage1 = {
        name: 'La Croix (Lemon)'
    };
    const beverage2 = {
        name: 'La Croix (Orange)'
    };
    const drink = jest.fn(beverage => beverage.name);

    drink(beverage1);
    drink(beverage2);

    expect(drink).toHaveNthReturnedWith(1, 'La Croix (Lemon)');
    expect(drink).toHaveNthReturnedWith(2, 'La Croix (Orange)');
});