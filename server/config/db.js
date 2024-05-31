const mongoose = require("mongoose");
require("dotenv").config();
try {
  mongoose.connect(process.env.DATABASE, {
    dbName: "mern-ecommerce",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
