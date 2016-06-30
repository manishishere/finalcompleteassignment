
  // var ffname = "manish";
  // var llname = "pendse";
  var ID="123"
   temparr = [ ];
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
// user model
  var UserModel = Backbone.Model.extend({
           urlRoot: '/user'
           });
  var UserModel1 = Backbone.Model.extend({
           urlRoot: '/insert'
           });
  var UserModel2 = Backbone.Model.extend({
           urlRoot: '/deletee',
           });
  var UserModel3 = Backbone.Model.extend({
           urlRoot: '/update'
           });

  var router = new Router();
   window.CalcModel = Backbone.Model.extend({});
    var Insert = Backbone.View.extend({
    el:'.page',
        render:function(){              
               var template = _.template( $("#insert").html(), {} );
                 this.$el.html( template );
        },
       formHandler: function(evt) {
         evt.preventDefault();
         var fname = $('#username').val();
         var lname = $('#username2').val();
         ffname=fname;
         llname=lname;             
         console.log(llname)
       },

  })
  var PageDisplay = Backbone.View.extend({    
    formHandler: function(evt) {
      evt.preventDefault();
      ffname = $('#username').val();
      llname = $('#username2').val();
      f = $('#username3').val();
      p = $('#username4').val();
      c = $('#usernam5').val();
  
      var user1 = new UserModel1();   
      user1.save({fname:ffname,lname:llname}, 
        {
          type: 'POST',
          success: function (data) {
          console.log("The model has been saved to the server");
          document.write(data.toJSON());
          console.log(data.toJSON());
        },
    error: function (data) {
        console.log("Something went wrong while saving the model");
        console.log(data);
        }
        });
        alert("saving done.");
        window.location.href='/'; 
       },
        el:'.page', render:function(fname,lname){  
          var template = _.template( $("#insert").html(), {} );
          this.$el.html(template );         
           }, 
        events: {
         "submit form": "formHandler"
       },
    });

   $(document).ready(function(){
    var myForm = new PageDisplay({el: "#my-app"});
      });
   

 var UpdateDisplay = Backbone.View.extend({
          //   el:'.page',
          //   render:function(option){ 
          //   if(option.id){     
          //   console.log(option.id);        
          //      var template = _.template( $("#update").html(), {} );
          //      this.$el.html( template );
          //    }
          //    else {
          //     console.log("not id present")
          //    }
          //   }
          // })
          formHandler: function(evt) {
        evt.preventDefault();
        ffname = $('#username').val();
        llname = $('#username2').val();
        console.log("++++++++++++++");
      //  console.log(ffname);
      //  console.log(llname);
        console.log(ID);
   
      
        var user = new UserModel3();   
        user.save({id:ID,fname:ffname,lname:llname}, {
            success: function(model, response) {
              console.log(model);
              console.log(response);
              console.log('success');
            },
            error: function(model, response) {
              console.log(model);
            },

        }); 
          window.location.href='#';  
               
         },

          el:'.page', render:function(option){  
            ID=option.id;
            var template = _.template( $("#update").html(), {} );
            this.$el.html(template );
          //  console.log(fname)
           // console.log(lname)         
          },
          events: {
           "submit form": "formHandler"
         },
  })
      $().ready(function(){
          var myForm = new UpdateDisplay({el: "#my-app"});
            });
  
  var DeleteDisplay = Backbone.View.extend({
     formHandler: function(evt) {
        evt.preventDefault();
        idval = $('#idhtml').val();
        console.log("in destroy function1.");
        console.log(idval);       
      },
    el:'.page', render:function(option){  
       var user2 = new UserModel2({id: option.id });  
        console.log("in destroy function.2");
      if (confirm("are sure u want to delete:") == true) {
           user2.destroy(
          { 
            type: "DELETE",
            success: function(model, response){ console.log('sucess'); 
            console.log(model); }, 
            error: function(model, response){ console.log('error'); }          
          })
           window.location.href='#';
        }

        else { window.location.href='#'; }
                        
      },
    events: {
         "submit form": "formHandler"
       },
        
      })
     $().ready(function(){
        var myForm = new DeleteDisplay({el: "#my-app"});
      });

  var HomePrint = Backbone.View.extend({
    el:'.page',
    render:function(option){      

        var that=this;
        console.log("in render methode");     
        var user = new UserModel();   
        user.fetch({
        success:function (data){
        console.log("-----------------------in usermodel------------------------");



        temparr.push(data.toJSON());
     //   console.log(temparr[0][0].mealname);
       call(temparr);
        var template = _.template( $("#home").html(), {userdata:data.toJSON()} );
     //    var template = _.template( $("#home").html(), {userdata: temparr[0]} );

        that.$el.html( template );

          }, error:function(res){
                console.log("in error")
                console.log(res);
          }
        });
    },

  events: {
    "submit form": "formHandler"

  },
   formHandler: function(evt) {
    evt.preventDefault();
   //  idd = $('#idhtml').val();
   //  console.log(idd);
   // console.log("in delete");
   // var plant = document.getElementById("idhtml");
   // console.log(plant);

  }
});

function call(temparr)
{ 
   
   (temparr[0][0]);


}

  console.log(temparr);
          angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = ["wadapav",
"pavbhaji",
"varanbhat" ,
"chikantika",
"panirtikka",
"buttertikka",
"bbq",
"american chopise"  ,
"fried rice ",
"mmasala papad",
"misal" ,
"dahibhale",
"samosa plate ",
"uttapa"];

});

$().ready(function(){
  var myForm = new HomePrint({el: "#my-app"});
});




