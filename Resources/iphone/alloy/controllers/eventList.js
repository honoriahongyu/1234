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
	this.__controllerPath = 'eventList';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};

	Alloy.Collections.instance('Visa');

	$.__views.win = Ti.UI.createWindow({ id: "win" });
	$.__views.win && $.addTopLevelView($.__views.win);
	$.__views.__alloyId19 = Ti.UI.createTableView({ id: "__alloyId19" });
	$.__views.win.add($.__views.__alloyId19);
	var __alloyId23 = Alloy.Collections['Visa'] || Visa;function __alloyId24(e) {
		if (e && e.fromAdapter) {
			return;
		}var opts = __alloyId24.opts || {};var models = filterFunction(__alloyId23);var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
			var __alloyId20 = models[i];__alloyId20.__transform = _.isFunction(__alloyId20.transform) ? __alloyId20.transform() : __alloyId20.toJSON();var __alloyId22 = Ti.UI.createTableViewRow({ title: __alloyId20.__transform.title });
			rows.push(__alloyId22);
		}$.__views.__alloyId19.setData(rows);
	};__alloyId23.on('fetch destroy change add remove reset', __alloyId24);exports.destroy = function () {
		__alloyId23 && __alloyId23.off('fetch destroy change add remove reset', __alloyId24);
	};

	_.extend($, $.__views);

	var args = $.args;
	var region_id = args.region_id || {};

	$.win.title = region_id;
	Alloy.Collections.Visa.fetch();

	$.win.addEventListener("close", function () {
		$.destroy();
	});

	function filterFunction(collection) {
		return collection.filter(function (model) {
			return model.get("city") == "East Asia" && model.get("price") < 7000;
		});
	}

	_.extend($, exports);
}

module.exports = Controller;