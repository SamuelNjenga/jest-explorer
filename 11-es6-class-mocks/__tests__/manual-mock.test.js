// sound-player-consumer.test.js
const SoundPlayer = require('../sound-player');
const mockPlaySoundFile = SoundPlayer.__mockPlaySoundFile;
const SoundPlayerConsumer = require('../sound-player-consumer');
jest.mock('../sound-player'); // SoundPlayer is now a mock constructor
//If you have implementation, it wont be an automatic mock

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  SoundPlayer.mockClear();
  mockPlaySoundFile.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});