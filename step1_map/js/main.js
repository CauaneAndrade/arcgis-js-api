require(
    ["esri/Map", "esri/views/MapView"],
    function(Map, MapView)
    {
        const map = new Map({
            basemap: "gray-vector"
        });
        view = new MapView({
            container: "viewDiv",
            map: map,
            zoom: 10,
            center: [-45.88694, -23.17944] // long, lat
        })
    }
)