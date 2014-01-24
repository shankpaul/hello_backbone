define([
           'js/views/headerView',
           'js/views/homeView'
       ],function(HeaderView,HomeView){
           var AppRouter = Backbone.Router.extend(
               {
                   routes: {
                       '' :  'header',
                       'home' : 'home'
                   },
                   initialize: function(){
                       $('body').empty();
                   },

                   header: function() {
                       $('body').append(new HeaderView().render().el);
                   },
                   home: function() {
                       $('body').append(new HomeView().render().el);
                   }
               });
           return AppRouter;
       });
