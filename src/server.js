const { http, app } = require("./app");

app.set("port", process.env.PORT || 3000);

// http.listen(http.get("port"), () => {
// 	console.log(`Todo marcha bien, servidor corriendo en localhost/${http.get("port")}`);
// });

// const port = 3000;

http.listen(app.get("port"), () => {
	console.log(
		`Hola mi señor, todo marcha bien tenemos el servidor corriendo en localhost/${app.get("port")}`
	);
});
