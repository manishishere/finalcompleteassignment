var userController = require("./controller/user")()

module.exports = function (app)
{
console.log("userController");
    app.get("/user",userController.display);
    app.get("/search",userController.search);
    app.get("/",userController.homescreen);
	app.get("/",userController.list);
	app.post("/insert",userController.insert1);
	app.post("/search",userController.search);
	app.post("/check",userController.check);
	//app.post("/user",userController.insert1);
	//app.put("/",userController.update);
	//app.delete("/",userController.remove);
	//app.get("/insert",userController.insert);
	//app.get("/update",userController.update);
	//app.get("/deletee",userController.deletee);
	app.put("/update/:id",userController.update1);
	app.delete("/deletee/:id",userController.deletee1);
}