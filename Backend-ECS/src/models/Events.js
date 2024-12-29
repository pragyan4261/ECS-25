<<<<<<< HEAD
import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const eventSchema= new Schema({
    Events:{
        name:String,
        type:String,
        participant:{
            name:String,
            scholar_ID:Number,
            email:String,
            mobile_No:Number,
            teamName:{
             type:String,
             required:false,
            },
            teamMembers:[]
        }
    },
})

eventSchema.plugin(mongooseAggregatePaginate)
=======
import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const eventSchema= new Schema({
    Events:{
        name:String,
        type:String,
        participant:{
            name:String,
            scholar_ID:Number,
            email:String,
            mobile_No:Number,
            teamName:{
             type:String,
             required:false,
            },
            teamMembers:[]
        }
    },
})

eventSchema.plugin(mongooseAggregatePaginate)
>>>>>>> d7aa76d64fe0b6d3299a44becd680ebf0512e45f
export const Event=mongoose.model("Event",eventSchema)