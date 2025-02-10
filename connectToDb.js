const mongoose = require('mongoose');
const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://s2017215624:Yousuf100331@digitallibrary.awedajm.mongodb.net/?retryWrites=true&w=majority&appName=digitalLibrary", {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log('Connected to Mongodb Atlas');} catch (error) {
        console.error(error);
    }
}
module.exports =connectToDB;