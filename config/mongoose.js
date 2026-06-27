import mongoose from "mongoose";

const DB = async () => {
  try {
    if (mongoose.connection.readystate === 1) {
      console.log("Already Connected");
      return;
    }
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("DB Connected");
      return;
    }
  } catch (error) {
    console.error(`Error of Connected DB: ${error.message}`);
    process.exit(1);
  }
};
export default DB;
