require.config({
                   baseUrl: function(){ 
                       if(ENV.NAME == 'test') 
                           return "/test/public";
                       else 
                           return "/";
                   }(),
                   paths: {
                       text: 'js/libs/amd/plugins/text',
                       locale: 'js/locale/en-US'
                   } 
               });

$(document).ready(function(){
                      require(['js/application'],function(Application) {
                                  window.HelloApp = new Application();
                                  HelloApp.start();
                              });
                  });
