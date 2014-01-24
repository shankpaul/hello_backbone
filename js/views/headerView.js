define([
 'text!templates/headerTemplate.html'
 ], function(tmpl){
   var HeaderView = Backbone.View.extend(
   {
     className: "headClass",

     events: {
     },

     template: _.template(tmpl),

     initialize: function(options) {

     },

     render: function() {
       this.$el.html(this.template());
       return this;
     },

   });

return HeaderView;

});
