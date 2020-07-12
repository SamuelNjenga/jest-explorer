const lodash = jest.genMockFromModule("lodash"); //Gets all methods of lodash and changes that for a jest mock
//undefined is default behavior for mocks


lodash.repeat = () => {
    return "SSSSS"
}
module.exports = lodash;