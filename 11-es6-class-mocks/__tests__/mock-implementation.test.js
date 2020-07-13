const SoundPlayer = require('../sound-player');
const SoundPlayerConsumer = require('../sound-player-consumer');

jest.mock('../sound-player');
//You can replace all of the above mocks in order to change the implementation, for a single test or all tests, by calling mockImplementation() on the existing mock

//Calls to jest.mock are hoisted to the top of the code. You can specify a mock later, e.g. in beforeAll(), by calling mockImplementation() (or mockImplementationOnce()) on the existing mock instead of using the factory parameter. This also allows you to change the mock between tests, if needed
describe('When SoundPlayer throws an error', () => {
	beforeAll(() => {
		SoundPlayer.mockImplementation(() => {
			return {
				playSoundFile: () => {
					throw new Error('Test error');
				}
			};
		});
	});

	it('Should throw an error when calling playSomethingCool', () => {
		const soundPlayerConsumer = new SoundPlayerConsumer();
		expect(() => soundPlayerConsumer.playSomethingCool()).toThrow();
	});
});
