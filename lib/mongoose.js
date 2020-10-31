const mongoose = require('mongoose');

const config = require('../config');

const { mongodbURL } = config.mongo;

const connectMongoDB = () => {
  mongoose.connect(
    mongodbURL,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    },
  );

  mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
  });

  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection has occured ${err} error`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection is disconnected due to application termination');
      process.exit(0);
    });
  });
};
module.exports = { connectMongoDB };
