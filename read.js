// Db connection 
const mongo= require("mongoose");
mongo.connect("mongodb://localhost:27017/clientss",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("success"))
.catch((err)=>console.log("failed".err));
// model 

// --------- Mongoose Schema defines the Structure of the Compontent --------- //
const schema_define = new mongo.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    active:Boolean,
    create_at:{
        type:Date,
        default:Date.now
    }

})
// --------- End ---------  //

const playlist= new mongo.model("playlist",schema_define);

const getdata = async() => {

    try{
    const result = await playlist
    .find()
    .sort({name : -1});

    console.log(result);
    }
    catch(err){
        console.log("Error,contact to developer",err);
    }
}
 
// Display result
getdata();
