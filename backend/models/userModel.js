const {createHmac,randomBytes,randomUUID}=require('crypto')
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type: String,
    required:true,
    unique:true
  },
  uuid:{
    type:String,
    unique:true
  },
  salt:{
    type:String,
  },
  password:{
    type:String,
    required:true
  },
  isMailVerified:{
    type:Boolean,
    default:false
  }
},{timestamps:true})

userSchema.pre("save",function(next){
  const user=this;
  if(!user.isModified('password')) return
  const salt=randomBytes(8).toString();
  const hashedPassword=createHmac('sha256',salt).update(user.password).digest('hex');
  const uuid=randomUUID().slice(0,6);
  this.salt=salt;
  this.password=hashedPassword;
  next();
  this.uuid=uuid;
})
const user=mongoose.model('user',userSchema)

module.exports={
  user
}