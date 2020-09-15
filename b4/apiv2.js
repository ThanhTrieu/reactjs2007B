// thuc hanh call data tu service
// import thu vien axios
const axios = require('axios');
const getDataWeatherFromApi = async (cityName = 'Tokyo') => {
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric&lang=vi`;
  const response = await axios.get(urlApi);
  const data = await response.status === 200 ? response.data : [];
  return data;
}
const showData = async () => {
  const data = await getDataWeatherFromApi('HaNoi');
  console.log(data);
}
const showDataV2 =  () => {
  getDataWeatherFromApi('HaNoi').then(data => console.log(data))
                                .catch(error => console.log(error));
}
showData();
//showDataV2();