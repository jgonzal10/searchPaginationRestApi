import mongoose from "mongoose";
const Schema =mongoose.Schema;

const ApplicationSchema = new Schema(
    {
        email:String,
        name:String,
        lastName:String,
        creationDate:String
    }
)
export {ApplicationSchema}