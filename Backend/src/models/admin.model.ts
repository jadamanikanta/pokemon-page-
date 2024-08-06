import mongoose,{Schema,Document} from "mongoose";


interface admin extends Document {
    name:string;
    email:string;
    password:string; 
};

const adminSchema:Schema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{timestamps:true});

const adminModel = mongoose.model('Admin',adminSchema); 

export default adminModel;