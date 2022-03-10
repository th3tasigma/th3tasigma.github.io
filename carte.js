function init() {
	var map = new OpenLayers.Map('地図',{controls:[]});
	var osmLayer = new OpenLayers.Layer.OSM();
	map.addLayer(osmLayer);
	var mapProj = map.getProjectionObject();
	var epsg4326 = new OpenLayers.Projection("EPSG:4326");
	var center4326 = new OpenLayers.LonLat(139.480278,35.299722);
	map.addControl(new OpenLayers.Control.Navigation());
	var center = center4326.transform(epsg4326,mapProj);
	var zoom = 16;
	map.setCenter (center,zoom);
	map.addControl(new OpenLayers.Control.PanZoomBar());
	map.addControl(new OpenLayers.Control.MousePosition({displayProjection: epsg4326}));
	map.addControl(new OpenLayers.Control.OverviewMap());
	map.addControl(new OpenLayers.Control.LayerSwitcher());
}
