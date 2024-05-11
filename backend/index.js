const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
require("express-async-errors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const api = require("./routes/api");
const errorHandler = require("./middleware/errorHandler");

//TODO FIX THIS
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

app.use(
  cors({
    origin: process.env.BASE_URI || "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(express.json());

app.use("/api", api);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
