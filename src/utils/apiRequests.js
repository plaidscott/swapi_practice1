var axios = require('axios')

module.exports = {
  test: () => {
    return axios.get('https://swapi.co/api/people/1')
      .then( response => {
        console.log('test was invoked, and this is the response', response);
        return response;
      })
      .catch( error => {
        console.log('error from apiRequests.js, test', error)
      })
  }
};
