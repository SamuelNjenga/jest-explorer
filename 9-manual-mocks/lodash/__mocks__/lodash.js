//const lodash = jest.genMockFromModule("lodash"); //Gets all methods of lodash and changes that for a jest mock
//undefined is default behavior for mocks

//To ensure that a manual mock and its real implementation stay in sync, it might be useful to require the real module using jest.requireActual(moduleName) in your manual mock and amending it with mock functions before exporting it
const lodash = jest.requireActual("lodash");
lodash.repeat = () => {
    return "SSSSS"
}
module.exports = lodash;