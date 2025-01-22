import mongoose from "mongoose";

const DB = process.env.DATABASE_URL

export function dbConnect(){
    if(mongoose.connection.readyState >=1){
        console.log("already connected");
        return;
    }
    mongoose.connect(DB as string)
    console.log("first connect database");
}