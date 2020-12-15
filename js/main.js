//Set up basemap
require([
  'esri/Map',
  'esri/layers/FeatureLayer',
  'esri/views/MapView',
], function(Map, FeatureLayer, MapView) {
  //NOTE: Module order matters!

  //****Add feature layer*****
  //Set a custom renderer (not just the default included with the FeatureLayer). Don't need to require renderer module (makes use of Autocasting).
  const renderer = {
      type: 'simple',
      symbol: {
          type: 'simple-fill',
          color: [255, 128, 0, 0.5],
          outline: {
              width: 1,
              color: 'white'
          }
      }
  }
  //Set symbology via renderer's visual variables
  const sizeVisualVariable = {
    type: 'size',
  };
  //Apply visual variable to renderer
  renderer.visualVariable = [sizeVisualVariable];
  const watersheds = new FeatureLayer({
    url:
      'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Parks/FeatureServer',
    renderer: renderer, //pass in renderer to featurelayer using default properties
  });

  const map = new Map({
    basemap: 'topo-vector',
  });

  view = new MapView({
    container: 'viewDiv',
    map: map,
    center: [-87.68914385791143, 41.85978190876079], // longitude, latitude
    zoom: 10,
  });

  //when the view is fully loaded, add the feature layer to the map
  view.when(function() {
    map.add(watersheds); // adds the layer to the map
    //to add multiple:
    //map.addMany([stateBorders, secondOne]);
  });
});

//Note: used https github
