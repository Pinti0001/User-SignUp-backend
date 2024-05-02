import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    content : {
        type : String,
    },
    description : {
        type : String
    },
    author : {
        type : String,
        trim : true,
        toLowerCase : true,
        required : true,
    },
    comments : {
        type : Number,
    },
    title : {
        type : String
    }
}, {timestamps : true})

export default mongoose.model("Post", postSchema)