const mongoose=require('mongoose');
const profilesSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    company:String,
    website:String,
    location:String,
    status:{
        type:String,
        required:true,
       
    },
    skills:{
        type:[String],
        required:true
    },
    bio:{
        type:String
    },
    githubusername:{
        type:String
        
        
    },
    experience:[
        {
            title:{
                type:String,
                required:true
            },
            company:{
                type:String,
                required:true
            },
            location:String,
            from:{
                type:Date,
                 required:true,
            },
            to:Date,
            current:{
                type:Boolean,
                 default:false
            },
            description:{
                type:String
            }
        }
    ],
    education:[
        {
            school:{
                type:String,
                required:true
            },
            degree:{
                type:String,
                required:true
            },
            fieldOfStudy:{
                type:String,
                required:true
            },
            from:{
                type:Date,
                required:true
            },
            to:{
                type:Date,
                
            },
            current:{
                type:Boolean,
                default:false
            },
            description:{
                type:String,
               
            }

        }
    ],
    social:{
        youtube:String,
        twitter:String,
        facebook:String,
        linkedin:String,
        instagram:String
    },
    
    date:{
        type:Date,
        default:Date.now
        
    }

});

module.exports=Profile=mongoose.model("Profile",profilesSchema);