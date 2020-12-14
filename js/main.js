//Set up basemap
require(['esri/Map', 'esri/views/MapView'], function(Map, MapView) {
//NOTE: Module order matters!
  const map = new Map({
    basemap: 'topo-vector',
  });

  view = new MapView({
    container: 'viewDiv',
    map: map,
    center: [-87.68914385791143, 41.85978190876079], // longitude, latitude
    zoom: 10
  });
});

//Add feature layer
