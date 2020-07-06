const ouncesPerCan = () => {
    return 17;
}
//Use toBeGreaterThan to compare received > expected for number or big integer values. 
test('ounces per can is more than 10', () => {
    expect(ouncesPerCan()).toBeGreaterThan(10);
});

test('ounces per can is at least 12', () => {
    expect(ouncesPerCan()).toBeGreaterThanOrEqual(12);
});

test('ounces per can is less than 20', () => {
    expect(ouncesPerCan()).toBeLessThan(20);
});

test('ounces per can is at most 18', () => {
    expect(ouncesPerCan()).toBeLessThanOrEqual(18);
});