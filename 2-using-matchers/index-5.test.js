//expect.arrayContaining(array) matches a received array which contains all of the elements in the expected array.
describe('arrayContaining', () => {
    const expected = ['Alice', 'Bob'];
    it('matches even if received contains additional elements', () => {
        expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
    });
    it('does not match if received does not contain expected elements', () => {
        expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
    });
});

describe('Beware of a misunderstanding! A sequence of dice rolls', () => {
    const expected = [1, 2, 3, 4, 5, 6];
    it('matches even with an unexpected number 7', () => {
        expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
            expect.arrayContaining(expected),
        );
    });
    it('does not match without an expected number 2', () => {
        expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
            expect.arrayContaining(expected),
        );
    });
});

//expect.not.arrayContaining(array) matches a received array which does not contain all of the elements in the expected array.
describe('not.arrayContaining', () => {
    const expected = ['Samantha'];

    it('matches if the actual array does not contain the expected elements', () => {
        expect(['Alice', 'Bob', 'Eve']).toEqual(
            expect.not.arrayContaining(expected),
        );
    });
});

//expect.not.objectContaining(object) matches any received object that does not recursively match the expected properties.
describe('not.objectContaining', () => {
    const expected = {
        foo: 'bar'
    };

    it('matches if the actual object does not contain expected key: value pairs', () => {
        expect({
            bar: 'baz'
        }).toEqual(expect.not.objectContaining(expected));
    });
});

//expect.not.stringContaining(string) matches the received value if it is not a string or if it is a string that does not contain the exact expected string.
describe('not.stringContaining', () => {
    const expected = 'Hello world!';
  
    it('matches if the received value does not contain the expected substring', () => {
      expect('How are you?').toEqual(expect.not.stringContaining(expected));
    });
  });