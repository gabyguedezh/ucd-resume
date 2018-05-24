window.onload = function() {
    L.mapquest.key = 'd0bP1mYxiEbbncaGjLFmwzEk3479TA1k';
    var baseLayer = L.mapquest.tileLayer('map');
    var map = L.mapquest.map(document.getElementById("map"), {
        center: L.latLng(-37.82, 175.24),
        layers: baseLayer,
        zoom: 8
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 },
    ];

    var markers = locations.map(function(location, i) {
        return new L.mapquest.marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new markerCluster(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });

    // var locations = [
    //   [-37.8210922667, 175.2209316333, "2"],
    //   [-37.81797515, 175.2186312, "3"]
    // ];

    var markers = L.markerClusterGroup();
    for (var i = 0; i < locations.length; i++) {
        var addressPoint = locations[i];
        var title = addressPoint[2];
        var marker = L.marker(new L.LatLng(addressPoint[0], addressPoint[1]), {
            title: title,
            icon: L.mapquest.icons.marker()
        });
        marker.bindPopup(title);
        markers.addLayer(marker);
    }
    map.addLayer(markers);
};
