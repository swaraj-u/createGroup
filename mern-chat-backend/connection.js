const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://web:web@cluster0.6f2ju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, ()=> {
  console.log('connected to mongodb')
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Error connecting to MongoDB:", err));

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});