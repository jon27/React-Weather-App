var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?&units=imperial&appid=43361b00c218d8648f6e2b8f699bff67'

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
	
	return axios.get(requestUrl).then(function (res) {
      	if (res.data.cod != 200 && res.data.message != 'accurate') {
        throw new Error(res.data.message);
      } else {
        return res.data.list[0].main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
	}
}

