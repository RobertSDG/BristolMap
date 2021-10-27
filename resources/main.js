$(function() {
    console.log( "ready!" );
    createMap();
});

function createMap() {
    var mymap = L.map('mapid').setView([51.46134719386551, -2.587291029635221], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(mymap);
    L.control.scale({imperial: true, metric: true}).addTo(mymap);

    // addmarkers
    var B02 = L.marker([51.43928218377781, -2.597998344776218]).addTo(mymap);
    B02.bindPopup("Goal 7")
}
