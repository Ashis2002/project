import { app } from "./app.js";
import connection_DB from "./Database/Database.js";
import errorMiddleware from "./Middlewares/error.js";

connection_DB();

app.listen(process.env.PORT,()=>{
    console.log(`server is working on: || http://localhost:${process.env.PORT}`)
})


//errormiddleware
app.use(errorMiddleware);