//Any given value that is not a matcher will be checked exactly and saved to the snapshot:
it('will check the values and pass', () => {
    const user = {
        createdAt: new Date(),
        name: 'Computer Science... Software Engineering',
        school: 'The Great School Of Life'
    };

    expect(user).toMatchSnapshot({
        createdAt: expect.any(Date),
        name: 'Computer Science... Software Engineering'
    });
});