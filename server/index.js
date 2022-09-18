import express from 'express'
import mongoose from 'mongoose'
const app = express();
import router from '/routes/user-routes';


app.use("/api/user", router);

mongoose.connect("mongodb+srv://larry6683:19992000@cluster0.t7e8udf.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(5000))
.then(()=>console.log("Connected to database and listening to port 5000"))
.catch((err)=>console.log(err));
