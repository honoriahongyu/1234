var Alloy = require('/alloy'),
    _ = require("/alloy/underscore")._,
    model,
    collection;

exports.definition = {
	config: {

		adapter: {
			type: "sql",
			collection_name: "consulate",

			"db_file": "/Visa.sqlite",
			"idAttribute": "id"
		}

	},
	extendModel: function (Model) {
		_.extend(Model.prototype, {});

		return Model;
	},
	extendCollection: function (Collection) {
		_.extend(Collection.prototype, {});

		return Collection;
	}
};

model = Alloy.M('consulate', exports.definition, []);

collection = Alloy.C('consulate', exports.definition, model);

exports.Model = model;
exports.Collection = collection;