require("dotenv").config();
const mongoose = require("mongoose");
const logger = require("./logger");

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected', () => {
  logger.info('MongoDB connection successful');
});

mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
});

module.exports = mongoose;