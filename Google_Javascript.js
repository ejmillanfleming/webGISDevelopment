let map; 

function initMap() {
    map = new google.maps.MAP(document.getElementById("map"), {
        center: {lat: -34.397, lng: 150.644}, 
        zoom: 8,
    });
}