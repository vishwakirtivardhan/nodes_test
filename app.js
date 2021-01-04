const mongos= require("mongoose");
// --------- connection create and add new Db if not there ---------  //

mongos.connect("mongodb://localhost:27017/clientss",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("Db connected..."))
.catch((err)=>console.log(err));
console.log("this is check");
// --------- End --------- //

// --------- Mongoose Schema defines the Structure of the Compontent --------- //
const schema_define = new mongos.Schema({
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
// --------- Create Collection In MongoDB (  ----- Model ----- ) --------- //
const Playlist = new mongos.model("Playlist",schema_define);
// --------- End --------- //


// --------- ES6 Functions --------- //
const output = async ()=>{
    try{
// --------- Create document or insert --------- //
const DataSet = new Playlist({

    name:"Learn_3",
    age:55,
    active:false
});
// Save Code
const result = await DataSet.save();
console.log(result);
// --------- End --------- //

    }
    catch(err){
     console.log(erro);
    }
}

// --------- End ES6 fucntion --------- //
output();