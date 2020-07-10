//Property Matchers
//Often there are fields in the object you want to snapshot which are generated (like IDs and Dates). If you try to snapshot these objects, they will force the snapshot to fail on every run
it('will fail every time', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: 'Javascript Engineer',
    };
  
    expect(user).toMatchSnapshot();
  });
  
  // Snapshot
//   exports[`will fail every time 1`] = `
//   Object {
//     "createdAt": 2018-05-19T23:36:09.816Z,
//     "id": 3,
//     "name": "LeBron James",
//   }
//   `;
