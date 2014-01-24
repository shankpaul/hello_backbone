
define([
  'js/collections/news',
  'js/views/headerView',  
  'js/views/newsItemView',
  'text!templates/homeTemplate.html'
  ], function(NewsCollection,HeaderView,NewsItemView,tmpl){
   var HomeView = Backbone.View.extend(
   {
     className: "homeClass",

     events: {
     },

     template: _.template(tmpl),

     initialize: function(options) {
      this.collection = new NewsCollection([]);
      this.headerView = new HeaderView();
    },

    render: function() {
      this.$el.html(this.headerView.render().el);
      this.$el.append(this.template());
      var self = this;
      this.collection.fetch({
        success: function(collection) {
          self.renderNews(collection);
        },
        error: function() {

        }
      })
      return this;
    },

    renderNews: function(collection) {
      var self = this;
      var ul = $('<ul/>');
      collection.each(function(newsItem) {
        var newsItemView = new NewsItemView({model : newsItem});
        ul.append(newsItemView.render().el);
      });
      this.$el.append(ul);
    }

  });

   return HomeView;

 });
