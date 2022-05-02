mapboxgl.accessToken = 'Enter Your access token :) ';


//setting the geolocation to cutrrent position
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})
//for every successs location
function successLocation(position) {
    console.log(position);
    setUpMap([position.coords.longitude, position.coords.latitude])

}
//for error location
function errorLocation() {
    setupMap([-2.24, 53.48])

}

function setUpMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 10
    });
const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}