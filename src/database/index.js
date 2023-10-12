import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl = "mongodb+srv://arifnayan28:123456782023@ecwd.3ibxrrm.mongodb.net/";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Database connection successful!"))
    .catch((err) =>
      console.log(`Database error! ${err.message}`)
    );
};

export default connectToDB;