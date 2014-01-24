define([
 'text!templates/newTemplate.html',
 'js/models/news'
 ], function(tmpl,NewsModel){
   var NewsItemView = Backbone.View.extend(
   {
     className: "newsItemClass",

     events: {
      'click .js-delete':'deleteNews',
      'click .js-save':'saveNews'
    },

    template: _.template(tmpl),

    initialize: function(options) {

    },

    render: function() {
     this.$el.html(this.template(this.model.toJSON()));
     return this;
   },

   deleteNews: function(e) {

    this.model = new NewsModel();
    this.model.set('id',123);
    this.model.destroy();
  },
  saveNews: function(e) {
    this.model.set({name:'new name'});
    this.model.save();
  }

});

   return NewsItemView;

 });
