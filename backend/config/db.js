const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://bhumikavarshney940_db_user:bhumika123@cluster0.6af3qdh.mongodb.net/?appName=Cluster0")
    console.log("MongoDB Connected")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDB