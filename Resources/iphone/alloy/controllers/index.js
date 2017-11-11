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
		this.__controllerPath = 'index';
		this.args = arguments[0] || {};

		if (arguments[0]) {
				var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
				var $model = __processArg(arguments[0], '$model');
				var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
		}
		var $ = this;
		var exports = {};
		var __defers = {};

		Alloy.Collections.instance('consulate');Alloy.Collections.instance('Visa');

		var __alloyId29 = [];$.__views.__alloyId31 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Tab1", id: "__alloyId31" });
		$.__views.__alloyId32 = Ti.UI.createTableView({ id: "__alloyId32" });
		$.__views.__alloyId31.add($.__views.__alloyId32);
		var __alloyId42 = Alloy.Collections['Visa'] || Visa;function __alloyId43(e) {
				if (e && e.fromAdapter) {
						return;
				}var opts = __alloyId43.opts || {};var models = __alloyId42.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
						var __alloyId33 = models[i];__alloyId33.__transform = transformFunction(__alloyId33);var __alloyId35 = Ti.UI.createTableViewRow({ record_id: __alloyId33.__transform.id, layout: "vertical" });
						rows.push(__alloyId35);
						var __alloyId37 = Ti.UI.createImageView({ image: __alloyId33.__transform.image, top: 20 });
						__alloyId35.add(__alloyId37);
						var __alloyId39 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 20, fontFamily: "Helvetica Neue" }, textAlign: "center", text: __alloyId33.__transform.region + ', ' + __alloyId33.__transform.country + ', ' + __alloyId33.__transform.city, bottom: 20 });
						__alloyId35.add(__alloyId39);
						var __alloyId41 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 20, fontFamily: "Helvetica Neue" }, textAlign: "center", text: __alloyId33.__transform.class + ', $' + __alloyId33.__transform.price, bottom: 20 });
						__alloyId35.add(__alloyId41);
				}$.__views.__alloyId32.setData(rows);
		};__alloyId42.on('fetch destroy change add remove reset', __alloyId43);jpgClick ? $.addListener($.__views.__alloyId32, 'click', jpgClick) : __defers['$.__views.__alloyId32!click!jpgClick'] = true;$.__views.__alloyId30 = Ti.UI.createTab({ window: $.__views.__alloyId31, title: "Tab1", icon: "KS_nav_ui.png", id: "__alloyId30" });
		__alloyId29.push($.__views.__alloyId30);$.__views.__alloyId45 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Tab2", id: "__alloyId45" });
		var __alloyId47 = [];$.__views.__alloyId48 = Ti.UI.createTableViewSection({ headerTitle: "Business Class", id: "__alloyId48" });
		__alloyId47.push($.__views.__alloyId48);$.__views.__alloyId49 = Ti.UI.createTableViewRow({ title: "Under $7000", class_id: "Business", priceValue: 7000, price_id: "under", hasChild: true, id: "__alloyId49" });
		$.__views.__alloyId48.add($.__views.__alloyId49);$.__views.__alloyId50 = Ti.UI.createTableViewRow({ title: "Above $7000", class_id: "Business", priceValue: 7000, price_id: "above", hasChild: true, id: "__alloyId50" });
		$.__views.__alloyId48.add($.__views.__alloyId50);$.__views.__alloyId51 = Ti.UI.createTableViewSection({ headerTitle: "Economy Class", id: "__alloyId51" });
		__alloyId47.push($.__views.__alloyId51);$.__views.__alloyId52 = Ti.UI.createTableViewRow({ title: "Under $5000", class_id: "Economy", priceValue: 5000, price_id: "under", hasChild: true, id: "__alloyId52" });
		$.__views.__alloyId51.add($.__views.__alloyId52);$.__views.__alloyId53 = Ti.UI.createTableViewRow({ title: "Above $5000", class_id: "Economy", priceValue: 5000, price_id: "above", hasChild: true, id: "__alloyId53" });
		$.__views.__alloyId51.add($.__views.__alloyId53);$.__views.__alloyId46 = Ti.UI.createTableView({ data: __alloyId47, id: "__alloyId46" });
		$.__views.__alloyId45.add($.__views.__alloyId46);
		tableClick ? $.addListener($.__views.__alloyId46, 'click', tableClick) : __defers['$.__views.__alloyId46!click!tableClick'] = true;$.__views.__alloyId44 = Ti.UI.createTab({ window: $.__views.__alloyId45, title: "Tab2", icon: "KS_nav_views.png", id: "__alloyId44" });
		__alloyId29.push($.__views.__alloyId44);$.__views.__alloyId55 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Tab3", id: "__alloyId55" });
		var __alloyId57 = [];$.__views.__alloyId58 = Ti.UI.createTableViewSection({ headerTitle: "East Asia", id: "__alloyId58" });
		__alloyId57.push($.__views.__alloyId58);$.__views.__alloyId59 = Ti.UI.createTableViewRow({ title: "Osaka", region_id: "East Asia", hasChild: true, id: "__alloyId59" });
		$.__views.__alloyId58.add($.__views.__alloyId59);$.__views.__alloyId60 = Ti.UI.createTableViewRow({ title: "Seoul", region_id: "East Asia", hasChild: true, id: "__alloyId60" });
		$.__views.__alloyId58.add($.__views.__alloyId60);$.__views.__alloyId61 = Ti.UI.createTableViewSection({ headerTitle: "South-east Asia", id: "__alloyId61" });
		__alloyId57.push($.__views.__alloyId61);$.__views.__alloyId62 = Ti.UI.createTableViewRow({ title: "Cebu", region_id: "South-east Asia", hasChild: true, id: "__alloyId62" });
		$.__views.__alloyId61.add($.__views.__alloyId62);$.__views.__alloyId63 = Ti.UI.createTableViewRow({ title: "Singapore", region_id: "South-east Asia", hasChild: true, id: "__alloyId63" });
		$.__views.__alloyId61.add($.__views.__alloyId63);$.__views.__alloyId64 = Ti.UI.createTableViewSection({ headerTitle: "Ameriaca", id: "__alloyId64" });
		__alloyId57.push($.__views.__alloyId64);$.__views.__alloyId65 = Ti.UI.createTableViewRow({ title: "Los Angeles", region_id: "Ameriaca", hasChild: true, id: "__alloyId65" });
		$.__views.__alloyId64.add($.__views.__alloyId65);$.__views.__alloyId56 = Ti.UI.createTableView({ data: __alloyId57, id: "__alloyId56" });
		$.__views.__alloyId55.add($.__views.__alloyId56);
		tableClick ? $.addListener($.__views.__alloyId56, 'click', tableClick) : __defers['$.__views.__alloyId56!click!tableClick'] = true;$.__views.__alloyId54 = Ti.UI.createTab({ window: $.__views.__alloyId55, title: "Tab3", icon: "KS_nav_views.png", id: "__alloyId54" });
		__alloyId29.push($.__views.__alloyId54);$.__views.__alloyId67 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Tab4", navBarHidden: true, id: "__alloyId67" });
		var __alloyId68 = [];
		$.__views.mapView = (require("ti.map").createView || Ti.UI.createView)({ region: { latitude: 22.337827, longitude: 114.181962, latitudeDelta: 0.006, longitudeDelta: 0.006 }, annotations: __alloyId68, id: "mapView", userLocation: true });
		$.__views.__alloyId67.add($.__views.mapView);
		var __alloyId71 = Alloy.Collections['consulate'] || consulate;function __alloyId72(e) {
				if (e && e.fromAdapter) {
						return;
				}var opts = __alloyId72.opts || {};var models = __alloyId71.models;var len = models.length;for (var i = 0; i < len; i++) {
						var __alloyId70 = models[i];__alloyId68.push(require('ti.map').createAnnotation(_.isFunction(__alloyId70.transform) ? __alloyId70.transform() : __alloyId70.toJSON()));
				}$.__views.mapView.annotations = __alloyId68;
		};__alloyId71.on('fetch destroy change add remove reset', __alloyId72);mapClicked ? $.addListener($.__views.mapView, 'click', mapClicked) : __defers['$.__views.mapView!click!mapClicked'] = true;$.__views.__alloyId69 = Ti.UI.createButton({ title: "Move", bottom: 10, id: "__alloyId69" });
		$.__views.mapView.add($.__views.__alloyId69);
		btClick ? $.addListener($.__views.__alloyId69, 'click', btClick) : __defers['$.__views.__alloyId69!click!btClick'] = true;$.__views.__alloyId66 = Ti.UI.createTab({ window: $.__views.__alloyId67, title: "Tab4", icon: "KS_nav_views.png", id: "__alloyId66" });
		__alloyId29.push($.__views.__alloyId66);$.__views.__alloyId74 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Tab5", layout: "vertical", id: "__alloyId74" });
		$.__views.__alloyId75 = Ti.UI.createButton({ title: "Login", top: 50, id: "__alloyId75" });
		$.__views.__alloyId74.add($.__views.__alloyId75);
		loginFunction ? $.addListener($.__views.__alloyId75, 'click', loginFunction) : __defers['$.__views.__alloyId75!click!loginFunction'] = true;$.__views.textField = Ti.UI.createTextField({ borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, color: "#336699", top: "10", width: "250", height: "60", autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE, id: "textField", hintText: "userid" });
		$.__views.__alloyId74.add($.__views.textField);
		$.__views.textField2 = Ti.UI.createTextField({ borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, color: "#336699", top: "10", width: "250", height: "60", autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE, id: "textField2", hintText: "password" });
		$.__views.__alloyId74.add($.__views.textField2);
		$.__views.__alloyId73 = Ti.UI.createTab({ window: $.__views.__alloyId74, title: "Tab5", icon: "KS_nav_views.png", id: "__alloyId73" });
		__alloyId29.push($.__views.__alloyId73);$.__views.index = Ti.UI.createTabGroup({ tabs: __alloyId29, id: "index" });
		$.__views.index && $.addTopLevelView($.__views.index);
		exports.destroy = function () {
				__alloyId42 && __alloyId42.off('fetch destroy change add remove reset', __alloyId43);__alloyId71 && __alloyId71.off('fetch destroy change add remove reset', __alloyId72);
		};

		_.extend($, $.__views);

		$.index.open();
		Alloy.Collections.Visa.fetch();
		Alloy.Collections.consulate.fetch();
		Alloy.Globals.tabGroup = $.index;

		function jpgClick(e) {
				var eventListController = Alloy.createController('detail', { record_id: e.row.record_id
				});
				$.index.activeTab.open(eventListController.getView());
		};

		function tableClick(e) {
				var eventListController = Alloy.createController('eventList', {
						class_id: e.row.class_id,
						priceValue: e.row.priceValue,
						price_id: e.row.price_id
				});

				$.index.activeTab.open(eventListController.getView());
		};

		function btClick(e) {
				$.mapView.region = {
						latitude: 23.27856,
						longitude: 114.165228,
						latitudeDelta: 0.001,
						longitudeDelta: 0.001
				};

				console.log("here");
		};

		function mapClicked(e) {

				if (e.clicksource == 'rightButton' && e.annotation.id == 'Cebu') {

						console.log("map Clicked");
						alert("map Clicked");
				}
		}

		function transformFunction(model) {
				var transform = model.toJSON();

				transform.name = "🤣" + transform.name;

				return transform;
		}

		function loginFunction(e) {

				var xhr = Ti.Network.createHTTPClient();
				xhr.onload = function (e) {
						alert(this.responseText);
				};
				xhr.open('POST', 'http://simplelogin.cs7184.comp.hkbu.edu.hk/User/signin');
				xhr.send({
						"userid": $.textField.value,
						"password": $.textField2.value
				});
		}

		__defers['$.__views.__alloyId32!click!jpgClick'] && $.addListener($.__views.__alloyId32, 'click', jpgClick);__defers['$.__views.__alloyId46!click!tableClick'] && $.addListener($.__views.__alloyId46, 'click', tableClick);__defers['$.__views.__alloyId56!click!tableClick'] && $.addListener($.__views.__alloyId56, 'click', tableClick);__defers['$.__views.mapView!click!mapClicked'] && $.addListener($.__views.mapView, 'click', mapClicked);__defers['$.__views.__alloyId69!click!btClick'] && $.addListener($.__views.__alloyId69, 'click', btClick);__defers['$.__views.__alloyId75!click!loginFunction'] && $.addListener($.__views.__alloyId75, 'click', loginFunction);

		_.extend($, exports);
}

module.exports = Controller;