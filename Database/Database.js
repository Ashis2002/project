import mongoose from "mongoose";

const connection_DB = ()=>{
    mongoose.connect(process.env.DATA_BASE)
    .then(()=>{console.log("connected to database successfully!")})
    .catch((error)=>{console.error(error)});
}

export default connection_DB;