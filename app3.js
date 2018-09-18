const axios = require('axios');

const argv = require('yargs').options({
  direccion:{
    alias:'d',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true
  }

}).argv;

//console.log(argv.direccion);

let encodedUrl = encodeURI(argv.direccion)
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}+CA&key=AIzaSyAJ2aEs0UpGAW-G4mleFU6nasD6U1RkfT0`)
.then(resp => {
  let location = resp.data.results[0];
  let coors = location.geometry.location;

  console.log('Direccion: ', location.formatted_address);
  console.log('lat: ', coors.lat);
  console.log('lng: ', coors.lng);

  console.log(resp.status);

})
.catch(err => console.log('ERROS', err));
