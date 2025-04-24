const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/mydb';


const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);

        console.log("connected to mongodb successfully");
    }
    catch (error) {
        console.log("error occured", error);
    }
}





module.exports = connectToMongo;

