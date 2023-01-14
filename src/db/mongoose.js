const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://AlumniPortal:Pratik@cluster0.3c9ywxx.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
