const lodash = require("lodash");
test("repeat B three times", () => {
    expect(lodash.repeat("B",3)).toBe("BBB");
});

test("repeat B three times", () => {
    expect(lodash.repeat("SAMUEL",1)).toBe("SAMUEL");
});