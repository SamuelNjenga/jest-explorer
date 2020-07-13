const SoundPlayer = require('../sound-player');
const SoundPlayerConsumer = require('../sound-player-consumer');
jest.mock('../sound-player', () => {
    return function () {
      return {playSoundFile: () => {}};
    };
  }); // SoundPlayer is now a mock constructor


//Arrow functions
// jest.mock('../sound-player', () => {
//     return () => {
//       // Does not work; arrow functions can't be called with new
//       return {playSoundFile: () => {}};
//     };
//   });

it('console logs the class mock', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(soundPlayerConsumer.soundPlayer.playSoundFile).toBeDefined()
});
