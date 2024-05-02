import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    
    username : {
        type : String,
        trim : true,
        toLowerCase : true,
        required : true,
        unique : true
    },
    password : {
        type : String,
        trim : true,
        required : true
    },
    email : {
        type : String,
        toLowerCase : true,
        required : true,
        unique : true
    },
    mobile : {
        type : Number,
    },
    isDeleted : {
        type : Boolean,
        default : false
    }
}, {timestamps : true})

export default mongoose.model("User", userSchema)