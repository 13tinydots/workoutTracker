const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes")
const PORT = process.env.PORT || 3001;
const app = express();
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use("/", apiRouter);
 
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});