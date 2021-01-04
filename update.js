const mongo= require("mongoose");
mongo.connect("mongodb://localhost:27017/clientss",{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{console.log("Sucess..")})
.catch((err)=>{console.log(err)});

const Schemaupdate={
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
}

// model

const modellist= new mongo.model("playlist",Schemaupdate);

const result =async()=>{
     try{
         const update= await modellist.updateOne({name:"code"},{$set:{name:"Learn_4"}});
         console.log(update);
     }
     catch(err){
        console.log(err);
     }

}

// output function call
result();