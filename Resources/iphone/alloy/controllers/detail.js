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
	this.__controllerPath = 'detail';
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

	var __alloyId2 = [];$.__views.__alloyId4 = Ti.UI.createWindow({ title: "Tab1", id: "__alloyId4" });
	$.__views.__alloyId5 = Ti.UI.createTableView({ id: "__alloyId5" });
	$.__views.__alloyId4.add($.__views.__alloyId5);
	var __alloyId15 = Alloy.Collections['Visa'] || Visa;function __alloyId16(e) {
		if (e && e.fromAdapter) {
			return;
		}var opts = __alloyId16.opts || {};var models = filterFunction(__alloyId15);var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
			var __alloyId6 = models[i];__alloyId6.__transform = _.isFunction(__alloyId6.transform) ? __alloyId6.transform() : __alloyId6.toJSON();var __alloyId8 = Ti.UI.createTableViewRow({ layout: "vertical", city: __alloyId6.__transform.city });
			rows.push(__alloyId8);
			var __alloyId10 = Ti.UI.createImageView({ image: __alloyId6.__transform.image, top: 20 });
			__alloyId8.add(__alloyId10);
			var __alloyId12 = Ti.UI.createLabel({ text: __alloyId6.__transform.city });
			__alloyId8.add(__alloyId12);
			var __alloyId14 = Ti.UI.createLabel({ text: '$' + __alloyId6.__transform.price });
			__alloyId8.add(__alloyId14);
		}$.__views.__alloyId5.setData(rows);
	};__alloyId15.on('fetch destroy change add remove reset', __alloyId16);map2Click ? $.addListener($.__views.__alloyId5, 'click', map2Click) : __defers['$.__views.__alloyId5!click!map2Click'] = true;$.__views.__alloyId3 = Ti.UI.createTab({ window: $.__views.__alloyId4, title: "Tab1", icon: "KS_nav_ui.png", id: "__alloyId3" });
	__alloyId2.push($.__views.__alloyId3);$.__views.detail = Ti.UI.createTabGroup({ tabs: __alloyId2, id: "detail" });
	$.__views.detail && $.addTopLevelView($.__views.detail);
	exports.destroy = function () {
		__alloyId15 && __alloyId15.off('fetch destroy change add remove reset', __alloyId16);
	};

	_.extend($, $.__views);

	var args = $.args;
	var record_id = args.record_id || {};
	Alloy.Collections.Visa.fetch();


	function filterFunction(collection) {
		return collection.filter(function (model) {
			return model.get("id") == record_id;
		});
	};

	function map2Click(e) {
		var eventListController = Alloy.createController('map2Click', { city: e.row.city });

		Alloy.Globals.tabGroup.activeTab.open(eventListController.getView());
	}

	__defers['$.__views.__alloyId5!click!map2Click'] && $.addListener($.__views.__alloyId5, 'click', map2Click);

	_.extend($, exports);
}

module.exports = Controller;