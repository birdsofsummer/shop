var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const token='pk.eyJ1IjoiYmlyZHNvZnN1bW1lciIsImEiOiJjandpc3Q2dzcwMnF6M3prczk0MzZ5NHd0In0.onb1KZacYJ9bzeFSf-GP_w'

mapboxgl.accessToken = token

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});


