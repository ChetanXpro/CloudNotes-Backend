require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const corsOption = require("./config/corsOptons");
const connectDB = require("./config/dbConnecton");
const logger = require("./config/logger");

const port = process.env.PORT || 3500;

app.use("*", cors(corsOption));

app.use(express.json());
app.use(cookieParser());

app.use("/user", require("./routes/userRoutes"));
app.use("/note", require("./routes/noteRoutes"));
app.use("/public", require("./routes/publicNotesRoute"));
app.use("/auth", require("./routes/authRoutes"));

app.use(errorHandler);
app.use(cookieParser());

connectDB();
app.listen(port, () => {
  logger.info(`Server running on ${port}`);
});
