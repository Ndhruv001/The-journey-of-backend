import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate';

//video schema
const videoSchema = new Schema(
    {
        videoFile : {
            type : String,//cloudnery
            required : true
        },
        thumbnail : {
            type : String, //cloudnery
            required : true
        },
        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        duration : {
            type : Number,//cloudnery
            required : true
        },
        view : {
            type : Number,
            default : 0
        },
        isPublished : {
            type : Boolean,
            default : true
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {
        timestamp : true
    })

//plugin for aggregation
videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model('Video',videoSchema);