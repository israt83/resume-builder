import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId : { type: mongoose.Schema.Types.ObjectId, ref:'User' },
    title : { type: String, default:"Unititled Resume" },
    public : { type: Boolean, default:false },
    template : { type: String, default:"classic" },
    accent_color : { type: String, default:"#6366F1" },
    professional_summary : { type: String, default:"" },
    skills : [{type: String}],
    personal_info :{
        image:{ type: String, default:"" },
        full_name : {type: String, default:"" },
        email : {type: String, default:"" },
        phone : {type: String, default:"" },
        location : {type: String, default:"" },
        profession : {type: String, default:"" },
        linkedin : {type: String, default:"" },
        website : {type: String, default:"" },
    },
    experience : [
        {
         company : {type: String },
         position : {type: String },
         start_date : {type: String },
         end_date : {type: String },
         description : {type: String },
         is_current : {type: Boolean },
        }
    ],
    project:[
        {
            name : {type: String },
            description : {type: String },
            type : {type: String },
        }
    ],
    education : [{
        institution : {type: String},
        degree : {type: String},
        field : {type: String},
        graduation_date : {type: String},
        gpa: {type: String},
    }],

}, { timestamps: true , minimize: false });



export default mongoose.model("Resume", resumeSchema);