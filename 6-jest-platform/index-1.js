//Jest Platform -> Some packages which Jest does recommend
//jest-changed-files
//Tool for identifying modified files in a git/hg repository

const {
    getChangedFilesForRoots,
    findRepos
} = require('jest-changed-files');

// print the set of modified files since last commit in the current repo
getChangedFilesForRoots(['../6-jest-platform'], {
    lastCommit: true
}).then((result) => console.log(result.changedFiles));

//Optionally test on findRepos
findRepos(['../5-mock-functions']).then(repos => {
    console.log("Repos",repos)
});