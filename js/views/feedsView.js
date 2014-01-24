define([
           'js/collections/feeds',
           'js/views/paginationView',
           'js/views/feedView'
       ], function(Feeds, PaginationView, FeedView){
           var FeedsView = Backbone.View.extend(
               {
                   className: "feeds row-fluid",
                   
                   events: {
                   },
                   
                   initialize: function(options) {
                       this.collection = new Feeds([], {item: options.item});
                   },
                   
                   render: function() {
                       var self = this;
                       this.collection.fetch({
                                                 success: function(collection){
                                                     self.collection = collection;
                                                     self.collection.on('nextPage', self.renderWithList, self);
                                                     self.collection.on('previousPage', self.renderWithList, self);
                                                     self.renderWithList();
                                                 }
                                             });
                       return this;
                   },

                   renderWithList: function(){
                       var self = this;
                       this.$el.html("");
                       _.each(this.collection.currentPageFeeds(), function(feed){
                                                            var feedView = new FeedView({model: feed});
                                                            self.$el.append(feedView.render().el);
                                                        });
                       this.topPaginationView = new PaginationView({collection: this.collection});
                       this.bottomPaginationView = new PaginationView({collection: this.collection});
                       this.$el.prepend(this.topPaginationView.render().el);
                       this.$el.append(this.bottomPaginationView.render().el);
                   }
                   
               });
           
           return FeedsView;
           
       });
