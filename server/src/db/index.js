import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const ConnectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // const dbConnection = await mongoose.connect("mongodb://127.0.0.1:27017", {
    //   dbName: DB_NAME,
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    console.log(
      `\n MongoDB Connected !! DB HOST : ${dbConnection.connection.host}`
    );
  } catch (error) {
    console.log("DB Error : ", error);
    process.exit(1);
  }
};

export default ConnectDB;
