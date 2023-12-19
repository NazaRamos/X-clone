import { connect } from "mongoose";

connect(process.env.DB)
	.then(()=> console.log('DB connected'))
	.catch(() => console.log("Couldn't connect to DB"))