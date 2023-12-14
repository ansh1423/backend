/**
 * db.js
 * @description :: exports database connection using mongoose
 */

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const uri = process.env.DB_URL;

const dbConnection = () =>{
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
      }).then(()=>{
        console.log('Connection Successful :', uri);
      }).catch((err)=>{
        console.log('Error in mongodb connection', uri);
      })
}




module.exports = dbConnection;