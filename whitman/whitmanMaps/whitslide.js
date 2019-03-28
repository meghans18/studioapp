var map = L.map('map', {
	center: [0, 0],
	zoom: 3,
	minZoom: 3,
	maxZoom: 12
});

var w = window.innerWidth - 8;
var h = window.innerHeight - 15;
//console.log(w,h);

//sets the map panning boundary so it can't go past the United States(Need to update for Whitman)
/*
var corner1 = L.latLng(-162, 69),
corner2 = L.latLng(155, -34)
var bounds = L.latLngBounds(corner1, corner2);
map.setMaxBounds(bounds);

map.on('drag', function() {
		map.panInsideBounds(bounds, { animate: true });
});
*/

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);

var blueCircleMarkers = {
	radius: 8,
	fillColor: "#00AEEF",
	color: "#3978BF",
	weight: 1,
	opacity: 0.5,
	fillOpacity: 0.5
};
//Fetch some data from a GeoJSON file
//$.getJSON("https://raw.githubusercontent.com/ghybs/Leaflet.MarkerCluster.LayerSupport/master/docs/examples/points.json", function(json) {


$.getJSON("http://s-lib018.lib.uiowa.edu/whitmanMaps-touchscreen/letters.geojson", function (json) {

	var whitmanlayer = new L.geoJson(json, {
		onEachFeature: onEachFeature,
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, blueCircleMarkers);
		}
	});

	// Check into MCG Layer Support!
	// Add to map first before checking in.

	//this line is necessary for the clusters
	var mcgLayerSupportGroup = L.markerClusterGroup.layerSupport().addTo(map).checkIn(whitmanlayer);


	var popupFields = ['Send', 'Sender', 'Recipient', 'time', 'URL']; //Popup will display these fields

	var sliderControl = L.control.sliderControl({
		position: "topright",
		layer: whitmanlayer,
		range: true
	});


	function displayFeatures(features, whitmanlayer) {
		var popup = L.DomUtil.create('div', 'tiny-popup', map.getContainer());
		for (var id in features) {
			var feat = features[id];
			var cat = feat.properties.categorie;
			var site = L.geoJson(feat, {
				pointToLayer: function (feature, latLng) {
					var marker = L.marker(latLng, {
						icon: myIcon,
						keyboard: false,
						riseOnHover: true
					});
					if (!L.touch) {
						marker.on('mouseover', function (position) {
							// TODO can put text in here when hovering search
							// popup.innerHTML = 'Testing';
							// L.DomUtil.setPosition(popup, pos);
							// L.DomUtil.addClass(popup, 'visible');
						}).on('mouseout', function (position) {
							L.DomUtil.removeClass(popup, 'visible');
						});
					}
					return marker;
				},
				onEachFeature: onEachFeature
			});
			if (layer !== undefined) {
				layer.addLayer(site);
			}
		}
		return layer;
	};
	//Make sure to add the slider to the map ;-)
	map.addControl(sliderControl);
	//And initialize the slider
	sliderControl.startSlider();
})

function onEachFeature(feature, layer) {

	if (feature.properties) {
		let prop = feature.properties;
		let url
		let letterBody

		if (prop['URL'] !== "") {
			url = prop['URL']
			$.get(url, (res) => {
				//console.log(url, res)
				letterBody = $(res).find("body").html()
				//console.log(letterBody)

				var popup = '<h3>' + prop['Sender'] + ' to ' + prop['Recipient'] + ' on ' + prop['time'] + '</h3>' + '<br><br>' + letterBody

				// you must create a layer property on each feature or else
				// the search results won't know where the item is on the map / layer
				feature.layer = layer;
				layer.bindPopup(popup, {
					maxWidth: "auto"
				});

			}) //end of get
		} else {
				url = "No digital transcription at this time"
				var popup = '<h3>' + prop['Sender'] + ' to ' + prop['Recipient'] + ' on ' + prop['time'] + '</h3>' + '<br><br>' + url

				feature.layer = layer;
				layer.bindPopup(popup, {
					maxWidth: "auto"
			});
		} //end of if prop URL not empty

	}
}; // end onEachFeature
