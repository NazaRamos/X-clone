import { connect } from "mongoose";

connect(process.env.DB)
	.then(()=> console.log(`DB connected on PORT ${process.env.PORT}`))
	.catch(() => console.log("Couldn't connect to DB"))