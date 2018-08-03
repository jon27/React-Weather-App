var axios = require('axios');

const GOOGLE_STATIC_MAPS = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyCId9nIKr1ECnQBYdt3w-9UcmEw7smERUI"

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${GOOGLE_STATIC_MAPS}&q=${encodedLocation}`;
  
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









