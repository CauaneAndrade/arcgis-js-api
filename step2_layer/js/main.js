require([
    "esri/Map",
    "esri/layers/FeatureLayer",
    "esri/views/MapView"
], function(Map, FeatureLayer, MapView){
    const chicagoCrime = new FeatureLayer({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Chicago_Crime_Tracts/FeatureServer/0"
    });

    const map = new Map({
        basemap: "gray-vector"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 10,
        center: [-87.66453728281347, 41.840392306471315] // chicago
    });

    view.when(function() {
        map.add(chicagoCrime);
    });
})