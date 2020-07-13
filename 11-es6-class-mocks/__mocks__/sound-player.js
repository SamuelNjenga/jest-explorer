// __mocks__/sound-player.js

// Import this named export into your test file:
const __mockPlaySoundFile = jest.fn();
//Mock implementation of class
//Will be treated as constructor for the class
const mock = jest.fn().mockImplementation(() => {
  return {playSoundFile: __mockPlaySoundFile}; //Higher order function as it is a function returning another function
});

mock.__mockPlaySoundFile = __mockPlaySoundFile;

module.exports =  mock;