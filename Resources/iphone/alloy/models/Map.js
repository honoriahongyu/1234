var Alloy = require('/alloy'),
    _ = require("/alloy/underscore")._,
    model,
    collection;

var args = $.args;
var details_city = args.city;
Alloy.Collections.consulate.fetch();
Alloy.Collections.Visa.fetch();
function M_filterFunction(collection) {
	return collection.filter(function (model) {
		return model.get("city") == details_city;
	});
}

model = Alloy.M('map', exports.definition, []);

collection = Alloy.C('map', exports.definition, model);

exports.Model = model;
exports.Collection = collection;