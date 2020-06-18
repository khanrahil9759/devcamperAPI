const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected.`.cyan.underline.bold);
};

module.exports = connectDB;
