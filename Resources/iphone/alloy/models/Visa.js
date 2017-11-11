var Alloy = require('/alloy'),
    _ = require("/alloy/underscore")._,
    model,
    collection;

exports.definition = {
	config: {
		"columns": {
			"id": "INTEGER PRIMARY KEY",
			"city": "text",
			"country": "text",
			"region": "text",
			"class": "text",
			"price": "text",
			"validTill": "text",
			"quota": "text",
			"dates": "text",
			"dateStart": "text",
			"dateEnd": "text",
			"image": "text"
		},

		"URL": "https://api.myjson.com/bins/mdqdr",

		"adapter": {
			"type": "sqlrest",
			"collection_name": "Visa",
			"idAttribute": "id"
		},

		"deleteAllOnFetch": true
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

model = Alloy.M('Visa', exports.definition, []);

collection = Alloy.C('Visa', exports.definition, model);

exports.Model = model;
exports.Collection = collection;