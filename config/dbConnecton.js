const mongoose = require("mongoose");
const logger = require("./logger");
// const logger = require("./logger");


const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.DATABASE_URI, () => {
      logger.info("Database connected");
    });
  } catch (error) {
    logger.error(error);
  }
};

module.exports = connectDB;
