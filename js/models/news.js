define([],function(){
	var News = Backbone.Model.extend({
		initialize: function() {
		},
		url: function(){
			return HelloApp.apiUrl + "/news";
		}
	});
	return News;
});
