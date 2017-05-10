mapboxgl.accessToken = 'pk.eyJ1IjoidGltcm9lc25lciIsImEiOiJjajJhbzEzZ2QwMDkwMzNvZ2YxZnVsbXI2In0.Dq8bsIZh_GP75xpawX3fcA';

var request = new XMLHttpRequest();
request.open("GET", "/assets/long.txt", false);
request.send()
var long = parseFloat(request.responseText)
request.open("GET", "/assets/lat.txt", false);
request.send()
var lat = parseFloat(request.responseText)
   
   

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [long, lat], // starting position
    zoom: 13 // starting zoom
});

map.on('load', function() {
    map.addLayer({
        'id': "cars",
        'type': "circle",
        'source': {
            "type": "geojson",
            	"data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [long, lat]

                    },
                    "properties": {}
                }]
            }	
        },
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'circle-radius': 160,
            'circle-color': 'rgba(10,123,255,.5)'
        },
    });
});