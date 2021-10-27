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
    B02.bindPopup("Goal 7");

    var B31 = L.marker([51.460222067413476, -2.593291675329065]).addTo(mymap);
    B31.bindPopup("Goal 14");

    var B11 = L.marker([51.46458444481529, -2.5698981331287403]).addTo(mymap);
    B11.bindPopup("Goal 4");

    var B13 = L.marker([51.48031289643253, -2.5297536601158344]).addTo(mymap);
    B13.bindPopup("Goal 11");

    var B66 = L.marker([51.467094631859794, -2.553067644172668]).addTo(mymap);
    B66.bindPopup("Goal 9");

    var B07 = L.marker([51.45948585425417, -2.5627840117409892]).addTo(mymap);
    B07.bindPopup("Goal 17");

    var B39 = L.marker([51.449530028115326, -2.588562244739551]).addTo(mymap);
    B39.bindPopup("Goal 6");

    var B17 = L.marker([51.459407165842286, -2.55448945121784]).addTo(mymap);
    B17.bindPopup("Goal 1");
}
