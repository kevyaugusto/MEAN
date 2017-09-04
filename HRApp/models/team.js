var mongoose = require('mongoose');
var postFind = require('mongoose-post-find');
var async = require('async');

var Schema = mongoose.Schema;
var TeamSchema = new Schema({
	name: {
		type: String,
		rquired: true
	},
	members: {
		type: [Schema.Types.Mixed]
	}
});

function _attachMembers(employee, result, callback){
	employee.find({team: result._id}, function(error, employees) {
		if (error) {
			return callback(error);
		}

		result.members = employees;
		callback(null, result);
	});
}

TeamSchema.plugin(postFind, {
	find: function(result, callback) {
		var employee = mongoose.model('Employee');
		async.each(result, 
			function(item, callback) {
				_attachMembers(employee, item, callback);
			},
			function(error) {
				if (error) {
					return callback(error);
				}
				callback(null, result);
			}
		);
	},
	findOne: function(result, callback) {
		var employee = mongoose.model('Employee');
		_attachMembers(employee, result, callback);
	}
});

module.exports = mongoose.model('Team', TeamSchema);