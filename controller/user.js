var userModel=require("../models/userModel");
var login=require("../models/login");
var express = require('express');
var router = express.Router();
flag=0;
module.exports = function()
{
	var user={}

	user.homescreen=function(req,res){	
				
			res.render('login.html');	 
				}


	user.search=function(req,res){	

					var n = req.body.name;
						console.log(n);
			 
			           userModel.findOne({mealname:n}, function(err, doc){
			           	if(doc)
			           		{
			           		//	res.render('last.html', { topic: "topic" });
							res.json(doc);
							//res.render("last.html",{doc:doc});

			           		}
			           	else
			           	{
			           		res.send("this  meal is not available");
			           	}
					});
				}


		  user.check=function(req,res){

 		 var n = req.body.name;
		var p = req.body.password;
	
		login.findOne({name:n,password:p }, function (err, yes) {
			if(yes)

				{
					flag=0;
							console.log("in user list");
		userModel.find({}).exec(function(err, topic){		 
			console.log("Topic data--------");
			console.log(topic);
			res.render('disp.html', { topic: topic });	 
			// change here for log in
 		});

				}	
				else {
				//	alert("login failed")
					res.render("login.html")


				}

  				})
	}


	user.display=function(req,res){	

					console.log("in user list");
					if(flag==0)
					{
								 userModel.find({}).exec(function(err, topic){
								 res.json(topic);
					  });
					}
					else if(flag==1)
					{
						userModel.find({}).sort({ mealprice: 1 }).exec(function(err, topic){
								 res.json(topic);
					})
					}

				}
	user.list=function(req,res){	
								
		// console.log("in user list");
		// userModel.find().sort({ mealprice:-1 }).exec(function(err, topic){		 
		// 	console.log("Topic data");
		// 	console.log(topic);
		// 	res.render('disp.html', { topic: topic });	 
 	// 	});
 		      			userModel.find().exec(function(err, topic) { 
 		      				console.log("actual data-------------------------------------");
 		      				console.log(topic);
 		      				res.render('disp.html', { topic: topic });	 
       			 });
	}


			   user.deletee=function(req,res){	
			   	res.render('deletee.html');

			  }
			  user.update1=function(req,res){

	    var fname = req.body.fname;
        var lname = req.body.lname;
        var id = req.body.id;
       if(id=="sort")console.log("sort");
       {
       	flag=1;
       			// userModel.find().sort({ mealprice:-1 }).exec(function(err, model) { 

       			// 			console.log(model);
			       // 					console.log("in user list");
       			//  });
       }	
		
		}


		user.deletee1=function(req,res){	
			
			  var ffname = req.body.fname;
			  var id = req.body.id;
			 console.log("-----------------deletee----------------------------");
		
        console.log(req.params.id);
        idd=req.params.id;
    //    userModel.findOneAndRemove({ id : "56b9859e512ebe7312a543e6"}, function (err,offer){
    //    	console.log(err);
    //    	console.log("in delete in function")

    // //   res.redirect("/")
    //   });
			console.log("-----------all---------------------------")
						if(idd==="all")
						{
						userModel.remove({},function(err,del)
							{
								if(del)
									{
											console.log("all deleted");
											res.render("/");
											console.log("all deleted");
									}
							});
						}
            userModel.findOneAndRemove({ '_id' : idd }, function (err,offer){

      
      });

		
	 }
			  user.insert1=function(req,res){	

			  
			      var ffname = req.body.fname;
             	var llname = req.body.lname; 
  							 console.log("-----------------insert----------------------------");
  							 console.log(ffname)
             			  var user = new userModel({fname:ffname,lname:llname}) 
        		user.save(function(err, data){   
          		if (err){
          			console.log(err);
          			 return res.send(err);
          			}
      

      });
		
	 }

	return user;
}
