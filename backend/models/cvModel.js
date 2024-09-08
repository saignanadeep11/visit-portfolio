const mongoose=require('mongoose')

const cvSchema=new mongoose.Schema({
  uuid:{
    type:mongoose.Schema.Types.String,
    ref:"user",
    unique:true
  },
  views:{
    type:Number,
    default:0
  },
  name:{
    type:String,
    required:true
  },
  headLine:{
    type:String,
    default:""
  },
  about:{
    type:String,
    default:""
  },
  skills:{
    type:String,
    default:""
  },
  experience:{
    type:Array,
    default:""
  },
  contactInfo:{
    phoneNo:{
      type:String,
    default:""
    },
    emailId:{
      type:String,
    default:""
    },
    linkedIn:{
      type:String,
    default:""
    }
  },
  noOfChanges:{
    type:Number,
    default:0
  },
  maxNoOfChanges:{
    type:Number,
    default:1
  }
},{timestamps:true})

const cv=mongoose.model("cv",cvSchema)

module.exports=cv;