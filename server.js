const mongoose = require("mongoose");

const app = require("./app");

//
// console.log(process.env);

const { DB_HOST } = process.env;

mongoose
	.connect(DB_HOST)
	.then(() => {
		app.listen(3000);
	})
	.catch((error) => {
		console.log(error.message);
		process.exit(1);
	});

// app.listen(3000, () => {
// 	console.log("Server running. Use our API on port: 3000");
// });
