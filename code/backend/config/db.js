const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jegadeshjeg24341_db_user:Jegadeesh23.@cluster0.plfc9u4.mongodb.net/?appName=Cluster0"
      
    );
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
};

module.exports = connectDB;
