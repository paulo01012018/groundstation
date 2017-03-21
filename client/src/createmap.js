// Create the map =================================================
var map = new ol.Map({
target: 'map',
layers: [
  new ol.layer.Tile({
    source: new ol.source.OSM()
  })
],
view: new ol.View({
  center: ol.proj.fromLonLat([-123.31,48.463]), //This is centred on Victoria
  zoom: 12
})
});

// Create the rocket icon layer ===================================
var iconFeatures = [];
var currentPositionSource = new ol.source.Vector({features:iconFeatures});

var iconStyle = new ol.style.Style({
  image: new ol.style.Icon( ({
    anchor: [0.5,0.5],
    anchorXUnits: 'fraction',
    anchorYUnits: 'fraction',
    opacity: 1.0,
    scale: 0.008,
    src: 'images/rocket.png'
  }))
});

var currentPositionLayer = new ol.layer.Vector({
  source: currentPositionSource,
  style: iconStyle
});


// Create the "trail" layer ========================================

var lineStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1)', width:3})
});

var trailSource = new ol.source.Vector({
    features: [new ol.Feature({ geometry: new ol.geom.LineString([]),
                                name: "Trail"
                              })]
    });

var pathLayer = new ol.layer.Vector({
    source:trailSource,
    style: lineStyle
});

// Add those layers to the map ====================================
map.addLayer(pathLayer);
map.addLayer(currentPositionLayer);

