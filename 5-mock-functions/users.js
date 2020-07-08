//Mocking Modules
//Suppose we have a class that fetches users from our API. The class uses axios to call the API then returns the data attribute which contains all the users
const axios = require('axios').default;

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

module.exports = Users;