const axios = require('axios');

function* getDataCoronaVirus(){
  const urlApi = `https://api.covid19api.com/summary`;
  const response = yield axios.get(urlApi);
  return response;
}
let result = getDataCoronaVirus();
result.next().value.then( res => console.log(res.data));
//console.log(result.next());