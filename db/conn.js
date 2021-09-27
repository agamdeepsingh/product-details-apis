const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://agam0110:L0p8RK84RCKbpNHL@cluster0.hpvlq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log(" Connection is successful.");
  })
  .catch((e) => {
    console.log("Connection Failed. ");
  });
