define(['js/models/news'],function(News){
           var NewsCollection = Backbone.Collection.extend(
               {
                   model: News,
                   url: function(){
                     return HelloApp.apiUrl + "/news";
                   },

                   initialize: function(models,options) {
                   },

                   parse: function(response) {
                       return response;
                   }
                   
               });
           return NewsCollection;
       });
