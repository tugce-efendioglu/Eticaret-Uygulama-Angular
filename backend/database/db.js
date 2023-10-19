const mongoose = require("mongoose");

const uri = "mongodb+srv://mongodb:1@eticaretdb.xh6rbxv.mongodb.net/?retryWrites=true&w=majority";

const connection = () =>{
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("MongoDb bağlantısı başarılı!"))
    .catch((err)=> console.log ("Bağlantı Hatası! Hata: " + err.message));
}

module.exports = connection;


