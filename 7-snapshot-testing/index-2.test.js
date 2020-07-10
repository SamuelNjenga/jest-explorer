//Jest allows providing an asymmetric matcher for any property. These matchers are checked before the snapshot is written or tested, and then saved to the snapshot file instead of the received value
it("will check the matchers and pass", () => {
  const user = {
    createdAt: new Date(),
    programmingLanguage: "Javascript",
    id: Math.floor(Math.random() * 20),
    name: "Samuel Njenga",
  };

  expect(user).toMatchInlineSnapshot(
    {
      createdAt: expect.any(Date),
      id: expect.any(Number),
    },
    `
    Object {
      "createdAt": Any<Date>,
      "id": Any<Number>,
      "name": "Samuel Njenga",
      "programmingLanguage": "Javascript",
    }
  `
  );
});
