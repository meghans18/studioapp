/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar map = L.map('map', {\n    center: [0, 10],\n    zoom: 3,\n    minZoom: 3,\n    maxZoom: 12,\n    zoomControl: false\n});\n\nL.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {\n    attribution: '© OpenStreetMap contributors © CARTO',\n    subdomains: 'abcd',\n    maxZoom: 12\n}).addTo(map);\n\nvar markerColor = {\n    radius: 8,\n    fillColor: \"#8D803D\",\n    color: \"#3978BF\",\n    weight: 1,\n    opacity: 0.5,\n    fillOpacity: 0.5\n};\n\nvar mainlayer = new L.geoJson(data, {\n    onEachFeature: onEachFeature,\n    pointToLayer: function pointToLayer(feature, latlng) {\n        return L.circleMarker(latlng, markerColor);\n    }\n});\n\nvar markers = L.markerClusterGroup.layerSupport();\nmarkers.checkIn(mainlayer);\nmarkers.addTo(map);\n\nvar sliderControl = L.control.sliderControl({\n    position: \"topright\",\n    layer: mainlayer,\n    range: true,\n    showAllOnStart: true\n});\n\nmap.addControl(sliderControl);\nsliderControl.startSlider();\n\nfunction onEachFeature(feature, layer) {\n    var letter = feature.properties.text;\n    var prop = feature.properties;\n    var popup = '<h3> ' + prop['Sender'] + ' to ' + prop['Recipient'] + ' on ' + prop['time'] + ' </h3><br> ' + letter;\n    //let popup =  `<h3>Author: ` + prop['Author'] + `</h3>` + `<h3>Published Title: ` + prop['Published Title'] + `</h3>` + `<strong>Type:</strong> ` +  prop['Type'] + '<br>' + `<strong>Date:</strong> ` + prop['time'] + '<br>' + `<strong>Periodical Title:</strong> ` +  prop['Publication'] + '<br>' + `<strong>City:</strong> ` + prop['City'] + '<br>' + `<strong>State:</strong> ` + prop['State'] + '<br>' + `<strong>Publication Type:</strong> ` + prop['Kind of Periodical'] + '<br>' + `<strong>Page Number:</strong> ` + prop['Page_Numbers (need to update, adding brackets)']\n\n    feature.layer = layer;\n    layer.bindPopup(popup, {\n        maxWidth: \"auto\"\n    });\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });