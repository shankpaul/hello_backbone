define(['js/Router', 'locale'], function(AppRouter, locale) {
	   var Application = function(){
           };
           Application.prototype.start = function(){
               this.setGlobals();
               Backbone.history.start();
           };
           
           Application.prototype.setGlobals = function() {
               this.locale = locale;
               this.appRouter = new AppRouter;
               this.apiUrl = 'http://idealhomesre.com/api/api/prop';
           };
           return Application;
       });
