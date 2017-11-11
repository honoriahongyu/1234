var Alloy = require('/alloy'),
    Backbone = Alloy.Backbone,
    _ = Alloy._;

function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
		delete obj[key];
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'map';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};

	Alloy.Collections.instance('consulate');

	$.__views.map = Ti.UI.createWindow({ title: "map", id: "map" });
	$.__views.map && $.addTopLevelView($.__views.map);
	var __alloyId79 = [];
	$.__views.__alloyId78 = (require("ti.map").createView || Ti.UI.createView)({ annotations: __alloyId79, userLocation: true, id: "__alloyId78" });
	$.__views.map.add($.__views.__alloyId78);
	var __alloyId81 = Alloy.Collections['consulate'] || consulate;function __alloyId82(e) {
		if (e && e.fromAdapter) {
			return;
		}var opts = __alloyId82.opts || {};var models = M_filterFunction(__alloyId81);var len = models.length;for (var i = 0; i < len; i++) {
			var __alloyId80 = models[i];__alloyId79.push(require('ti.map').createAnnotation(_.isFunction(__alloyId80.transform) ? __alloyId80.transform() : __alloyId80.toJSON()));
		}$.__views.__alloyId78.annotations = __alloyId79;
	};__alloyId81.on('fetch destroy change add remove reset', __alloyId82);$.__views.__alloyId83 = require("ti.map").createAnnotation({ latitude: NaN, longitude: NaN, id: "__alloyId83" });
	exports.destroy = function () {
		__alloyId81 && __alloyId81.off('fetch destroy change add remove reset', __alloyId82);
	};

	_.extend($, $.__views);

	_.extend($, exports);
}

module.exports = Controller;