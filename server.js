const mongoose = require('mongoose');
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:127.0.0.1:27017/social-network-api',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`🌍 Connected on localhost:${PORT}`);
  });
});
