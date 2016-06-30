//   tpl.loadTemplates(['start'], function () {
   
// });
   var Router = Backbone.Router.extend({
  routes:
    {
      '':'home',
      'insert':'page1',
      'update/:id':'page2',
      'delete/:id':'page3',
      'insert1':'insert'

    }
  });
 var router = new Router();
    router.on('route:home',function(){          
      var homeprint = new HomePrint()
      homeprint.render();
            })
     router.on('route:page1',function(){
       var pagedisplay = new PageDisplay();
       pagedisplay.render();
    })
    router.on('route:insert',function(){
       var insert = new Insert();
        insert.render();
    })
    router.on('route:page2',function(id){
       var updatedisplay = new UpdateDisplay();
       updatedisplay.render({id:id});
    })
    router.on('route:page3',function(id){
       var deletedisplay = new DeleteDisplay();
        deletedisplay.render({id:id});
    })
  Backbone.history.start();

