//Any given value that is not a matcher will be checked exactly and saved to the snapshot:
it('will check the values and pass', () => {
    Date.now = jest.fn(() => 1482363367071);
    const user = {
        createdAt: Date.now(),
        name: 'Computer Science... Software Engineering',
        school: 'The Great School Of Life'
    };

    expect(user).toMatchSnapshot({
       // createdAt: expect.any(Date),
        name: 'Computer Science... Software Engineering'
    });
});