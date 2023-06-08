const mongoose = require("mongoose");

const app = require("./app");

//

const DB_HOSR =
	"mongodb+srv://Andrii:666999@cluster0.rpjckph.mongodb.net/my-contacts?retryWrites=true&w=majority";

mongoose
	.connect(DB_HOSR)
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
