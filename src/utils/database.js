import mongoose from "mongoose";

let isConnected = false;
const ConnectDb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    isConnected = true;
  } catch (error) {
    //
  }
};
export default ConnectDb;
