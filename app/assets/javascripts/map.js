mapboxgl.accessToken = 'pk.eyJ1IjoidGltcm9lc25lciIsImEiOiJjajJhbzEzZ2QwMDkwMzNvZ2YxZnVsbXI2In0.Dq8bsIZh_GP75xpawX3fcA';

   var lat = <%= lat %>  
   var long = <%= long %> 

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
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.045602,
                                 37.340118
                                 ],
                 "type": "Point"
                 },
                 "id": "04a2d925f72c4a4f4ff05f11f085dc0c"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.886473,
                                 37.34421
                                 ],
                 "type": "Point"
                 },
                 "id": "0a83242b24e0a284221167abf8cf5b2e"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.003573,
                                 37.308815
                                 ],
                 "type": "Point"
                 },
                 "id": "0a9728317f29ac3a6fbf6ad187f226fc"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.035059,
                                 37.315261
                                 ],
                 "type": "Point"
                 },
                 "id": "0b221cf3001be4ba4d9926378d996c7c"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.020424,
                                 37.31438
                                 ],
                 "type": "Point"
                 },
                 "id": "0c405238430981188693b97cf44f054e"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.952095,
                                 37.286007
                                 ],
                 "type": "Point"
                 },
                 "id": "0e34d3caf6ba6e71e981a1e8e754d7b1"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.929051,
                                 37.321699
                                 ],
                 "type": "Point"
                 },
                 "id": "11c830ecef85266507839cba81be53d4"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.016228,
                                 37.344494
                                 ],
                 "type": "Point"
                 },
                 "id": "123474812988f4058edba8ebb0bda252"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.882274,
                                 37.342334
                                 ],
                 "type": "Point"
                 },
                 "id": "1691c7eeaa2c1520b23111713d67abad"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.081454,
                                 37.389697
                                 ],
                 "type": "Point"
                 },
                 "id": "1bf290d214d9de32dbded7366df4bd47"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.883868,
                                 37.331085
                                 ],
                 "type": "Point"
                 },
                 "id": "1f5dacf1e965a9e36a18384486871dc3"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.956148,
                                 37.334672
                                 ],
                 "type": "Point"
                 },
                 "id": "2b99e1ee4854c23cbff430b4c5960d5c"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.024948,
                                 37.341102
                                 ],
                 "type": "Point"
                 },
                 "id": "2d7123859c15d09e0b5373da16d2e4aa"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.9094,
                                 37.32619
                                 ],
                 "type": "Point"
                 },
                 "id": "3bbb9df3d4584ff24a47c1a111d06778"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.091665,
                                 37.394239
                                 ],
                 "type": "Point"
                 },
                 "id": "3bd6c8d92ded3e85defe00dc505f1f8d"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.888198,
                                 37.334895
                                 ],
                 "type": "Point"
                 },
                 "id": "3c40e7956447b33ce11fa7b680a518ea"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.0388,
                                 37.340757
                                 ],
                 "type": "Point"
                 },
                 "id": "3e6c9cfc7e7d19820e36b81ef49c17e3"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.88005,
                                 37.341288
                                 ],
                 "type": "Point"
                 },
                 "id": "3e793554360f2ca26018a069c72b4203"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.920878,
                                 37.340259
                                 ],
                 "type": "Point"
                 },
                 "id": "42b3723bc34b74f119c658e4cf281395"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.954219,
                                 37.329414
                                 ],
                 "type": "Point"
                 },
                 "id": "481eef8e97e1559e60bac43e019f6364"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.089472,
                                 37.39244
                                 ],
                 "type": "Point"
                 },
                 "id": "4c20dcaac2a8c2caf343426860865bff"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.037377,
                                 37.346706
                                 ],
                 "type": "Point"
                 },
                 "id": "500c87448952edfa923e9339cdaff209"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.890474,
                                 37.299809
                                 ],
                 "type": "Point"
                 },
                 "id": "51b610ca3cda3600437ebba3ffa12497"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.875503,
                                 37.337001
                                 ],
                 "type": "Point"
                 },
                 "id": "5681651fbc2eba4536bc5febc6376eec"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.936722,
                                 37.299281
                                 ],
                 "type": "Point"
                 },
                 "id": "5684783e219f4839eeac26d0f42d0241"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.07581,
                                 37.397352
                                 ],
                 "type": "Point"
                 },
                 "id": "56e34a9c42ed5ff3bd6b86839e3ddd0d"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.079549,
                                 37.386127
                                 ],
                 "type": "Point"
                 },
                 "id": "5ebc91f3cda2c290d7d74545f6439b1b"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.0894,
                                 37.397952
                                 ],
                 "type": "Point"
                 },
                 "id": "60a45c36944832c6ba8f47c45c4aac94"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.944898,
                                 37.289115
                                 ],
                 "type": "Point"
                 },
                 "id": "645ad716fbf0557fd95538b541400e43"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.116124,
                                 37.381408
                                 ],
                 "type": "Point"
                 },
                 "id": "6bb81f7c9ce5c4319ae44a148da1d1c2"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.871573,
                                 37.336903
                                 ],
                 "type": "Point"
                 },
                 "id": "75b2970a10b6542d14ef08b074e1f95e"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.947276,
                                 37.28827
                                 ],
                 "type": "Point"
                 },
                 "id": "8747a126e22bf980a54b49ba49902c6e"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.918656,
                                 37.333663
                                 ],
                 "type": "Point"
                 },
                 "id": "94ddea2e0271c438a07c93e317de4800"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.955735,
                                 37.2995
                                 ],
                 "type": "Point"
                 },
                 "id": "9702de49919ec7ab0badf3888eaea813"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.904439,
                                 37.301172
                                 ],
                 "type": "Point"
                 },
                 "id": "a5d1458144c4b3888a72521eee8702cf"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.957388,
                                 37.325141
                                 ],
                 "type": "Point"
                 },
                 "id": "a83fd0e4698f6119e46d245956c93b9f"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.921912,
                                 37.301546
                                 ],
                 "type": "Point"
                 },
                 "id": "ad29f873bd1eda2f0dec28bb3db26ca9"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.876102,
                                 37.320978
                                 ],
                 "type": "Point"
                 },
                 "id": "ae140594ecf6a921f479783109ae7c4c"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.052219,
                                 37.34474
                                 ],
                 "type": "Point"
                 },
                 "id": "b305156eae158662307aafd4da7bd65b"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.897587,
                                 37.305675
                                 ],
                 "type": "Point"
                 },
                 "id": "ba609b02b8c65241abe30c3ce069e00d"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.955873,
                                 37.304212
                                 ],
                 "type": "Point"
                 },
                 "id": "bcfaaebeb9732ac06efb347facb43a26"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.90441,
                                 37.310432
                                 ],
                 "type": "Point"
                 },
                 "id": "c70b734324ed20b0887161651e440f8f"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.873317,
                                 37.334093
                                 ],
                 "type": "Point"
                 },
                 "id": "cb68d657785120c8f5a3913e8f5de250"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.94802,
                                 37.309363
                                 ],
                 "type": "Point"
                 },
                 "id": "ccda643070f8a0ebbd36ac87e4fe6fd1"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.879152,
                                 37.34365
                                 ],
                 "type": "Point"
                 },
                 "id": "d9e451a6175f8f95abc91c8c26bc4b64"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.080304,
                                 37.391811
                                 ],
                 "type": "Point"
                 },
                 "id": "dfd22b040d48b725555c7387c9f800f3"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.884967,
                                 37.340314
                                 ],
                 "type": "Point"
                 },
                 "id": "e8fda7ef36eba2db2624d3273469c28d"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -121.947255,
                                 37.283912
                                 ],
                 "type": "Point"
                 },
                 "id": "e9c6ae95ae743a9264d048d9e9152f80"
                 },
                 {
                 "type": "Feature",
                 "properties": {},
                 "geometry": {
                 "coordinates": [
                                 -122.079369,
                                 37.393097
                                 ],
                 "type": "Point"
                 },
                 "id": "fe3cbf8f654ceaef22a7158cc38fae79"
                 },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                                 -121.876386,
                                 37.330684
                                 ]

                    },
                    "properties": {}
                }]
            }	
        },
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'circle-radius': 8,
            'circle-color': 'rgba(10,123,255,1)'
        },
    });
});